let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[β] πΌπ΄π½ππ°πΉπ΄ π³π΄ π±πΈπ½ππ΄π½πΈπ³π° π²πΎπ½π΅πΈπΆπππ°π³πΎ π²πΎπππ΄π²ππ°πΌπ΄π½ππ΄ πΏπ°ππ° π΄πππ΄ πΆπππΏπΎ*')
} else throw `*[β] πΈπ½πΆππ΄ππ΄ π΄π» πΌπ΄π½ππ°πΉπ΄ π³π΄ π±πΈπ΄π½ππ΄π½πΈπ³π° πππ΄ π³π΄ππ΄π΄ π°πΆππ΄πΆπ°π, πππ΄:*\n*- @user (menciΓ³n)*\n*- @group (nombre de grupo)*\n*- @desc (description de grupo)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
handler.limit = 2
export default handler
