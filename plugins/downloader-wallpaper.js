import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[βππππβ] π΄πΉπ΄πΌπΏπ»πΎ π³π΄ πππΎ π³π΄π» π²πΎπΌπ°π½π³πΎ ${usedPrefix + command} Minecraft*`
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
conn.sendFile(m.chat, img, 'error.jpg', `*ππ΄πππ»ππ°π³πΎ π³π΄ ${text}*`, m)
}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(wallpaper2?)$/i
handler.limit = 4
export default handler
