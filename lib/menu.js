const chalk = require('chalk');
const fs = require('fs');

global.allMenu = (prefix) => {
return`
*GROUP MENU*
.pushcontact
.savecontact
.sendcontact
.getcontact
.contacttag
.antibadword
.nsfw
.antiaudio
.antiforeign
.antisticker
.antiimage
.antivideo
.antiviewonce
.antispam
.antimedia
.antidocument
.anticontact
.antilocation
.antilocation
.antilink
.antilinkgc
.groupinfo
.mute
.welcome
.left
.adminevent
.groupevent
.kick
.add
.promote
.demote
.setnamegc
.setppgc
.deleteppgc
.setdesk
.hidetag
.tagall
.listonline
.group
.editinfo
.linkgc
.resetlink
.afk
.addlist
.dellist
.ceklist


*SEARCH MENU*
.anime
kusonimeinfo
kusonimesearch
otakudesu
jkt48news
mangainfo
mangadetail
.imdb
.bukalapak
.playstore
.umma
.happymod
.ytsearch
.tiktoksearch
.pinterest
.wallpaper
.wikipedia
.wikimedia
.ringtone
.traceanime
.weather
.presetam
.soundcloud
.lyrics


*DOWNLOAD MENU*
.play
.ytaudio
.ytvideo
.tiktokmp4
.tiktokmp3
.tiktokslide
.instagram
.facebook
.fdown
.gitclone
.gdrive
.savepin
.mediafire


*CONVERTER/TOOLS*
.brat
.ssweb
.qc
.s
.swm
.tourl
.toimage
.remini
.upscale
.fetc
.toaudio
 お ─· .blown
.deep
.earrape
.fast
.fat
.nightcore
.reverse
.robot
.slow
.smooth
.squirrel


*STORE MENU*
.updatelist
.jpm
.jpm2
.addlist
.dellist
.store
.list
.bagi
.kali
.kurang
.tambah


*PANEL MENU*
.addsrv
.addusr
.listsrv
.listusr
.addusradmin
.restartsrv
.stopsrv
.startsrv
.delusr
.delsrv
.1gb - 10gb
.unli


*GAME MENU*
.tebakkabupaten
.tebakjkt48
.tebakhewan
.tebakml
.tebakchara
.tebaklogo
.tebakaplikasi
.tebakff
.tebakhero
.tebakgame
.tebakgambar
.tebakbendera
.lengkapikalimat
.asahotak
.tebakkata
.tebaktebakan
.tebaklirik
.tebakkimia
.tebaksiapa
.tebakkalimat


*FUN MENU*
.checkme
.mitos
.faktaunik
.faktakucing
.joke
.suit
.cekganteng
.cekcantik
.cekimut
.cekjomok
.cekwaifu
.cekkpribadian
.cekmasadepan
.quotesgalau
.truth
.dare
.apakah
.bisakah
.kapankah
.dimana
.bagaimana
.rate
.soulmate
.couple


*RANDOM ANIME MENU*
.akira
.akiyama
.ana
.art
.asuna
.ayuzawa
.boruto
.bts
.chiho
.chitoge
.cosplay
.cosplayloli
.cosplaysagiri
.cyber
.deidara
.doraemon
.elaina
.emilia
.erza
.exo
.gamewallpaper
.gremory
.hacker
.hestia
.husbu
.inori
.islamic
.isuzu
.itachi
.itori
.jennie
.jiso
.justina
.kaga
.kagura
.kakasih
.kaori
.cartoon
.shortquote
.keneki
.kotori
.kurumi
.lisa
.loli2
.madara
.megumin
.mikasa
.mikey
.miku
.minato
.mountain
.naruto
.nekonime
.nezuko
.onepiece
.pentol
.pokemon
.programming
.randomnime
.randomnime2
.rize
.rose
.sagiri
.sakura
.sasuke
.satanic
.shina
.shinka
.shinomiya
.shizuka
.shota
.space
.technology
.tejina
.toukachan
.tsunade
.waifu2
.yotsuba
.yuki
.yulibocil
.yumeko


*BUG MENU*
.xandroid
.xandroid2
.xios
.xios2
.xgc
.systemuicrash
.xsysui


*RPG MENU*
.daily
.crafting
.heal
.joinrpg
.kerja
.merampok
.memancing
.repair
.adventure
.mining
.jual
.beli
.berburu
.nebang
.berlayar
.inventory
.redeemdel
.redeemset
.redeem


PRIVACY MENU ໒  ֵ  ׄ
.setcallprivacy
.setlastprivacy
.setonlineprivacy
.setprofileprivacy
.setstatusprivacy
.setreadreceiptsprivacy
.setreactionmode


NEWSLETTER MENU ໒  ֵ  ׄ
.setnewsletterdesc
.setnewslettername
.setnewsletterpic
.follownewsletter
.unfollownewsletter
.mutenewsletter
.unmutenewsletter
.createnewsletter
.newsletterinfo


*AI MENU*
.deepseek
.dreamshaper
.flux
.felo
.gandalf
.gemini
.gemma
.gpt3
.gita
.naw
.muslimai
.mistral7b
.metaai
.blackboxai
.claudeai
.jokoai
.aishepherd
.bardai
.bibleai
.blackboxai-pro
.claude-sonnet
.dbrx-instruct
.deepseek-llm
.dreamshaper
.flux
.felo
.gandalf
.gemini-pro
.gpt3
.gita
.naw


*OTHERS MENU*
.daftar
.unreg
.ping
.ipwhois
.speedtest
.otakudesu
.gempa
.quotesanime
.githubstalk
.npmstalk
.mlstalk
.runtime
.donate
.script
.repository
.infobot
.owner
.jadibot
.stopjadibot
.listjadibot
`}

global.ownerMenu = (prefix) => {
return`
*OWNER MENU*
.backup
.addbadword
.delbadword
.listbadword
.resetdbuser
.resethit
.setmenu
.setreply
.statustext
.statusvideo
.statusimage
.statusaudio
.upsaluran
.setimgmenu
.setvidmenu
.addtitle
.deltitle
.addlimit
.dellimit
.resetlimit
.resetdblimit
.adduang
.deluang
.resetuang
.resetdbmoney
.addpremium
.delpremium
.listpremium
.addowner
.delowner
.clearsession
.clearmedia
.joingroup
.outgroup
.joinchannel
.outchannel
.getsession
.myip
.shutdown
.restart
.kill
.autoread
.unavailable
.autorecordtype
.autorecord
.autotype
.autobio
.autosticker
.safesearch
.autodownload
.autoblock
.onlygc
.onlypc
.self
.public
.setexif
.setprefix.setautoblock
.setantiforeign
.pushcontact
.savecontact
.sendcontact
.getcontact
.contacttag
.ban
.unban
.getcase
.setppbot
.deleteppbot
.setbiobot
.listpc
.listgc
.creategc
.autoswview
.anticall
.addvideo
.delvideo
.listvideo
.addimage
.delimage
.listimage
.addsticker
.delsticker
.liststicker
.addaudio
.delaudio
.listaudio
.addlist
.dellist
.ceklist
rizal
`}

global.groupMenu = (prefix) => {
return`
*GROUP MENU*
.pushcontact
.savecontact
.sendcontact
.getcontact
.contacttag
.antibadword
.nsfw
.antiaudio
.antiforeign
.antisticker
.antiimage
.antivideo
.antiviewonce
.antispam
.antimedia
.antidocument
.anticontact
.antilocation
.antilocation
.antilink
.antilinkgc
.groupinfo
.mute
.welcome
.left
.adminevent
.groupevent
.kick
.add
.promote
.demote
.setnamegc
.setppgc
.deleteppgc
.setdesk
.hidetag
.tagall
.listonline
.group
.editinfo
.linkgc
.resetlink
.afk
.addlist
.dellist
.ceklist

`}

global.searchMenu = (prefix) => {
return`
*SEARCH MENU*
.anime
kusonimeinfo
kusonimesearch
otakudesu
jkt48news
mangainfo
mangadetail
.imdb
.bukalapak
.playstore
.umma
.happymod
.ytsearch
.tiktoksearch
.pinterest
.wallpaper
.wikipedia
.wikimedia
.ringtone
.traceanime
.weather
.presetam
.soundcloud
.lyrics

`}

global.downloadMenu = (prefix) => {
return`
*DOWNLOAD MENU*
.play
.ytaudio
.ytvideo
.tiktokmp4
.tiktokmp3
.tiktokslide
.instagram
.facebook
.fdown
.gitclone
.gdrive
.savepin
.mediafire

`}

global.convertMenu = (prefix) => {
return`
*CONVERTER/TOOLS*
.brat
.ssweb
.qc
.s
.swm
.tourl
.toimage
.remini
.fetch
.toaudio
.bass
.blown
.deep
.earrape
.fast
.fat
.nightcore
.reverse
.robot
.slow
.smooth
.squirrel

`}

global.storeMenu = (prefix) => {
return`
*STORE MENU*
.updatelist
.jpm
.jpm2
.addlist
.dellist
.store
.list
.bagi
.kali
.kurang
.tambah

`}

global.panelMenu = (prefix) => {
return`
*PANEL MENU*
.addsrv
.addusr
.listsrv
.listusr
.addusradmin
.restartsrv
.stopsrv
.startsrv
.delusr
.delsrv
.1gb - 10gb
.unli

`}

global.gameMenu = (prefix) => {
return`
*GAME MENU*
.tebakkabupaten
.tebakjkt48
.tebakhewan
.tebakml
.tebakchara
.tebaklogo
.tebakaplikasi
.tebakff
.tebakhero
.tebakgame
.tebakgambar
.tebakbendera
.lengkapikalimat
.asahotak
.tebakkata
.tebaktebakan
.tebaklirik
.tebakkimia
.tebaksiapa
.tebakkalimat

`}

global.funMenu = (prefix) => {
return`
*FUN MENU*
.checkme
.mitos
.faktaunik
.faktakucing
.joke
.suit
.cekganteng
.cekcantik
.cekimut
.cekjomok
.cekwaifu
.cekkpribadian
.cekmasadepan
.quotesgalau
.truth
.dare
.apakah
.bisakah
.kapankah
.dimana
.bagaimana
.rate
.soulmate
.couple

`}

global.randomAnimeMenu = (prefix) => {
return`
*RANDOM ANIME MENU*
.akira
.akiyama
.ana
.art
.asuna
.ayuzawa
.boruto
.bts
.chiho
.chitoge
.cosplay
.cosplayloli
.cosplaysagiri
.cyber
.deidara
.doraemon
.elaina
.emilia
.erza
.exo
.gamewallpaper
.gremory
.hacker
.hestia
.husbu
.inori
.islamic
.isuzu
.itachi
.itori
.jennie
.jiso
.justina
.kaga
.kagura
.kakasih
.kaori
.cartoon
.shortquote
.keneki
.kotori
.kurumi
.lisa
.loli2
.madara
.megumin
.mikasa
.mikey
.miku
.minato
.mountain
.naruto
.nekonime
.nezuko
.onepiece
.pentol
.pokemon
.programming
.randomnime
.randomnime2
.rize
.rose
.sagiri
.sakura
.sasuke
.satanic
.shina
.shinka
.shinomiya
.shizuka
.shota
.space
.technology
.tejina
.toukachan
.tsunade
.waifu2
.yotsuba
.yuki
.yulibocil
.yumeko

`}

global.bugMenu = (prefix) => {
return`
*BUG MENU*
.xandroid
.xandroid2
.xios
.xios2
.xgc
.systemuicrash
.xsysui

`}

global.rpgMenu = (prefix) => {
return`
*RPG MENU*
.daily
.crafting
.heal
.joinrpg
.kerja
.merampok
.memancing
.repair
.adventure
.mining
.jual
.beli
.berburu
.nebang
.berlayar
.inventory
.redeemdel
.redeemset
.redeem

`}

global.privacyMenu = (prefix) => {
return`
*PRIVACY MENU*
.setcallprivacy
.setlastprivacy
.setonlineprivacy
.setprofileprivacy
.setstatusprivacy
.setreadreceiptsprivacy
.setreactionmode

`}

global.newsletterMenu = (prefix) => {
return`
*NEWSLETTER MENU*
.setnewsletterdesc
.setnewslettername
.setnewsletterpic
.follownewsletter
.unfollownewsletter
.mutenewsletter
.unmutenewsletter
.createnewsletter
.newsletterinfo

`}

global.aiMenu = (prefix) => {
return`
*AI MENU*
.deepseek
.dreamshaper
.flux
.felo
.gandalf
.gemini
.gemma
.gpt3
.gita
.naw
.muslimai
.mistral7b
.metaai
.blackboxai
.claudeai
.jokoai
.aishepherd
.bardai
.bibleai
.blackboxai-pro
.claude-sonnet
.dbrx-instruct
.deepseek-llm
.dreamshaper
.flux
.felo
.gandalf
.gemini-pro
.gpt3
.gita
.naw

`}

global.otherMenu = (prefix) => {
return`
*OTHERS MENU*
.daftar
.unreg
.ping
.ipwhois
.speedtest
.otakudesu
.kusonimeinfo
.kusonimesearch
.quotesanime
.gempa
.githubstalk
.npmstalk
.mlstalk
.runtime
.donate
.script
.repository
.infobot
.owner
.jadibot
.stopjadibot
.listjadibot

`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})