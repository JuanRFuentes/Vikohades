import fs from 'fs'
import fetch from 'node-fetch'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (!text) throw `*[β] πΈπ½πΆππ΄ππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄π» πΏπ°πππ΄ππ΄ πππ΄ π³π΄ππ΄π΄ π±πππ²π°π*`
try {
const res2 = await googleImage(text)
let sfoto = res2.getRandom()
let json = await fetch(`https://api.lolhuman.xyz/api/stickerwa?apikey=85faf717d0545d14074659ad&query=${text}`)
let jsons = await json.json()
let { stickers } = jsons.result[0]
let res = jsons.result.map((v, index) => `β β’ Resultado: ${1 + index}\n*β΄οΈ β’ Nombre:* ${v.title}\n*π β’ Autor:* ${v.author}\n*π β’ Url:* ${v.url}`).join`\n\nβββ\n\n`
await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m)
} catch {
await m.reply('*[β] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄ππ½ππ°ππ»πΎ*')}}
handler.command = ['stickersearch2', 'searchsticker2', 'stickerssearch2', 'searchstickers2']
handler.limit = 4
export default handler
