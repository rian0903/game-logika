"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, writeBatch, doc } from "firebase/firestore";
import { SAMPLE_QUESTIONS } from "@/lib/questions_data";

export default function SeedPage() {
    const [status, setStatus] = useState("Idle");
    const [loading, setLoading] = useState(false);

    const handleSeed = async () => {
        setLoading(true);
        setStatus("Starting seeding...");

        try {
            const batch = writeBatch(db);
            const collectionRef = collection(db, "questions");

            // Optional: Check if empty or just add
            // For simplicity, we just add. 
            // User can delete manually from console if duplicates pile up.

            let count = 0;
            for (const q of SAMPLE_QUESTIONS) {
                // We use addDoc wrapper style with batch if needed, but batch.set is for known IDs.
                // For auto-ID, simple addDoc loop is fine for small data, or batch.set(doc(collection...))

                const newDocRef = doc(collectionRef);
                batch.set(newDocRef, q);
                count++;
            }

            await batch.commit();
            setStatus(`Success! Added ${count} questions to 'questions' collection.`);
        } catch (error: any) {
            console.error(error);
            setStatus(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-10 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Database Seeder</h1>
            <p className="mb-6 text-gray-600">Click the button below to populate Firestore with sample data.</p>

            <button
                onClick={handleSeed}
                disabled={loading}
                className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
                {loading ? "Seeding..." : "Seed Questions"}
            </button>

            {status && <p className="mt-4 font-mono text-sm">{status}</p>}
        </div>
    );
}
