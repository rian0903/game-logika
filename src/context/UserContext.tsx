"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface UserContextType {
    username: string;
    score: number;
    login: (name: string) => void;
    updateScore: (newScore: number) => void;
    resetGame: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const [username, setUsername] = useState<string>("");
    const [score, setScore] = useState<number>(0);

    // Load from localStorage on mount
    useEffect(() => {
        const savedName = localStorage.getItem("utbk_username");
        if (savedName) {
            setUsername(savedName);
        }
    }, []);

    const login = (name: string) => {
        setUsername(name);
        localStorage.setItem("utbk_username", name);
    };

    const updateScore = (newScore: number) => {
        setScore(newScore);
    };

    const resetGame = () => {
        setScore(0);
    };

    return (
        <UserContext.Provider value={{ username, score, login, updateScore, resetGame }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}
