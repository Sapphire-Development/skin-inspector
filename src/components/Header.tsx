import React from "react";

export function Header() {
    return (
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
            <div className="space-y-4 max-w-lg">
                <div className="flex items-center gap-2">
                    <img src="/sapphirewhite.png" alt="Sapphire Logo" className="h-14 w-auto" />
                    <div className="h-8 w-[1px] bg-zinc-800 mx-2"></div>
                    <h1 className="text-4xl font-bold tracking-tight text-white">
                        Skin Inspector
                    </h1>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed">
                    High-definition Minecraft skin viewer. Enter a username to inspect textures and models from multiple providers.
                </p>
            </div>
        </div>
    );
}
