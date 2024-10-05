//

let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) return m.reply(`🐯 Tag a user.`)
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `🐯 @${who.split`@`[0]} You have been successfully banned, you will no longer be able to use my commands.`, m, { mentions: [who] })
}
handler.help = ['ban *@user*']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

export default handler
