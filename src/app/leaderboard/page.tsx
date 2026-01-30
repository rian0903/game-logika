"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { rtdb } from "@/lib/firebase";
import { ref, get, query, orderByChild, limitToLast } from "firebase/database";

interface ScoreEntry {
    id: string;
    username: string;
    score: number;
}

export default function LeaderboardPage() {
    const [scores, setScores] = useState<ScoreEntry[]>([]);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const leaderboardRef = ref(rtdb, 'leaderboard');

                // Realtime DB sorts ascending by default, so we get last 10 (highest scores)
                const topScoresQuery = query(leaderboardRef, orderByChild('score'), limitToLast(10));

                const snapshot = await get(topScoresQuery);

                if (snapshot.exists()) {
                    const data: ScoreEntry[] = [];
                    snapshot.forEach((childSnapshot) => {
                        data.push({
                            id: childSnapshot.key as string,
                            ...childSnapshot.val()
                        });
                    });

                    // Reverse to show highest first (descending)
                    setScores(data.reverse());
                } else {
                    setScores([]);
                }
            } catch (error: any) {
                console.error("Error fetching leaderboard:", error);
                setError(error.message);
            }
        };

        fetchScores();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8 flex flex-col items-center">
            <div className="w-full max-w-2xl">
                <header className="flex justify-between items-center mb-8 sticky top-0 z-20 bg-gray-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl">
                    <button
                        onClick={() => router.push("/")}
                        className="text-gray-400 hover:text-white transition flex items-center gap-2 group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        <span className="hidden sm:inline font-medium">Halaman Depan</span>
                    </button>
                    <h1 className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 uppercase tracking-tight">
                        🏆 Top 10
                    </h1>
                    <div className="w-8"></div> {/* Spacer */}
                </header>

                {error && (
                    <div className="bg-red-500/20 border border-red-500/50 text-red-100 p-4 rounded-xl mb-6 backdrop-blur-sm animate-pulse">
                        <strong>Gagal memuat data:</strong> {error}.
                    </div>
                )}

                <div className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-4 md:p-8 shadow-2xl border border-white/5 overflow-hidden">
                    <div className="space-y-3">
                        {scores.map((entry, index) => (
                            <div
                                key={entry.id}
                                className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 hover:scale-[1.01] ${index === 0 ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/10 border-yellow-500/50 shadow-yellow-500/10' :
                                    index === 1 ? 'bg-gray-700/40 border-gray-600/50' :
                                        index === 2 ? 'bg-gray-700/20 border-gray-600/30' :
                                            'bg-gray-800/40 border-transparent hover:bg-gray-700/40'
                                    }`}
                            >
                                <div className="flex items-center space-x-4 overflow-hidden">
                                    <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-black rounded-xl shadow-lg ${index === 0 ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white text-xl' :
                                        index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-gray-800 text-lg' :
                                            index === 2 ? 'bg-gradient-to-br from-orange-700 to-orange-800 text-orange-100 text-lg' :
                                                'bg-gray-700 text-gray-500 text-sm'
                                        }`}>
                                        {index + 1}
                                    </div>
                                    <div className="min-w-0">
                                        <p className={`font-bold truncate text-base md:text-lg ${index === 0 ? 'text-yellow-400' : 'text-gray-200'}`}>
                                            {entry.username}
                                        </p>
                                        <p className="text-xs text-gray-500 font-mono">Rank #{index + 1}</p>
                                    </div>
                                </div>
                                <div className="font-black font-mono text-xl md:text-2xl text-white pl-4">
                                    {entry.score}
                                </div>
                            </div>
                        ))}

                        {scores.length === 0 && !error && (
                            <div className="text-center text-gray-500 py-12 flex flex-col items-center">
                                <span className="text-4xl mb-2 opacity-50">📉</span>
                                <p>Belum ada data skor.</p>
                                <p className="text-sm opacity-50">Mainkan game untuk jadi yang pertama!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
