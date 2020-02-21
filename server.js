const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://Name-Project.glitch.me/`);
}, 280000);

//////////////////
const Canvas = require('canvas')
const Discord = require("discord.js"); //III
const client = new Discord.Client(); //III
const moment = require("moment");
const zalgo = require("zalgolize"); //III
const math = require("math-expression-evaluator"); //III
const figlet = require("figlet"); //III
const fs = require("fs"); //III
const ms = require("ms"); //III
const prefix = "-";
//ibrahem_gamer

client.on("message", message => {
  if (message.content === "-help") {
    const embed = new Discord.RichEmbed().setColor("f00000").setDescription(`
<a:603846328229036034:677143670150922240>Help Commands<a:603846328229036034:677143670150922240>
<a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510>
		 
<a:667019731009798164:677140786848202773>\`${prefix}help general\`
**لعرض الأوامر العامة**

<a:667019731009798164:677140786848202773>\`${prefix}help admin\`
**لعرض الأوامر الخاصة بالأدمنية**	 

<a:667019731009798164:677140786848202773>\`${prefix}help protection\`
**لعرض اوامر الحماية من الهاكرز**

<a:667019731009798164:677140786848202773>\`${prefix}help music\`
**لعرض أوامر الموسيقي**

<a:667019731009798164:677140786848202773>\`${prefix}help giveaway\`
**لعرض الأوامر الخاصة بالجيف اواي**

<a:667019731009798164:677140786848202773>\`${prefix}help ticket\`
**لعرض الأوامر الخاصة بالتيكيت**


<a:667019731009798164:677140786848202773>\`I Hope You Enjoy In ♧ Ꮢrocket 🚀 Server\`
**${client.users.size} Users Using Me!! **

	 `);
message.channel.sendEmbed(embed);
          
  }

});

   client.on("message", message => {
 if (message.content === "-help general") {
  const embed = new Discord.RichEmbed() 
      .setColor("f00000")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
<a:669207883447009301:677155538420891668>**General Commands**<a:669207883447009301:677155538420891668>
<a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510>
		 
<a:667019731009798164:677140786848202773>\`${prefix}avatar\`
**لعرض صورتك او صورة شخص اخر بالمنشن**

<a:667019731009798164:677140786848202773>\`${prefix}top\`
**لعرض التوب كتابي وصوتي**	 

<a:667019731009798164:677140786848202773>\`${prefix}toptext\`
**لعرض التوب كتابي**

<a:667019731009798164:677140786848202773>\`${prefix}topvoice\`
**لعرض التوب صوتي**

<a:667019731009798164:677140786848202773>\`${prefix}user\`
**لعرض معلومات حسابك**

<a:667019731009798164:677140786848202773>\`${prefix}invites\`
**لمعرفة عدد دعواتك داخل السيرفر**

<a:667019731009798164:677140786848202773>\`${prefix}report\`  
**للابلاغ عن اي شخص بالسيرفر**

<a:667019731009798164:677140786848202773>\`${prefix}contact\`
**لارسال رسالة لصاحب البوت للمشاكل والاستفسارات**

<a:667019731009798164:677140786848202773>\`${prefix}logz\`
**لعبة لغز**

<a:667019731009798164:677140786848202773>\`${prefix}fkk\`
**لعبة فكك**

<a:667019731009798164:677140786848202773>\`${prefix}fast\`
**لعبة سرعة او اسرع**

<a:667019731009798164:677140786848202773>\`${prefix}sug\`
**للاقتراح**

<a:667019731009798164:677140786848202773>\`${prefix}c c -credits\`
**لعرض رصيدك او الكريديت الخاصة بك**

<a:667019731009798164:677140786848202773>\`${prefix}d d -daily\`
**لاستلام الكريديت اليومية**



<a:667019731009798164:677140786848202773>\`I Hope You Enjoy In ♧ Ꮢrocket 🚀 Server\`
**${client.users.size} Users Using Me!! **
`)


message.author.sendEmbed(embed)

}
});
   client.on("message",msg => {
if (msg.content === prefix + 'help general') {
msg.channel.send('**Done, Check Your DM |** <a:664898330781810688:677221209804374030> ')
}
});
   client.on("message", message => {
 if (message.content === "-help admin") {
  const embed = new Discord.RichEmbed() 
      .setColor("f00000")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
<a:669207883447009301:677155538420891668>**Admins Commands**<a:669207883447009301:677155538420891668>
<a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510>
		 
<a:667019731009798164:677140786848202773>\`${prefix}kick\`
**لطرد العضو من السيرفر**

<a:667019731009798164:677140786848202773>\`${prefix}ban\`
**لتبنيد العضو من السيرفر**	 

<a:667019731009798164:677140786848202773>\`${prefix}unban <id>\`
**لفك البان عن العضو بالايدي**

<a:667019731009798164:677140786848202773>\`${prefix}unban all\`
**لفك البان عن جميع الاعضاء بالسيرفر**

<a:667019731009798164:677140786848202773>\`${prefix}bans\`
**لعرض عدد الاشخاص المبندين من السيرفر**

<a:667019731009798164:677140786848202773>\`${prefix}mute <time> <reason>\`
**لاعطاء ميوت لشخص بالوقت والسبب**

<a:667019731009798164:677140786848202773>\`${prefix}unmute\`  
**لفك الميوت عن الشخص**

<a:667019731009798164:677140786848202773>\`${prefix}role @mention\`
**لاعطاء شخص رتبة**

<a:667019731009798164:677140786848202773>\`${prefix}roles\`
**لعرض جميع رتب السيرفر**

<a:667019731009798164:677140786848202773>\`${prefix}rmrole <rolename>\`
**لازالة رتبة من شخص**

<a:667019731009798164:677140786848202773>\`${prefix}move\`
**لسحب الشخص الي رومك الصوتي**

<a:667019731009798164:677140786848202773>\`${prefix}say\`
**تتكلم عن طريق البوت**

<a:667019731009798164:677140786848202773>\`${prefix}clear\`
**لمسح الشات بعدد معين**



<a:667019731009798164:677140786848202773>\`I Hope You Enjoy In ♧ Ꮢrocket 🚀 Server\`
**${client.users.size} Users Using Me!!**
`)


message.author.sendEmbed(embed)

}
});
   client.on("message",msg => {
if (msg.content === prefix + 'help admin') {
msg.channel.send('**Done, Check Your DM |** <a:664898330781810688:677221209804374030> ')
}
});
client.on("message", message => {
 if (message.content === "-help protection") {
  const embed = new Discord.RichEmbed() 
      .setColor("f00000")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
<a:669207883447009301:677155538420891668>**Protection Commands**<a:669207883447009301:677155538420891668>
<a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510>
		 
<a:667019731009798164:677140786848202773>\`${prefix}set limitsban <number>\`
**تحديد الحد الاقصي للبان لو زاد عن العدد تنسحب رتبة تلقائي**

<a:667019731009798164:677140786848202773>\`${prefix}set limitskick <number>\`
**تحديد الحد الاقصي للكيك لو زاد عن العدد تنسحب رتبة تلقائي**	 

<a:667019731009798164:677140786848202773>\`${prefix}set limitsroleD <number>\`
**تحديد الحد الاقصي لمسح الرولات او الرتب لو زاد عن العدد تنسحب رتبة تلقائي**

<a:667019731009798164:677140786848202773>\`${prefix}set limitsroleC <number>\`
**تحديد الحد الاقصي لصنع الرومات لو زاد عن العدد تنسحب رتبة تلقائي**

<a:667019731009798164:677140786848202773>\`${prefix}set limitschannelD <number>\`
**تحديد الحد الاقصي لمسح الرومات لو زاد عن العدد تنسحب رتبة تلقائي**

<a:667019731009798164:677140786848202773>\`${prefix}antibots on\`
**منع دخول البوتات**

<a:667019731009798164:677140786848202773>\`${prefix}antibots off\`  
**فتح دخول البوتات**

<a:667019731009798164:677140786848202773>\`${prefix}antilink on\`
**منع نشر الروابط او اللينكات**

<a:667019731009798164:677140786848202773>\`${prefix}antilink off\`
**فتح نشر الروابط او اللينكات**

<a:667019731009798164:677140786848202773>\`${prefix}setpics\`
**لتحديد روم الصور**



<a:667019731009798164:677140786848202773>\`I Hope You Enjoy In ♧ Ꮢrocket 🚀 Server\`
**${client.users.size} Users Using Me!! **
`)


message.author.sendEmbed(embed)

}
});

   client.on("message",msg => {
if (msg.content === prefix + 'help protection') {
msg.channel.send('**Done, Check Your DM |** <a:664898330781810688:677221209804374030> ')
}
});
   client.on("message", message => {
 if (message.content === "-help music") {
  const embed = new Discord.RichEmbed() 
      .setColor("f00000")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
<a:669207883447009301:677155538420891668>**Music  Commands**<a:669207883447009301:677155538420891668>
<a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510>
		 
<a:667019731009798164:677140786848202773>\`${prefix}play -p\`
**تشغيل الاغنية او اضافتها للقائمة او اكمال الاغنية**

<a:667019731009798164:677140786848202773>\`${prefix}pause\`
**ايقاف مؤقت الاغنية**	 

<a:667019731009798164:677140786848202773>\`${prefix}resume\`
**اكمال الاغنية**

<a:667019731009798164:677140786848202773>\`${prefix}stop\`
**لأيقاف الأغنية وخروج البوت من الروم**

<a:667019731009798164:677140786848202773>\`${prefix}forceskip\`
**لتخطي الأغنية بشكل مباشر**

<a:667019731009798164:677140786848202773>\`${prefix}queue\`
**عرض القائمة**

<a:667019731009798164:677140786848202773>\`${prefix}skipto\`  
**لتخطي الأغنية الى الأغنية القادمة في طابور الموسيقى القادمة**

<a:667019731009798164:677140786848202773>\`${prefix}skip\`
**تخطي للاغنية التالية**

<a:667019731009798164:677140786848202773>\`${prefix}volume -vol\`
**تغيير الصوت**

<a:667019731009798164:677140786848202773>\`${prefix}nowplaying -np\`
**عرض مايتم تشغيله الان**

<a:667019731009798164:677140786848202773>\`${prefix}repeat\`
**تكرار الاغنية**

<a:667019731009798164:677140786848202773>\`${prefix}leave\`
**لخروج من الروم الصوتي**



<a:667019731009798164:677140786848202773>\`I Hope You Enjoy In ♧ Ꮢrocket 🚀 Server\`
**${client.users.size} Users Using Me!! **
`)


message.author.sendEmbed(embed)

}
});
   client.on("message",msg => {
if (msg.content === prefix + 'help music') {
msg.channel.send('**Done, Check Your DM |** <a:664898330781810688:677221209804374030> ')
}
});
client.on("message", message => {
 if (message.content === "-help giveaway") {
  const embed = new Discord.RichEmbed() 
      .setColor("f00000")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
<a:669207883447009301:677155538420891668>**Giveaway  Commands**<a:669207883447009301:677155538420891668>
<a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510>
		 
<a:667019731009798164:677140786848202773>\`${prefix}start 1m/1h/1d 1/2/3.. Prize\`
**امر انشاء الجيف اواي**

<a:667019731009798164:677140786848202773>\`${prefix}groll <message id>\`
**لاعادة اختيار الفائز**	 

<a:667019731009798164:677140786848202773>\`${prefix}gend <message id>\`
**لانهاء الجيف اواي**


<a:667019731009798164:677140786848202773>\`I Hope You Enjoy In ♧ Ꮢrocket 🚀 Server\`
**${client.users.size} Users Using Me!! **
`)


message.author.sendEmbed(embed)

}
});
   client.on("message",msg => {
if (msg.content === prefix + 'help giveaway') {
msg.channel.send('**Done, Check Your DM |** <a:664898330781810688:677221209804374030> ')
}
});
client.on("message", message => {
 if (message.content === "-help ticket") {
  const embed = new Discord.RichEmbed() 
      .setColor("f00000")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
<a:669207883447009301:677155538420891668>**Ticket  Commands**<a:669207883447009301:677155538420891668>
<a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510><a:549282797173342222:677143707060797510>
		 
<a:667019731009798164:677140786848202773>\`${prefix}new\`
**لعمل تيكيت**

<a:667019731009798164:677140786848202773>\`${prefix}close\`
**لاغلاق التيكيت**	 

<a:667019731009798164:677140786848202773>\`${prefix}confirm\`
**لتاكيد اغلاق التيكيت وحذف الروم نهائيا**

<a:667019731009798164:677140786848202773>\`${prefix}rename\`
**لاعادة تسمية التيكيت**


<a:667019731009798164:677140786848202773>\`I Hope You Enjoy In ♧ Ꮢrocket 🚀 Server\`
**${client.users.size} Users Using Me!! **
`)


message.author.sendEmbed(embed)

}

});
   client.on("message",msg => {
if (msg.content === prefix + 'help ticket') {
msg.channel.send('**Done, Check Your DM |** <a:664898330781810688:677221209804374030> ')
}
   });
 
client.on("message",message => {
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "avatar")){
const mention = message.mentions.users.first()

if(!mention) return console.log("") 
let embed = new Discord.RichEmbed()
.setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL}`) 
.setTitle("Avatar Link")
.setURL(`${mention.avatarURL}`)
.setImage(`${mention.avatarURL}`)
.setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)    
    message.channel.send(embed)
}
})

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "avatar server")) {
    let doma = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(doma)
  } else if(message.content.startsWith(prefix + "avatar")) {
    let args = message.content.split(" ")[1]
var avt = args || message.author.id;    
    client.fetchUser(avt).then(user => {
     avt = user;
  let embed = new Discord.RichEmbed() 
  .setAuthor(`${avt.tag}`, avt.avatarURL)
  .setTitle("Avatar Link")
  .setURL(avt.avatarURL)
  .setImage(avt.avatarURL)
  .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
  message.channel.send(embed) 
    })
  }
})


client.on('message', message => {
if(message.content.startsWith(prefix +"server")){
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** ❎ `)
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`<@564808603706589194>`)
.addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("**🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')

message.channel.sendEmbed(embed)

}
});
client.on("message", (message) => {
  if (message.channel.type == "dm" && message.author.id != client.user.id) {
    let channel = client.channels.get("679082452530233361"); // ذي لو تبيه ب روم
    if (channel) { // channel خليها owner دا عشان يرسل للاونر لو تريد يرسل لروم خلي
var embed  = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setTitle(`Message sent by ${message.author.username}`)
        .setTimestamp(message.author.avatarURL)
        .setDescription(message.content)
        .setFooter(client.user.username, client.user.avatarURL)
        .setTimestamp();
      try {
       channel.send(embed); // channel لو تريد يرسلها للاونر خليها كدا لو تريد في روم خليها
      } catch (e) {
        console.log(e);
      }
    } else console.log("user not found.");
  }
});//${! .₳Ⱨ₥ɆĐ ♡}#0561


let log = JSON.parse(fs.readFileSync("./log.json", "utf8")); // اعمل ملف باسم log.json

client.on("message", message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setlog")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The Log Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "togglelog")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __On__ !**`),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __Off__ !**`),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` \n**Sent By:** <@${message.author.id}> \n\n**Message:**\n\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldMessage.content.startsWith("https://")) return;

  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully EDIT **MESSAGE** In ${oldMessage.channel}\n\n\n**Channel:** ${oldMessage.channel.name}\n\n\n**Sent By:** <@${oldMessage.author.id}> \n\n\n**Old Message:**\n\`\`\` ${oldMessage} \`\`\`\n **New Message:** \n \`\`\`${newMessage}\`\`\` `
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);

  logChannel.send(messageUpdate);
});
client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` \n**By:** <@${userID}>`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` \n**By:** <@${userID}>`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateColor);
    }
  });
});
client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\`\n**By:** <@${userID}>`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\`\n**By:** <@${userID}>`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} \n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newTopic);
    }
  });
});

client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[user.guild.id])
    log[guild.guild.id] = {
      onoff: "Off"
    };
  if (log[user.guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> \n**By:** <@${userID}>`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.guild.id])
    log[guild.guild.id] = {
      onoff: "Off"
    };
  if (log[guild.guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}>\n**By:** <@${userID}>`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(unBanInfo);
  });
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`His Orginal Name`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`His Orginal Name`";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember}\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}>\n**Role:** \`\`${role.name}\`\`\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}>\n**Role:** \`\`${role.name}\`\`\n**By:** <@${userID}>`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}>\n**New Owner:** <@${newMember.user.id}>`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

    logChannel.send(newOwner);
  }
});

client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[voiceOld.guild.id])
    log[voiceOld.guild.id] = {
      onoff: "Off"
    };
  if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
  var logChannel = voiceOld.guild.channels.find(
    c => c.name === `${log[(voiceOld, voiceNew.guild.id)].channel}`
  );
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**[VOICE MUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld}\n**By:** <@${userID}>\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\``
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverMutev);
    }
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**[VOICE UNMUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"
        )
        .setColor("BLUE")
        .setDescription(
          `**User:** ${voiceOld}\n**By:** <@${userID}>\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\``
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUnmutev);
    }
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE DEAF]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** ${voiceOld}\n**By:** <@${userID}>\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\``
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverDeafv);
    }
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      if (!log[voiceOld.guild.id])//////Create By The Leader#0187
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE UNDEAF]**")
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png"
        )//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
        .setColor("GREEN")//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
        .setDescription(
          `**User:** ${voiceOld}\n**By:** <@${userID}>\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\``
        )//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
        .setTimestamp()//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
        .setFooter(userTag, userAvatar);//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561

      logChannel.send(serverUndeafv);//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
    }
  });//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    if (!log[voiceOld.guild.id])//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
      log[voiceOld.guild.id] = {
        onoff: "Off"
      };
    if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
    let voiceLeave = new Discord.RichEmbed()//////Create By The Leader#0187
      .setTitle("**[CHANGED VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\`\n**To:** \`\`${voiceNew.voiceChannel.name}\`\`\n**User:** ${voiceOld}`
      )//////! .₳Ⱨ₥ɆĐ ♡#0561
      .setTimestamp()//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
//////Create By The ! .₳Ⱨ₥ɆĐ ♡#0561
    logChannel.send(voiceLeave);
  }
});


const adminprefix = "!";//بريفكس بوتك
const devs = ['620399766203006980','671369464947802122'] //الايدي بتاع اونر البوت
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}تـم تـغـيـر بـلانـيـق الـى **`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}تـم تـغـيـر اســم الـى**`)
return message.reply("**لايـمـكـن تـغـيـر اسـم الان نـتـظـار سـاعـتـان**⏱️ ");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}تــم تــغـيــر صــور الـى **`);
      } else    
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**${argresult}تــم تـغــيــر حــالـه الــى **`)
}
});


client.on('message', message => {
                      if (message.content.startsWith(prefix + 'fast')) {
                        if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
                      
                      const type = require('./2sr3.json');
                      const item = type[Math.floor(Math.random() * type.length)];
                      const filter = response => {
                          return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                      };
                      message.channel.send('** لديك 15 ثانيه لكتابه هذه الكلمه بسرعة**').then(msg => {
                      
                            
                      msg.channel.send(`${item.type}`).then(() => {
                              message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                              .then((collected) => {
                          message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من كتابه هذه الكلمه بسرعه**`);
                          console.log(`[Typing] ${collected.first().author} typed the word.`);
                                })
                                .catch(collected => {
                                  message.channel.send(`:x: **لم يتمكن احد من كتابه هذه الكلمه في الوقت المناسب**`);
                                })
                          })
                        })
                      }
                      });
client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get("679079835615756310");
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`VOICE ONLINE [ ${currentSize} ]`);
  if (currentSize !== size) channel.setName(`VOICE ONLINE [ ${currentSize} ]`);
});
client.on('message' , message => {
if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;

let args = message.content.split(" ").slice(1).join(" ");

client.users.get("671369464947802122").send(

    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")


let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : iii")
                                                
message.channel.send(embed);


}
    
});
client.on('message', message => {
  if (message.author.bot) return;

  let args = message.content.split(" ");
  
  let command = args[0];
  
  let messagecount = args[1];
  
    if(command == prefix + "clear") {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
		message.channel.send("يجب ان تمتلك خاصية `MANAGE_MESSAGES` ")
	} else if (!messagecount) {
		message.channel.send("**قم بإدراج عدد الرسائل المراد حذفها**")
	}else {
		message.channel.bulkDelete(messagecount);
        message.channel.send("**رسالة `" + messagecount + "` لقد تم حذف**").then(mes => 
		mes.delete(3000)
		);    
	 }
   }
  // iii
});
client.on('message', message => {
if (message.author.bot) return;
  let args = message.content.split(" ");
      // By Alpha Codes - AboKhalil 26/7/2019
  let command = args[0];
 
  let user = message.mentions.users.first();
   
  let reasonkick = message.content.split(" ").slice(2).join(" ");
 
  if (command == prefix + "kick") {
 
    if(!message.channel.guild){
    message.channel.send("**لا يمكن استعمال هذا الأمر في الخاص**");
}
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
        message.channel.send("**يجب ان يكون لديك خاصية `KICK_MEMBERS`**");
    }
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
        message.channel.send("**البوت لا يمتلك خاصية `KICK_MEMBERS`**");
    }
    if (!user) {
        message.channel.send("**يجب عليك إختيار الشخص المراد طرده**");
    }else if (!reasonkick) {
        message.channel.send("**يجب عليك إدراج سبب الحظر**");
    } else if (message.guild.member(user).hasPermission("KICK_MEMBERS")){
    message.channel.send("**لا يمكن طرد هذا الشخص , فهو من الإدارة**");
    } else {
 
 
    message.guild.member(user).kick()
    message.channel.send("**The Member Was Kicked **" + user.tag + " **By** : " + message.author.tag);
    message.channel.send("**Reason : __" + reasonkick + "__**");
   
    user.send("**You are Kicked By** : " + message.author.tag);
    user.send("**Reason : __" + reasonkick + "__**");
    }
 }
 // By Alpha Codes - AboKhalil 26/7/2019
});
client.on('message', message => {
if (message.author.bot) return;
  let args = message.content.split(" ");
 
  let command = args[0];
 
  let user = message.mentions.users.first();
 
  let bantime = args[2];
   
  let reasonban = message.content.split(" ").slice(3).join(" ");
   
  let timefilter;
 
  if (command == prefix + "ban") {
     
    if(!message.channel.guild){
    message.channel.send("**لا يمكن استعمال هذا الأمر في الخاص**");
}
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
        message.channel.send("**يجب ان يكون لديك خاصية `BAN_MEMBERS`**");
    }
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
        message.channel.send("**البوت لا يمتلك خاصية `BAN_MEMBERS`**");
    }
   
    if (!user){
        message.channel.send("**يجب عليك إختيار الشخص المراد حظره**");
    }else if (!bantime){
        message.channel.send(`**
        يجب عليك اختيار وقت الحظر
        15m حظر ربع ساعه
        30m حظر نصف ساعه
        1h حظر ساعه
        3h حظر ثلاث ساعات
        1d حظر يوم كامل
        3d حظر ثلاث ايام
        1w حظر اسبوع
        1mon حظر شهر كامل
        **`);
    }else if (!reasonban){
        message.channel.send("**يجب عليك إدراج سبب الحظر**");
    }
    if (message.guild.member(user).hasPermission("BAN_MEMBERS")){
    message.channel.send("**لا يمكن طرد هذا الشخص , فهو من الإدارة**");
    } else {
// By Alpha Codes - AboKhalil 26/7/2019
    if (bantime = "15m") {
    timefilter = 150000;
    } else if (bantime = "30m") {
        timefilter = 300000;
    } else if (bantime = "1h") {
        timefilter = 600000;
    } else if (bantime = "3h") {
        timefilter = 1800000;
    } else if (bantime = "1d") {
        timefilter = 14400000;
    } else if (bantime = "3d") {
        timefilter = 43200000;
    } else if (bantime = "1w") {
        timefilter = 100800000;
    } else if (bantime = "1mon"){
        timefilter = 432000000;
    }
    message.guild.member(user).ban()
    message.channel.send("**The Member Was Banned **" + user.tag + " **By** : " + message.author.tag);
    message.channel.send("**Reason : __" + reasonban + "__**");
   
    user.send("**You are Banned By** : " + message.author.tag);
    user.send("**Reason : __" + reasonban + "__**");
setTimeout(() => {
 
  message.guild.unban(bannedman);
 
        }, timefilter);
    }
 }
 // By Alpha Codes - AboKhalil 26/7/2019
});
client.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    var messages = message.content.split(" ").slice(1);

    let args = messages.slice(1); 

    if(message.content.startsWith(prefix+'report')){
        let msg = message;


        if(message.guild.member(message.author).roles.get(msg.guild.roles.find(role => role.name === `banned_report`))) return message.reply('**لقد تم حظرك لا يمكنك ابلاغ احد**').then(m => {m.delete(3000)}); //لو حد عنده هل رتبة ما رح يقدر يسوي ريبورت 

        var reports_channel = message.guild.channels.find('name', 'reports') // اسم الروم الي تجيه الريبورتات

        if(!reports_channel) return message.reply('**I cant find reports room.**').then(m => {m.delete(3000)});
        
        var mention = message.mentions.users.first();
        
        if(!mention) return message.reply('**Please, mention a member.**').then(m => {m.delete(3000)});

        if(mention.id == message.author.id) return message.reply('**You cant report yourself**').then(m => {m.delete(3000)});
        
        if(message.guild.member(mention).hasPermission("MANAGE_MESSAGES")) return message.reply('**You cant report this user.**').then(m => {m.delete(3000)}) //لو شخص عنده هل برمشن ماحد رح يقدر يسويله ريبورت
        
        if(mention.id == message.guild.owner.id) return message.reply('**You cant report the owner.**').then(m => {m.delete(3000)});


        var reason = args.join(" ");

        if(!reason) return message.reply('**Please, specify a reason.**').then(m => {m.delete(3000)});
        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`NEW REPORT`)
        .setThumbnail(message.author.avatarURL)
        .addField('**Reporter Name: **', `<@${message.author.id}> ID [ ${message.author.id} ]`, true)
        .addField('**ReportedUser Name: **', `${mention} ID [ ${mention.id} ]`, true)
        .addField('**Time** ', `[ ${moment(message.createdAt).format('D/MM/YYYY h:mm a')} ]`, true)
        .addField('**reason: **', `[ ${reason} ]`, true)
        .addField('**Channel: **', `${message.channel}`, true)
        reports_channel.send(embed)
        message.channel.send('**تم البلاغ, نشكرك على  مساعدتنا**').then(message => {message.delete(3000)});
    }
});


let spread = JSON.parse(fs.readFileSync('./spread.json' , 'utf8'));


client.on('message', message => {
    if(message.content.startsWith(prefix + "antilink off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
spread[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**⛔ The Antilink Is __𝐎𝐅𝐅__ !**`)
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }

        })
        client.on('message', message => {
    if(message.content.startsWith(prefix + "antilink on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
spread[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**✅ The Antilink Is __𝐎𝐍__ !**`)
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }

        })
    client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://www.gmail.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antilink ON ! So You Cant spread Here !**`)
    }
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.snapchat.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'

            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antilink ON ! So You Cant spread Here !**`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.instagram.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antilink ON ! So You Cant spread Here !**`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.twitter.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antilink ON ! So You Cant spread Here !**`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://www.facebook.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antilink ON ! So You Cant spread Here !**`)
    }
});



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.youtube.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antilink ON ! So You Cant spread Here !**`)
    }

});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.discordapp.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antilink ON ! So You Cant spread Here !**`)
    }

});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://discord.gg/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antilink ON ! So You Cant spread Here !**`)
    }

});


const sug = JSON.parse(fs.readFileSync('./sug.json' , 'utf8'));
 
client.on('message', message => {
          if (!message.channel.guild) return;
  //wait wait do not do anything let me kk
   
   if(message.content.startsWith(prefix + "setsug")) {
     
     let args = message.content.split(" ").slice(1)
       if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
       if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':information_source: | **لا تملك الصلاحيات الكافيه**' );
           let room = args[0]
if(!room) return message.reply('**اكتب اسم الروم**')
     if(!message.guild.channels.find('name', args[0])) return message.reply('**لا يمكنني اجاد الروم**')
let embed = new Discord.RichEmbed()
.setTitle('**Done The Suggest Code Has Been Setup**')
.addField('Channel:', room)
.addField('Requested By:', `${message.author}`)
.addField('Time now: ', `${moment(message.createdAt).format('D/MM/YYYY h:mm')}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
sug[message.guild.id] = {
channel: room,
}
fs.writeFile("./sug.json", JSON.stringify(sug), (err) => {
if (err) console.error(err)
})
  client.on('message', message => {
 
 
   
     })
   }else{
     if(message.content.startsWith(prefix+`sug`)) {
       
     if(message.channel.type == "dm") return message.reply('**This Command Only For Servers**');
     let suggest = message.content.split(" ").slice(1).join(' ');
     if(!suggest) return message.reply(`**اكتب اقتراحك**`)
   let findchannel = (message.guild.channels.find('name', `${sug[message.guild.id].channel}`))
   if(!findchannel) return message.channel.send(`**انا لم اجد الروم**`)
   message.channel.send(`**تم ارسال اقتراحك**`)
   let sugembed = new Discord.RichEmbed()
   .setTitle('New Suggest !')
   .addField('Suggest By:', `${message.author}`)
   .addField('Suggest:', `${suggest}`)
   .setFooter(client.user.username)
   findchannel.sendEmbed(sugembed)
       .then(function (message) {
         message.react('673173073943592980')
         message.react('673173075683967026')
       })
       .catch(err => {
           message.reply(`**انا لا اجد الروم**`)
           console.error(err);
       });
}
   }
}
          )
          
client.on('guildMemberAdd', member=> { //! ,Haru#6204
   let rwlc = JSON.parse(fs.readFileSync('./AutoRole.json' , 'utf8'));  //سوي ملف باسم AutoRole.json //! ,Haru#6204
    member.addRole(member.guild.roles.find("name","♧ Ꮢocket 🚀")); //! ,Haru#6204
    }); //! ,Haru#6204
client.on("guildMemberAdd", async member => {
	     let moment = require("moment"),  
           moment2 = require("moment-duration-format"), 
		         date = moment.duration(new Date() - member.user.createdAt).format("d");
          
		  if(date < 15) {
			  member.ban(" الحساب اقل من 15 أيام ")
		  }
});
const welcome = JSON.parse(
  fs.readFileSync("./welcomer.json", "utf8")
);
client.on("message", async message => {
  let messageArray = message.content.split(" ");
  if (message.content.startsWith(prefix + "setLeave")) {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;

    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send("You don't have permission").then(msg => {
        msg.delete(4500);
        message.delete(4500);
      });

    message.channel
      .send(":pencil: **| من فضلك اكتب الرساله الان... :pencil2: **")
      .then(msg => {
        message.channel
          .awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: ["time"]
          })
          .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg
              .edit(":scroll: **| اكتب اسم الروم الان... :pencil2: **")
              .then(msg => {
                message.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 90000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit("✅ **| تم الاعداد بنجاح...  **").then(msg => {
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ["time"]
                      });
                      let embed = new Discord.RichEmbed()
                        .setTitle("**Done The Leave Msg Code Has Been Setup**")
                        .addField("Message:", `${thisMessage}`)
                        .addField("Channel:", `${boi}`)
                        .setThumbnail(message.author.avatarURL)
                        .setFooter(`${client.user.username}`);
                      message.channel.sendEmbed(embed);
                      welcome[message.guild.id] = {
                        leavechannel: boi,
                        leavemsg: thisMessage,
                        onoff: "On",
                        leave: "On"
                      };
                      fs.writeFile(
                        "./welcomer.json",
                        JSON.stringify(welcome),
                        err => {
                          if (err) console.error(err);
                        }
                      );
                    });
                  });
              });
          });
      });
  }
});


client.on("message", message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setWelcomer")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** <a:admins:650199479768711169>``MANAGE_GUILD``<a:admins:650199479768711169>"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send(
        " Cant Find This Channel"
      );
    let embed = new Discord.RichEmbed()
      .setTitle(
        "** Done The Welcome Code Has Been Setup**"
      )
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    welcome[message.guild.id] = {
      channel: room,
      onoff: "On",
      by: "On",
      dm: "Off",
      leave: "Off"
    };
    fs.writeFile(
      "./welcomer.json",
      JSON.stringify(welcome),
      err => {
        if (err) console.error(err);
      }
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleLeave")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        onoff: "Off",
        leave: "Off"
      };
    if (welcome[message.guild.id].leave === "Off")
      return [
        message.channel.send(
          `** The Leave Msg Is __𝐎𝐍__ !**`
        ),
        (welcome[message.guild.id].leave = "On")
      ];
    if (welcome[message.guild.id].leave === "On")
      return [
        message.channel.send(
          `**The Leave Msg Is __𝐎𝐅𝐅__ ! **`
        ),
        (welcome[message.guild.id].leave = "Off")
      ];
    fs.writeFile(
      "./welcomer.json",
      JSON.stringify(welcome),
      err => {
        if (err)
          console.error(err).catch(err => {
            console.error(err);
          });
      }
    );
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleWelcome")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        onoff: "Off"
      };
    if (welcome[message.guild.id].onff === "Off")
      return [
        message.channel.send(
          `**The Welcome Is __𝐎𝐍__ ! **`
        ),
        (welcome[message.guild.id].onoff = "On")
      ];
    if (welcome[message.guild.id].onoff === "On")
      return [
        message.channel.send(
          `**The Welcome Is __𝐎𝐅𝐅__ ! **`
        ),
        (welcome[message.guild.id].onoff = "Off")
      ];
    fs.writeFile(
      "./welcomer.json",
      JSON.stringify(welcome),
      err => {
        if (err)
          console.error(err).catch(err => {
            console.error(err);
          });
      }
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleDmwelcome")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        dm: "Off"
      };
    if (welcome[message.guild.id].dm === "Off")
      return [
        message.channel.send(
          `**The Welcome Dm Is __𝐎𝐍__ !**`
        ),
        (welcome[message.guild.id].dm = "On")
      ];
    if (welcome[message.guild.id].dm === "On")
      return [
        message.channel.send(
          `**The Welcome Dm Is __𝐎𝐅𝐅__ !**`
        ),
        (welcome[message.guild.id].dm = "Off")
      ];
    fs.writeFile(
      "./welcomer.json",
      JSON.stringify(welcome),
      err => {
        if (err)
          console.error(err).catch(err => {
            console.error(err);
          });
      }
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleInvitedby")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        by: "Off"
      };
    if (welcome[message.guild.id].by === "Off")
      return [
        message.channel.send(
          `** The Invited By Is __𝐎𝐍__ !**`
        ),
        (welcome[message.guild.id].by = "On")
      ];
    if (welcome[message.guild.id].by === "On")
      return [
        message.channel.send(
          `**The Invited By Is __𝐎𝐅𝐅__ !**`
        ),
        (welcome[message.guild.id].by = "Off")
      ];
    fs.writeFile(
      "./welcomer.json",
      JSON.stringify(welcome),
      err => {
        if (err)
          console.error(err).catch(err => {
            console.error(err);
          });
      }
    );
  }
});
client.on("guildMemberRemove", member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      onoff: "Off",
      leave: "Off"
    };

  if (welcome[member.guild.id].onoff === "Off") return;
  if (welcome[member.guild.id].leave === "Off") return;
  let welcomer = member.guild.channels.find(
    "name",
    `${welcome[member.guild.id].leavechannel}`
  );
  if (!welcomer) return;
  welcomer.send(`${member} ${welcome[member.guild.id].leavemsg}`);
});

client.on("guildMemberAdd", async member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      onoff: "Off"
    };
  if (welcome[member.guild.id].onoff === "Off") return;
  const Canvas = require("canvas");
  const jimp = require("jimp");
  const w = [
    "./1.png",
  ];
  let Image = Canvas.Image,
    canvas = Canvas.createCanvas(400, 205),
    ctx = canvas.getContext("2d");
  ctx.patternQuality = "bilinear";
  ctx.filter = "bilinear";
  ctx.antialias = "subpixel";
  ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.stroke();
  ctx.beginPath();

  fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function(
    err,
    Background
  ) {
    if (err) return console.log(err);
    let BG = Canvas.Image;
    let ground = new Image();
    ground.src = Background;
    ctx.drawImage(ground, 0, 0, 400, 205);
  });

  let url = member.user.displayAvatarURL.endsWith(".webp")
    ? member.user.displayAvatarURL.slice(5, -20) + ".png"
    : member.user.displayAvatarURL;
  jimp.read(url, (err, ava) => {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
      if (err) return console.log(err);

      ctx.font = "17px Arial";
      ctx.fontSize = "72px";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText(member.user.username, 260, 145);

      ctx.font = "8px Arial Bold";
      ctx.fontSize = "72px";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText(`Your The Member ${member.guild.memberCount}`, 250, 155);

      let Avatar = Canvas.Image;
      let ava = new Avatar();
      ava.src = buf;
      ctx.beginPath();
      ctx.arc(130, 92, 71, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(ava, 60, 22, 145, 145);
      let c = member.guild.channels.find(
        "name",
        `${welcome[member.guild.id].channel}`
      );
      if (!c) return;
      c.sendFile(canvas.toBuffer());
      c.send(`**__W__elcome ~~T~~o** **${member.guild.name}**`)
      c.send("**  User : **" + `${member}` + "..");
      fs.writeFile(
        "./welcomer.json",
        JSON.stringify(welcome),
        err => {
          if (err)
            console.error(err).catch(err => {
              console.error(err);
            });
        }
      );
    });
  });
});

const invites = JSON.parse(fs.readFileSync("./invites.json", "UTF8"))

const wait = require("util").promisify(setTimeout);

client.on("ready", () => {
  wait(1000);

  client.guilds.forEach(g => {
    if(g.members.get(client.user.id).hasPermission("MANAGE_GUILD"))
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on("guildMemberAdd", member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      by: "Off"
    };
  if (welcome[member.guild.id].by === "Off") return;
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(
      channel => channel.name === `${welcome[member.guild.id].channel}`
    );
    if (!logChannel) return;
    setTimeout(() => {
      logChannel.send(`**Invited By: <@${inviter.id}>**
`);
    }, 2000);
    fs.writeFile(
      "./welcomer.json",
      JSON.stringify(welcome),
      err => {
        if (err)
          console.error(err).catch(err => {
            console.error(err);
          });
      }
    );
  });
});



//Alpha Team copyRight 2019
client.login(process.env.BOT_TOKEN)