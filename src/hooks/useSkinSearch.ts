import { useState } from "react";
import { toast } from "sonner";

interface SearchResult {
    uuid: string | null;
    loading: boolean;
    error: string | null;
    search: (username: string) => Promise<string | null>;
}

export function useSkinSearch(): SearchResult {
    const [uuid, setUuid] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const search = async (searchUser: string) => {
        if (!searchUser) return null;

        setLoading(true);
        setError(null);
        setUuid(null);

        try {
            const res = await fetch(`https://playerdb.co/api/player/minecraft/${searchUser}`);
            const data = await res.json();

            if (res.ok && data.success) {
                const newUuid = data.data.player.id;
                setUuid(newUuid);
                toast.success(`Found skin for ${data.data.player.username}`);
                return data.data.player.username as string;
            } else {
                throw new Error(data.message || "Player not found");
            }
        } catch (err: any) {
            const msg = err.message || "Failed to resolve username";
            setError(msg);
            toast.error(msg);
            setUuid(null);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { uuid, loading, error, search };
}
