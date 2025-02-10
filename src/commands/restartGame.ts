import { Telegraf, Context } from 'telegraf';
import { resetGame, startNewGame } from '../services/game.service';

export const setupRestartGameCommand = (bot: Telegraf<Context>) => {
    bot.command('restart_game', async (ctx) => {
        const userId = ctx.from.id;
        resetGame(userId);
        startNewGame(userId);
        await ctx.reply('Игра перезапущена! Введите ваше слово:');
    });

    bot.action('restart_game', async (ctx) => {
        const userId = ctx.from.id;
        resetGame(userId);
        startNewGame(userId);
        await ctx.reply('Игра перезапущена! Введите ваше слово:');
    });
};
