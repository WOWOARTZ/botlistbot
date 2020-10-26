const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
	let botisim = args[1]
  let sahip = args[0]
  let sebebp = args[2]
	let log = "LOG KANALI ID" // bot eklendi / onaylandı / reddedildi kanalı
	
	if (!botisim) return message.channel.send(`Botu Onaylamak İçin Botun Id'sini Yazınız`).then(msg => msg.delete(10000))
  message.delete()
		client.channels.get(log).send(`:x: <@${sahip}> adlı kişinin <@${botisim}> adlı botu atıldı.Sebep: **<@${sebebp}>**. Atan yetkili : ${message.author}`);
		message.channel.send(`:white_check_mark: Botu onayladınız.`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-onayla', 'onayla'],
  permLevel: 3
};

exports.help = {
  name: 'botat', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};6