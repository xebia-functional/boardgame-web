/// <reference types="vite/client" />

type HotGame = {
    name: string;
    description: string;
};

type GameBGG = {
    id: number;
    name: {
        type: string;
        value: string;
    };
    yearpublished: {
        value?: string;
    };
};
