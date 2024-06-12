import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'
//import { webApp } from 'telegraf/typings/button'

const token = '7001356554:AAFOqYy9jxxjrKFoCy74HzvWitgezjUFons'
const webAppUrl = 'https://ang-tg.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку ниже, чтобі запустить приложение',
        Markup.keyboard([
            Markup.button.webApp(
                'Отправить сообщение',
                `${webAppUrl}/feedback`
            )
        ])
    )
} )

bot.on(message('web_app_data'), async ctx => {
    const data = ctx.webAppData.data.json()
    ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message')
})



bot.launch()