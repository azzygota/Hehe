import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  
 const ini = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `ð Developer Bot `, `ð« Don't call me ð¥º`, `â¨azzygota24@gmail.com`, `ð®ð© Indonesia`, `ð https://chat.whatsapp.com/Jvhe5lK67Kj0wWmWcgZZ4L`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `ð¥ Bot WhatsApp ð£`, `ðµ Don't spam/call me ð¢`, `Nothing`, `ð®ð© Indonesia`, `ð https://chat.whatsapp.com/Jvhe5lK67Kj0wWmWcgZZ4L`, `ð¤ Dont Forget To Donate!`]
  ], fkontak)
  await conn.send2ButtonDoc(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor owner ku, jangan call/spam yah kakð`, wm, 'Menu', '.menu', 'Donasi', '.donasi', ini, { contextInfo: { forwardingScore: fsizedoc, externalAdReply: { body: 'Tes', containsAutoReply: true, mediaType: 1, mediaUrl: hwaifu.getRandom(),  renderLargerThumbnail: true, showAdAttribution: true, sourceId: 'Tes', sourceType: 'PDF', previewType: 'PDF', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg'), thumbnailUrl: sgc, title: wm}}})
  }
handler.tags = ['info']

handler.command = /^(zyko)$/i

export default handler
