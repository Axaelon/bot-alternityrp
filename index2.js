const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

const prefix = "?";

Client.on("ready", () => {
    console.log("Bot opérationnel");
});

Client.on("messageCreate", message => {

    if (messsage.content === "Je paye ma tournée !!!"){
        message.channel.reply("Je te rejoins mon pote !!!")
    }
});

Client.login(process.env.TOKEN);