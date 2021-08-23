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
    if (message.author.bot) return;
   
    if(message.content === prefix + "ip") {
        message.channel.send("**[ F8 ] : connect game01.spacescloud.site:2511**")
    }
    
    if(message.content === prefix + "reglement") {
        message.channel.send("**Tous le monde doit lire le règlement ! Nul ne doit l'ignorer !** \nhttps://docs.google.com/document/d/1YrmaSUsxAfOuepf52wmlKKtZy4KysO91GSljZLcX7hc/edit?usp=sharing")
    }

    if(message.content === prefix + "touches") {
        message.channel.send("**[F1] Interface Boutique \n[F2] Interface clé(s) véhicule(s) \n[F3] Portée de la voix \n[F5] Interface personnel \n[F6] Interface entreprise \n[F7] Interface gang \n[F8] Console FiveM \n[F12] Prendre un screen (steam) \n[U] Fermer le véhicule \n[K] Interface animations \n[L] Ouvrir le coffre \n[G] Sortir le téléphone \n[B] Pointer du doigt \n[²] Lever les bras \n[Y] Interface vêtement \n[T] Ouvrir le tchat \n[F9] Radio \n[W] Voix (crier.chuchoter.normal**)")
    }

    if(message.content === prefix + "étaton") {
        message.channel.send("**Serveur on, connecter vous !!!** \n||@everyone||")
    }

    if(message.content === prefix + "étatoff") {
        message.channel.send("**Le serveur est OFF pendant un petit moment, excusez nous pour ce désagrément**")
    }

    
});

Client.login(process.env.TOKEN);