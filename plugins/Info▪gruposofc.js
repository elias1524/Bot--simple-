let handler = async (m, { conn }) => {
let msg = `
*👋Hola @${m.sender.split`@`[0]} aquí tienes los grupos oficiales de NyanCatBot-MD.*

   *_╭━━━⊜ ⌊• 1 •⌉_*
  *_┃🎋❏https://chat.whatsapp.com/GkajTNHTklT7RJ1bzsJYNK_*
*_╰━━━━━━━━━━━━━━━━⊜_*
 `
conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['gruposofc']
handler.tags = ['info']
export default handler