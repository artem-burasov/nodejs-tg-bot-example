export const checkWord = (attempt: string, targetWord: string): string[] => {
    const result: string[] = [];
    for (let i = 0; i < attempt.length; i++) {
        if (attempt[i] === targetWord[i]) {
            result.push('🟨');
        } else if (targetWord.includes(attempt[i])) {
            result.push('⬜');
        } else {
            result.push('⬛');
        }
    }
    return result;
};
