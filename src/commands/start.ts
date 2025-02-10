import { Telegraf, Context } from 'telegraf';

export const setupStartCommand = (bot: Telegraf<Context>) => {
    bot.start(async (ctx) => {
        await ctx.reply(`Привет, это игра 5 букв!`);
        await ctx.replyWithMarkdownV2(`
                🎮 *Инструкция по игре:*
                \\- Я загадываю слово из 5 букв\\.
                \\- Вы должны угадать это слово за 6 попыток\\.
                \\- После каждой попытки я покажу, какие буквы угаданы:
                    \\- 🟨: Буква на правильном месте\\.
                    \\- ⬜: Буква есть в слове, но на другом месте\\.
                    \\- ⬛: Буквы нет в слове\\.
                \\- Чтобы начать, нажмите кнопку *"Начать игру"*\\.
            `, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Начать игру', callback_data: 'start_game' }],
                ],
            },
        });
    });
};
