import { Telegraf, Context } from 'telegraf';
import { message } from 'telegraf/filters'

import { getGameState, addAttempt, startNewGame } from '../services/game.service';
import { checkWord } from '../utils/wordChecker';

export const setupPlayGameCommand = (bot: Telegraf<Context>) => {
    bot.command('start_game', async (ctx) => {
        const userId = ctx.from.id;
        const game = startNewGame(userId);
        await ctx.reply(`Игра началась! Загадано слово из 5 букв. Введите ваше слово:`);
    });

    bot.action('start_game', async (ctx) => {
        const userId = ctx.from.id;
        const game = startNewGame(userId);
        await ctx.reply(`Игра началась! Загадано слово из 5 букв. Введите ваше слово:`);
    });

    bot.on(message('text'), async (ctx) => {
        const userId = ctx.from.id;
        const game = getGameState(userId);

        console.log("game: ", game)

        if (!game || game.isGameOver) return;

        const word = ctx.message.text.toLowerCase();

        if (word.length !== 5) {
            await ctx.reply('Слово должно состоять из 5 букв.');
            return;
        }

        const result = checkWord(word, game.targetWord);
        addAttempt(userId, word);

        await ctx.reply(result.join(''));

        if (word === game.targetWord) {
            await ctx.reply('🎉 Поздравляем! Вы угадали слово!', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Начать сначала', callback_data: 'restart_game' }],
                    ],
                },
            });
        } else if (game.attempts.length >= 6) {
            await ctx.reply(`Игра окончена. Загаданное слово: ${game.targetWord}`, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Начать сначала', callback_data: 'restart_game' }],
                    ],
                },
            });
        }
    });
};
