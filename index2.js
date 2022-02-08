const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "?";

Client.on("ready", () => {
    console.log("Bot opérationnel");
});

Client.on("messageCreate", message => {

    if(messsage.content === "Je paye ma tournée !!!"){
        message.reply("Je te rejoins mon pote !!!")
    }
});

Client.login(process.env.TOKEN);