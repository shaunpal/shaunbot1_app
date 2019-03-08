require('newrelic');
const Telegraf = require("telegraf");

const PORT = process.env.PORT || 3000;
const URL = process.env.URL || "https://shaunbot1.herokuapp.com";
const API_TOKEN = "697351660:AAHIU27aTT8OFIff-SZqd_UhGonuGQU_uFY";
const bot = new Telegraf(API_TOKEN);

bot.use(Telegraf.log());

bot.help(({ reply }) => reply("Hello I'm the Solex Bot"));

const coffeeOrderSessions = [];

// bot.command("orderopen", ctx => {
//   const { from } = ctx.update.message;
//   const coffeeGif = "CgADBAADdwADg731Uoi1wlQtUhaEAg";
//   ctx.replyWithAnimation(coffeeGif, { caption: "Coffee Order Open!" });
//   const newSession = {
//     from,
//     orders: [],
//     isOrderOpen: true
//   };
//   coffeeOrderSessions.push(newSession);
// });

bot.start(ctx => ctx.reply("Hello"));
bot.command("hello", context => context.reply("hello to you too!!"));
bot.command('inline', (ctx) => {
  return ctx.reply('<b>Coke</b> or <i>Pepsi?</i>', Extra.HTML().markup((m) =>
    m.inlineKeyboard([
      m.callbackButton('Coke', 'Coke'),
      m.callbackButton('Pepsi', 'Pepsi')
    ])))
})
if (process.env.NODE_ENV === "production") {
  bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
  bot.startWebhook(`/bot${API_TOKEN}`, null, PORT);
} else {
  bot.launch();
}
