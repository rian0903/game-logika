"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { SAMPLE_QUESTIONS } from "@/lib/questions_data";
import { shuffleArray } from "@/lib/utils";
import { useUser } from "@/context/UserContext";
import { ref, push } from "firebase/database";
import { rtdb } from "@/lib/firebase";

interface Question {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    category: string;
    explanation: string;
}

export default function PlayPage() {
    const { category: categoryId } = useParams();
    const { username, score: contextScore, updateScore, resetGame } = useUser(); // use updateScore to sync, resetGame for cleanup if needed
    const router = useRouter();

    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const [isSaving, setIsSaving] = useState(false); // New state for saving status

    // Shuffled options for current question
    const [currentOptions, setCurrentOptions] = useState<string[]>([]);

    useEffect(() => {
        if (!username) {
            router.push("/");
            return;
        }

        // Use Local Data directly
        let filtered = SAMPLE_QUESTIONS;
        if (categoryId && categoryId !== 'all') {
            const decodedCat = decodeURIComponent(categoryId as string);
            filtered = SAMPLE_QUESTIONS.filter(q => q.category === decodedCat);
        }

        // Map if needed (data structure matches exactly, so minimal mapping)
        const mappedQuestions = filtered.map((q, idx) => ({
            id: `local-${idx}`,
            ...q
        }));

        if (mappedQuestions.length > 0) {
            // Shuffle and take only 10 questions per session
            const shuffled = shuffleArray(mappedQuestions);
            setQuestions(shuffled.slice(0, 10));
        }
    }, [categoryId, username, router]);

    useEffect(() => {
        if (questions.length > 0 && currentIdx < questions.length) {
            // Shuffle options for the NEW question
            setCurrentOptions(shuffleArray(questions[currentIdx].options));
            setSelectedOption(null);
            setIsAnswered(false);
        }
    }, [currentIdx, questions]);

    const handleAnswer = (option: string) => {
        if (isAnswered) return;

        setSelectedOption(option);
        setIsAnswered(true);

        const isCorrect = option === questions[currentIdx].correctAnswer;
        if (isCorrect) {
            setScore(prev => prev + 1);
        }
    };

    const finishGame = async () => {
        // Calculate final score including the last answer
        const isLastCorrect = selectedOption === questions[currentIdx].correctAnswer;
        const finalScore = score + (isLastCorrect ? 1 : 0);
        updateScore(finalScore);

        setIsSaving(true);
        try {
            const leaderboardRef = ref(rtdb, 'leaderboard');
            await push(leaderboardRef, {
                username,
                score: finalScore * 10,
                timestamp: Date.now(), // Realtime DB uses timestamp differently, Date.now() is simplest
            });

            router.push("/leaderboard");
        } catch (error) {
            console.error("Error saving score:", error);
            alert("Gagal menyimpan skor ke leaderboard. Cek koneksi internet.");
            router.push("/leaderboard");
        } finally {
            setIsSaving(false);
        }
    };

    const nextQuestion = () => {
        if (currentIdx + 1 < questions.length) {
            setCurrentIdx(prev => prev + 1);
        } else {
            finishGame();
        }
    };

    if (isSaving) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-600 font-semibold animate-pulse">Menyimpan skor ke Leaderboard...</p>
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Soal Kosong!</h2>
                <p className="text-gray-600 mb-4">Tidak ada soal yang tersedia untuk kategori ini.</p>
                <div className="flex space-x-4">
                    <button onClick={() => router.push("/category")} className="px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition shadow-lg">
                        Kembali
                    </button>
                </div>
            </div>
        );
    }

    const currentQ = questions[currentIdx];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center">
            {/* Sticky Header */}
            <header className="sticky top-0 z-10 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm px-4 py-3">
                <div className="max-w-3xl mx-auto flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">Pertanyaan</span>
                        <div className="text-xl sm:text-2xl font-black text-gray-800 leading-none">
                            <span className="text-blue-600">{currentIdx + 1}</span>
                            <span className="text-sm sm:text-base font-medium text-gray-400 ml-1">/ {questions.length}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <span className="block text-[10px] sm:text-xs text-gray-400 font-bold uppercase">Skor Saat Ini</span>
                            <div className={`text-xl sm:text-2xl font-black leading-none ${score > 0 ? 'text-green-600' : 'text-gray-800'}`}>
                                {score * 10}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="w-full max-w-3xl px-4 py-6 flex-grow flex flex-col">
                {/* Question Card */}
                <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden mb-6 flex-grow flex flex-col border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="p-6 md:p-10 flex-grow">
                        <h2 className="text-lg md:text-2xl font-bold text-gray-800 leading-relaxed mb-6 md:mb-8 font-sans">
                            {currentQ.question}
                        </h2>

                        <div className="space-y-3 md:space-y-4">
                            {currentOptions.map((opt, idx) => {
                                let btnClass = "w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all duration-200 font-medium relative overflow-hidden group ";

                                if (isAnswered) {
                                    if (opt === currentQ.correctAnswer) {
                                        btnClass += "bg-green-50 border-green-500 text-green-800 shadow-md";
                                    } else if (opt === selectedOption) {
                                        btnClass += "bg-red-50 border-red-500 text-red-800 opacity-90";
                                    } else {
                                        btnClass += "bg-gray-50 border-gray-100 text-gray-400 opacity-50 grayscale";
                                    }
                                } else {
                                    btnClass += "bg-white border-gray-100 hover:border-blue-400 hover:bg-blue-50 text-gray-700 hover:shadow-md active:scale-[0.99] active:bg-blue-100";
                                }

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(opt)}
                                        disabled={isAnswered}
                                        className={btnClass}
                                    >
                                        <div className="flex items-start md:items-center relative z-10">
                                            <span className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg mr-4 text-sm md:text-base font-bold transition-colors ${isAnswered && opt === currentQ.correctAnswer ? 'bg-green-200 text-green-900' :
                                                isAnswered && opt === selectedOption ? 'bg-red-200 text-red-900' :
                                                    'bg-gray-100 text-gray-500 group-hover:bg-blue-200 group-hover:text-blue-700'
                                                }`}>
                                                {String.fromCharCode(65 + idx)}
                                            </span>
                                            <span className="text-sm md:text-base leading-snug">{opt}</span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Explanation / Next Logic */}
                    {isAnswered && (
                        <div className="bg-blue-50/50 p-6 md:p-8 border-t border-blue-100 animate-in slide-in-from-bottom-10 fade-in duration-300">
                            <div className="mb-6">
                                <h4 className="flex items-center gap-2 font-bold text-blue-900 mb-2">
                                    <span>💡</span> Pembahasan
                                </h4>
                                <p className="text-blue-800/80 text-sm md:text-base leading-relaxed bg-white/60 p-4 rounded-xl border border-blue-100">
                                    {currentQ.explanation || "Tidak ada pembahasan untuk soal ini."}
                                </p>
                            </div>
                            <button
                                onClick={nextQuestion}
                                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 text-lg flex items-center justify-center gap-2 group"
                            >
                                {currentIdx + 1 === questions.length ?
                                    <span>Lihat Hasil Akhir 🏁</span> :
                                    <>
                                        <span>Soal Berikutnya</span>
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </>
                                }
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
