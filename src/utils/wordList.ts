const words = [
    'океан', 'аудио', 'мюсли', 'лидер', 'книга', 'ручка', 'лампа', 'сахар', 'перец',
];

export const getRandomWord = (): string => {
    return words[Math.floor(Math.random() * words.length)];
};
