'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function SearchBox() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`)
        console.log("hello", router);
    }
    return (
        <form onSubmit={handleSubmit} className="flex justify-between mx-auto max-w-6xl px-5">
            <input
                type="text"
                placeholder="Search keywords..."
                className="w-full h-14 rounded-md palceholder-gray-500 outline-none bg-transparent"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button className="text-amber-600 disabled:text-gray-400"
                disabled={search === ''}
            >
                Search
            </button>
        </form>
    )
}
