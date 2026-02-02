import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { APIS, getMinotarApis } from "../lib/skin-apis";
import { SkinCard } from "./SkinCard";
import { SearchBar } from "./SearchBar";
import { Credits } from "./Credits";
import { Skin3DViewer } from "./Skin3DViewer";
import { Header } from "./Header";
import { useSkinSearch } from "../hooks/useSkinSearch";
import { useUrlSync } from "../hooks/useUrlSync";

export default function SkinViewer() {
    const [username, setUsername] = useState("Notch");
    const [show3D, setShow3D] = useState(false);

    // Custom Hooks
    const { uuid, loading, error, search } = useSkinSearch();

    // Setup URL Sync
    const { updateUrl } = useUrlSync({
        setUsername,
        onSearch: (user) => {
            search(user);
        }
    });

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast.success("Link copied to clipboard!");
        } catch (err) {
            toast.error("Failed to copy link");
        }
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setShow3D(false);

        const resolvedUsername = await search(username);
        if (resolvedUsername) {
            updateUrl(resolvedUsername);
            // If the API capitalizes it differently, we might want to update local state too
            if (resolvedUsername !== username) setUsername(resolvedUsername);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-white/20 p-6 md:p-12 lg:p-24 relative">
            <Toaster position="top-center" theme="dark" />

            <div className="max-w-6xl mx-auto space-y-16">

                <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
                    <Header />

                    <SearchBar
                        username={username}
                        setUsername={setUsername}
                        onSearch={handleFormSubmit}
                        loading={loading}
                        error={error}
                        uuid={uuid}
                        onShare={handleShare}
                        onOpen3D={() => setShow3D(true)}
                    />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                    {uuid && APIS.map((api, i) => (
                        <SkinCard key={uuid + i + api.provider} api={api} value={uuid} index={i} />
                    ))}
                    {(!error && uuid) && getMinotarApis(username).map((api, i) => (
                        <SkinCard key={uuid + `minotar-${i}`} api={api} value={""} index={i + APIS.length} />
                    ))}
                    {uuid && (
                        <SkinCard
                            api={{ name: "Skin", provider: "NMSR", type: "image", url: (uuid) => `https://nmsr.nickac.dev/skin/${uuid}` }}
                            value={uuid}
                            index={APIS.length + getMinotarApis(username).length}
                            key={uuid + "NMSR"}
                        />
                    )}
                </div>

                <Credits />

                {(show3D && uuid) && (
                    <Skin3DViewer
                        skinUrl={`https://api.mineatar.io/skin/${uuid}`}
                        onClose={() => setShow3D(false)}
                    />
                )}
            </div>
        </div>
    );
}
