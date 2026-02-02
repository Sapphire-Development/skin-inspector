import React from "react";

export function Credits() {
    return (
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-zinc-500 text-sm">
                Powered by public Minecraft skin APIs.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-zinc-600 uppercase tracking-widest">
                <a href="https://playerdb.co/" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">PlayerDB</a>
                <a href="https://mineatar.io/" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">Mineatar</a>
                <a href="https://mcstats.com/" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">McStats</a>
                <a href="https://nmsr.nickac.dev/" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">NickAc</a>
                <a href="https://minotar.net/" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">Minotar</a>
            </div>

            <div className="flex items-center gap-3 pt-4">
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-zinc-900/50 border border-zinc-800/50 rounded-xl text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shadow-lg group"
                    title="GitHub"
                >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                </a>
                <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-[#5865F2]/10 border border-[#5865F2]/20 rounded-xl text-[#5865F2] hover:bg-[#5865F2] hover:text-white transition-all shadow-lg"
                    title="Discord"
                >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.89,105.89,0,0,0,126.6,80.22c1.24-23.28-3.28-47.54-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" /></svg>
                </a>
            </div>
        </div>
    );
}
