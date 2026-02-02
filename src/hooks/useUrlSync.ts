import { useEffect } from "react";

interface UseUrlSyncProps {
    setUsername: (username: string) => void;
    onSearch: (username: string) => void;
}

export function useUrlSync({ setUsername, onSearch }: UseUrlSyncProps) {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const userParam = params.get("username");

        if (userParam) {
            setUsername(userParam);
            onSearch(userParam);
        } else {
            onSearch("Notch");
        }

        const handlePopState = () => {
            const newParams = new URLSearchParams(window.location.search);
            const newUser = newParams.get("username") || "Notch";
            setUsername(newUser);
            window.location.reload();
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const updateUrl = (username: string) => {
        const url = new URL(window.location.href);
        url.searchParams.set("username", username);
        window.history.pushState({}, "", url);
    };

    return { updateUrl };
}
