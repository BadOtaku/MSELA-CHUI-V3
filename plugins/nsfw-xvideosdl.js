import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!global.db.data.chats[m.chat].nsfw) return conn.reply(m.chat, `🐯 The group does not support *Nsfw* content.\n\n> To activate it an *Administrator* must use the command */nsfw on*`, m, rcanal)
if (!args[0]) return conn.reply(m.chat, `🐯 Enter the link of the Xvideos video*`, m, rcanal)

let user = global.db.data.users[m.sender]
await m.react('🕓')
try {
let { title, dl_url } = await Starlights.xvideosdl(args[0])
await conn.sendFile(m.chat, dl_url, title + '.mp4', `*» Title* : ${title}`, m, false, { asDocument: user.useDocument })
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['xvideosdl *<url>*']
handler.tags = ['downloader', 'nsfw']
handler.command = ['xvideosdl']
//handler.limit = 200
handler.register = true 
handler.group = true 
export default handler
