import { googleImage, pinterest } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].nsfw) return conn.reply(m.chat, `🐯 The group does not support *Nsfw* content.\n\n> To activate it an *Administrator* must use the command */nsfw on*`, m, rcanal)
await m.react('🕓')
try {
let res = await (await googleImage('Imagen ' + 'hentai')).getRandom()
await conn.sendFile(m.chat, json.url, 'thumbnail.jpg', `*» Hentai*`, m, null, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = ['hentai']
handler.group = true 
handler.register = true
//handler.limit = 10
export default handler
