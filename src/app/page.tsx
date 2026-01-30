"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

export default function LoginPage() {
  const [inputName, setInputName] = useState("");
  const { login } = useUser();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputName.trim()) {
      login(inputName);

      // Set cookie for middleware
      document.cookie = `user_session=${encodeURIComponent(inputName)}; path=/; max-age=86400`; // 1 day

      // Admin / Viewer Bypass Logic
      if (inputName.trim().toUpperCase() === "PANITIA") {
        router.push("/leaderboard");
      } else {
        router.push("/play/all");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 animate-gradient-xy text-white p-4">
      <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-lg transform transition-all hover:scale-[1.01] duration-500 border border-white/20">
        <div className="text-center mb-10">
          <span className="inline-block text-5xl md:text-6xl mb-4 animate-bounce">🧠</span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-800 tracking-tight leading-tight">
            Game Logika <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">SISWA</span>
          </h1>
          <p className="text-gray-500 mt-3 text-sm md:text-base font-medium">Asah kemampuan logikamu sekarang!</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">
              Nama Pemain
            </label>
            <input
              type="text"
              id="username"
              required
              className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all text-gray-900 text-lg placeholder-gray-400 font-medium"
              placeholder="Ketik namamu di sini..."
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold py-4 rounded-xl shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200"
          >
            🚀 Mulai Test
          </button>

          <p className="text-center text-xs text-gray-400 mt-6">
            Tips: Cukup Login dengan nama <strong className="text-gray-500">KAMU</strong> untuk memulai test.
          </p>
        </form>
      </div>
    </div>
  );
}
