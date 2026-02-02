export interface SkinApi {
    name: string;
    provider: string;
    url: ((val: string) => string) | string;
    type: "image" | "model";
}

export const APIS: SkinApi[] = [
    // Mineatar
    { name: "Head", provider: "Mineatar", type: "image", url: (uuid) => `https://api.mineatar.io/head/${uuid}` },
    { name: "Body Full", provider: "Mineatar", type: "image", url: (uuid) => `https://api.mineatar.io/body/full/${uuid}` },
    { name: "Body Front", provider: "Mineatar", type: "image", url: (uuid) => `https://api.mineatar.io/body/front/${uuid}` },
    { name: "Body Back", provider: "Mineatar", type: "image", url: (uuid) => `https://api.mineatar.io/body/back/${uuid}` },
    { name: "Body Left", provider: "Mineatar", type: "image", url: (uuid) => `https://api.mineatar.io/body/left/${uuid}` },
    { name: "Body Right", provider: "Mineatar", type: "image", url: (uuid) => `https://api.mineatar.io/body/right/${uuid}` },

    // McStats
    { name: "Skull", provider: "McStats", type: "image", url: (uuid) => `https://skins.mcstats.com/skull/${uuid}` },
    { name: "Bust", provider: "McStats", type: "image", url: (uuid) => `https://skins.mcstats.com/bust/${uuid}` },
    { name: "Body Front", provider: "McStats", type: "image", url: (uuid) => `https://skins.mcstats.com/body/front/${uuid}` },
    { name: "Body Side", provider: "McStats", type: "image", url: (uuid) => `https://skins.mcstats.com/body/side/${uuid}` },

    // NickAc (NMSR)
    { name: "Face", provider: "NMSR", type: "image", url: (uuid) => `https://nmsr.nickac.dev/face/${uuid}` },
    { name: "Front Full", provider: "NMSR", type: "image", url: (uuid) => `https://nmsr.nickac.dev/frontfull/${uuid}` },
    { name: "Head", provider: "NMSR", type: "image", url: (uuid) => `https://nmsr.nickac.dev/head/${uuid}` },
    { name: "Head Iso", provider: "NMSR", type: "image", url: (uuid) => `https://nmsr.nickac.dev/headiso/${uuid}` },
];

export const getMinotarApis = (username: string): SkinApi[] => [
    { name: "Avatar", provider: "Minotar", type: "image", url: `https://minotar.net/avatar/${username}` },
    { name: "Avatar (Resize)", provider: "Minotar", type: "image", url: `https://minotar.net/avatar/${username}/100.png` },
    { name: "Helm", provider: "Minotar", type: "image", url: `https://minotar.net/helm/${username}/100.png` },
    { name: "Body", provider: "Minotar", type: "image", url: `https://minotar.net/body/${username}/100.png` },
    { name: "Armor Body", provider: "Minotar", type: "image", url: `https://minotar.net/armor/body/${username}/100.png` },
    { name: "Bust", provider: "Minotar", type: "image", url: `https://minotar.net/bust/${username}/100.png` },
    { name: "Armor Bust", provider: "Minotar", type: "image", url: `https://minotar.net/armor/bust/${username}/100.png` },
];
