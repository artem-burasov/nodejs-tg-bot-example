import 'dotenv/config';

import { Telegraf } from 'telegraf';

import { setupStartCommand } from './commands/start';
import { setupPlayGameCommand } from './commands/playGame';
import { setupRestartGameCommand } from './commands/restartGame';

const bot = new Telegraf(process.env.BOT_TOKEN as string);

setupStartCommand(bot);
setupPlayGameCommand(bot);
setupRestartGameCommand(bot);

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
