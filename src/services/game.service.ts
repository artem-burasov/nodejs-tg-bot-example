import { IGameState } from '../interfaces/game.interface';
import { getRandomWord } from '../utils/wordList';

const games: Record<number, IGameState> = {};

export const startNewGame = (userId: number): IGameState => {
    const targetWord = getRandomWord();
    games[userId] = {
        targetWord,
        attempts: [],
        isGameOver: false,
    };
    return games[userId];
};

export const getGameState = (userId: number): IGameState | undefined => {
    return games[userId];
};

export const addAttempt = (userId: number, word: string): IGameState => {
    const game = games[userId];
    if (game) {
        game.attempts.push(word);
        if (word === game.targetWord) {
            game.isGameOver = true;
        }
    }
    return game;
};

export const resetGame = (userId: number): void => {
    delete games[userId];
};
