export async function before(m, { conn, isAdmin, isBotAdmin }) {
    if (!m.isGroup) return;
    let chat = global.db.data.chats[m.chat]
    let delet = m.key.participant
    let bang = m.key.id
    let bot = global.db.data.settings[this.user.jid] || {}
    if (m.fromMe) return true;

    if (m.id.startsWith('3EB0') && m.id.length === 22) {
        let chat = global.db.data.chats[m.chat];

        if (chat.antiBot) {
       //     await conn.reply(m.chat, "     ͞ ͟͞ ͟𝝣𝞆𝝦𝝞𝞂𝘀𝗶𝝾𝝶!!💥͟ ͟͞ ͞   \n╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝\n\n𝑆𝑜𝑦 Mselachui-𝑩𝒐𝒕-𝑴𝑫 𝑊𝑒 𝑎𝑟𝑒 𝑝𝑟𝑜𝑡ℎ𝑒𝑟 𝑏𝑜𝑡ℎ𝑒𝑟 𝑏𝑟𝑜𝑡ℎ𝑒𝑟 𝑖𝑛 𝑝𝑟 ... 𝑠𝑒𝑔𝑢𝑛𝑑𝑎.", null, rcanal);
            if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
    }
}
