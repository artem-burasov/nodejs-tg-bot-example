import { Telegraf, Context } from 'telegraf';
import { getUser } from '../services/user.service';

export const setupStartCommand = (bot: Telegraf<Context>) => {
    bot.start(async (ctx) => {
        const user = getUser(ctx.from.id);
        if (user?.firstName) {
            await ctx.reply(`Привет, ${user.firstName}!`);
        } else {
            await ctx.reply('Привет! Пожалуйста, заполни своё имя.', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Заполнить имя', callback_data: 'fill_name' }],
                    ],
                },
            });
        }
    });
};
