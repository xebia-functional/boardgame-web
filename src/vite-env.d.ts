/// <reference types="vite/client" />

type HotGame = {
    name: string;
    description: string;
};

type GameBGG = {
    id: number;
    name: { value: string };
    yearpublished?: { value: number };
};

type PlayerDTO = {
    id: number;
    name: string;
    nickname: string;
};

type Player = {
    id: number;
    name: string;
    nickname: string;
};

type Game = {
    id: number;
    title: string;
};

type Message = {
    text: string;
    from: 'user' | 'ai';
};
