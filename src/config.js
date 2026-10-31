/**
   * Laurentia-MD.V2 — maintained by Vall.
   * Follow https://github.com/Vall-Afk
*/

const fs = require('fs')
const chalk = require('chalk')

// Other
global.prefa = ['','!','.','🐦','🐤','🗿','/']
global.sp = '⭔'
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'

global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.mess = {
    success: '*SUKSES TOD!*',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '*LOADING...*',
    nsfw: '*[❗] NSFW TIDAK AKTIF!!*',
    wrongFormat: 'Format yg anda masukan salah',
    banned: '*[❗] LU UDAH DI BANNED TODD.*',
    error: 'Maaf terjadi kesalahan',
    linkna: 'Mana linknya Tod?',
}
global.thumb = fs.readFileSync('./karuta/karuta.png')
global.vidmenu = fs.readFileSync("./karuta/Karuta.mp4")
global.limitawal = {
premium: "Infinity",
free: 20
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
