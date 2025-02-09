import { Telegraf, Context } from 'telegraf';
import { saveUser } from '../services/user.service';

export const setupFillNameCommand = (bot: Telegraf<Context>) => {
    bot.action('fill_name', async (ctx) => {
        await ctx.reply('Пожалуйста, введите ваше имя:');
        bot.on('text', async (ctx) => {
            const firstName = ctx.message.text;
            saveUser(ctx.from.id, { firstName });
            await ctx.reply(`Спасибо, ${firstName}! Теперь я буду вас так называть.`);
        });
    });
};
