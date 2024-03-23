let handler = async (m, { conn, usedPrefix, isOwner }) => {
    let user = global.db.data.users[m.sender]
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
/*var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*-Solo asuntos importantes-*`
let buttonMessage= {
'document': { url: `XD` },
'mimetype': `application/${document}`,
'fileName': `Goku-Black-Bot-MD`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': '': 2,
'previewType': 'pdf',
'title': botname,
'body': `🐺`,
'thumbnail': global.imgmenu,
'sourceUrl': 'https://wa.me/595992809980' }},
'mentions': [m.sender],
'caption': texto1,
'footer': `\n${global.saludo}`,
'buttons':[
{buttonId: `${usedPrefix}owner`, buttonText: {displayText: 'Owner🐢'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })*/
await conn.reply(m.chat, `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*- Solo asuntos importantes -*`, estilo, { mentions: [m.sender] })
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;ī.am/Ivan🍃/ღᴀ;;;\nFN:ī.am/Ivan🍃/ღᴀ\nORG:ī.am/Ivan🍃/ღᴀ\nTITLE:\nitem1.TEL;waid=595992809980:+595992809980\nitem1.X-ABLabel:ī.am/Ivan🍃/ღᴀ\nX-WA-BIZ-DESCRIPTION:🐺Creador oficial de Goku-Black-Bot-MD.\nX-WA-BIZ-NAME:ī.am/Iván 🍃/ღᴀ\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'ī.am/Ivan🍃/ღᴀ', contacts: [{ vcard }] }}, {quoted: m})
}
handler.tags =['info']
handler.help = ['script']
handler.customPrefix = /^(@595992809980)$/i
handler.command = new RegExp
export default handler
