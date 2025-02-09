import { Telegraf } from 'telegraf';
import { setupStartCommand } from './commands/start';
import { setupFillNameCommand } from './commands/fillName';
import 'dotenv/config';

const bot = new Telegraf(process.env.BOT_TOKEN as string);

setupStartCommand(bot);
setupFillNameCommand(bot);

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
