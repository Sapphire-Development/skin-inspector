import React from "react";
import { Search, Loader2, Share2, Box } from "lucide-react";

interface SearchBarProps {
    username: string;
    setUsername: (val: string) => void;
    onSearch: (e: React.FormEvent) => void;
    loading: boolean;
    error: string | null;
    uuid: string | null;
    onShare: () => void;
    onOpen3D: () => void;
}

export function SearchBar({ username, setUsername, onSearch, loading, error, uuid, onShare, onOpen3D }: SearchBarProps) {
    return (
        <div className="w-full md:w-[500px]">
            <form onSubmit={onSearch} className="group relative">
                <div className="relative flex items-center gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username..."
                            className="w-full bg-zinc-900/50 border border-zinc-800 text-sm text-white placeholder-zinc-500 rounded-lg pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-zinc-700/50 focus:border-zinc-700 transition-all font-medium"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-4 py-3 bg-zinc-100 text-zinc-950 rounded-lg font-medium text-sm hover:bg-white hover:shadow-lg hover:shadow-zinc-500/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Search"}
                    </button>
                    <button
                        type="button"
                        onClick={onOpen3D}
                        disabled={!uuid}
                        className="px-3 py-3 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg hover:text-white hover:border-zinc-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        title="3D View"
                    >
                        <Box className="w-4 h-4" />
                    </button>
                    <button
                        type="button"
                        onClick={onShare}
                        className="px-3 py-3 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg hover:text-white hover:border-zinc-700 transition-all"
                        title="Share Link"
                    >
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs px-1 h-6">
                    {error ? (
                        <span className="text-red-400">{error}</span>
                    ) : uuid ? (
                        <span className="text-zinc-500 font-mono flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 inline-block" />
                            {uuid}
                        </span>
                    ) : (
                        <span className="text-zinc-600">Enter a username to search</span>
                    )}
                </div>
            </form>
        </div>
    );
}
