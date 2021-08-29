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

    if(message.content === prefix + "commandes") {
        message.channel.send("**?ip \n?reglement \n?touches \n?étaton \n?étatoff \n?help \n?discord \n?discordill \n?connectezvous \n?invitation \n?recrutementstaff \n?reboot**")
    }
   
    if(message.content === prefix + "ip") {
        message.channel.send("**[ F8 ] : connect game01.spacescloud.site:2511** \n||@here||")
    }
    
    if(message.content === prefix + "reglement") {
        message.channel.send("**Tous le monde doit lire le règlement ! Nul ne doit l'ignorer !** \nhttps://docs.google.com/document/d/1YrmaSUsxAfOuepf52wmlKKtZy4KysO91GSljZLcX7hc/edit?usp=sharing \n||@everyone||")
    }

    if(message.content === prefix + "touches") {
        message.channel.send("**[F1] Interface Boutique \n[F2] Interface clé(s) véhicule(s) \n[F3] Portée de la voix \n[F5] Interface personnel \n[F6] Interface entreprise \n[F7] Interface gang \n[F8] Console FiveM \n[F12] Prendre un screen (steam) \n[U] Fermer le véhicule \n[K] Interface animations \n[L] Ouvrir le coffre \n[G] Sortir le téléphone \n[B] Pointer du doigt \n[²] Lever les bras \n[Y] Interface vêtement \n[T] Ouvrir le tchat \n[F9] Radio \n[W] Voix (crier.chuchoter.normal)** \n||@here||")
    }

    if(message.content === prefix + "étaton") {
        message.channel.send("**Serveur on, connecter vous !!!** \n||@everyone||")
    }

    if(message.content === prefix + "étatoff") {
        message.channel.send("**Le serveur est OFF pendant un petit moment, excusez nous pour ce désagrément** \n||@here||")
    }
    
    if(message.content === prefix + "help") {
        message.channel.send("Si vous avez un problème/question (que ça soit ingame ou sur le discord) vous pouvez ouvrir un ticket et decrire votre problème/question et des membres du Staff vont y répondre \n||@everyone||")
    }

    if(message.content === prefix + "discord") {
        message.channel.send("**Voici tous les serveurs discords annexes au serveur AlternityRP. Vous retrouverez ici, tous les serveurs discords des entreprises.** \nhttps://discord.gg/jAjk8FNGJ5 \nhttps://discord.gg/FCy4HbFurh \nhttps://discord.gg/rmDJ58qTnD \nhttps://discord.gg/fhR9eK2Aem \nhttps://discord.gg/qcRcBZV7qa \n||@everyone||")
    }

    if(message.content === prefix + "discordill") {
        message.channel.send("**Voici tous les serveurs discords annexes au serveur AlternityRP. Vous retrouverez ici, tous les serveurs discords des gangs/cartels/organisations et tous ce qui a un rapport avec l'illégal.** \nhttps://discord.gg/BHADVVdvVt \nhttps://discord.gg/Aatx8RpNZ5 \nhttps://discord.gg/h8ExzeAd8D \nhttps://discord.gg/NDbbSYa26V \nhttps://discord.gg/ZJDSS7Jfkn \nhttps://discord.gg/FmSSjdY2pp \nhttps://discord.gg/sqmAUKrnkx \n@here")
    }

    if(message.content === prefix + "connectezvous") {
        message.channel.send("**Connectez vous !!! ** ||@here||")
    }

    if(message.content === prefix + "invitation") {
        message.channel.send("Invitation a créer...")
    }

    if(message.content === prefix + "recrutementstaff") {
        message.channel.send("**Pour devenir STAFF, vous devez réaliser une candidature avec le modèle si dessous. Bon courage !** \nhttps://docs.google.com/document/d/115hnTEDIE1C6Zigw7jI1qRzsQi1s0PFAOZlY7gisuCs/edit?usp=sharing \n||@everyone||")
    }

    if(message.content === prefix + "reboot") {
        message.channel.send("**REBOOT !!!** ||@everyone||")
    }

    if(message.content === "Salut") {
        message.reply("Salut à toi, bon jeu sur **AlternityRP**")
    }

    if(message.content === "salut") {
        message.reply("Salut à toi, bon jeu sur **AlternityRP**")
    }
    
    if(message.content === prefix + "annivazouf") {
        message.channel.send("**Bon anniversaire** @873536810440069130")
    }

});

Client.login(process.env.TOKEN);