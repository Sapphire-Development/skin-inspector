import React from "react";
import { Download } from "lucide-react";
import type { SkinApi } from "../lib/skin-apis";

interface SkinCardProps {
    api: SkinApi;
    value: string;
    index?: number;
}

export function SkinCard({ api, value, index = 0 }: SkinCardProps) {
    const url = typeof api.url === 'function' ? api.url(value) : api.url;

    const handleDownload = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            const ext = url.split('.').pop()?.split(/[?#]/)[0] || 'png';
            const filename = `${api.provider}_${api.name.replace(/\s+/g, '_')}.${ext.length > 4 ? 'png' : ext}`;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        } catch (err) {
            console.error("Download failed, falling back to new tab", err);
            window.open(url, '_blank');
        }
    };

    return (
        <div
            className="group flex flex-col h-full bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 rounded-xl overflow-hidden transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 50}ms` }}
        >
            <div className="flex-1 w-full bg-[#0a0a0a] relative flex items-center justify-center p-4 border-b border-zinc-800/50 min-h-[200px]">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>

                <img
                    src={url}
                    alt={`${api.provider} ${api.name}`}
                    className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />

                <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                        onClick={handleDownload}
                        className="p-1.5 bg-zinc-950/90 border border-zinc-800 rounded-md text-zinc-400 hover:text-white hover:border-zinc-600 transition-all shadow-xl"
                        title="Download Image"
                    >
                        <Download className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="px-3 py-2.5 bg-zinc-900/80 backdrop-blur-sm border-t border-zinc-800/50">
                <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-zinc-200 truncate pr-2" title={api.name}>{api.name}</span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-600">{api.provider}</span>
                </div>
            </div>
        </div>
    );
}
