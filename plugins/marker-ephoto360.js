let handler = async (m, { conn, args, command }) => { 
let response = args.join(' ').split('|')
if (!args[0]) throw '*[β] πΈπ½πΆππ΄ππ΄ ππ½ ππ΄πππΎ*'
try {    
if (command == 'logocorazon') {
conn.reply(m.chat, '*[β] π΄π»π°π±πΎππ°π½π³πΎ ππ π³πΈππ΄π½ΜπΎ, π΄ππΏπ΄ππ΄ ππ½ πΌπΎπΌπ΄π½ππΎ...*', m)
let res = `https://violetics.pw/api/ephoto360/heart-flashlight?apikey=beta&text=${response[0]}`
conn.sendFile(m.chat, res, 'error.jpg', null, m)}
if (command == 'logochristmas') {
conn.reply(m.chat, '*[β] π΄π»π°π±πΎππ°π½π³πΎ ππ π³πΈππ΄π½ΜπΎ, π΄ππΏπ΄ππ΄ ππ½ πΌπΎπΌπ΄π½ππΎ...*', m)
let res = `https://violetics.pw/api/ephoto360/christmas-snow?apikey=beta&text=${response[0]}`
conn.sendFile(m.chat, res, 'error.jpg', null, m)}
} catch {
conn.reply(m.chat, '*[βππππβ] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*', m)    
}}
handler.command = /^logocorazon|logochristmas/i
handler.limit = 1
export default handler
