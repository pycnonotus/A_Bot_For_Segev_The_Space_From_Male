const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', (msger) => {
    if (
        msger.content.toLowerCase().includes('segev') &&
        !msger.content.toLowerCase().includes('space')
    ) {
        msger.reply('Did you know Segev is a male from space');
    }
});

const secretKeyDontSaveHere = '' + process.env.DISCORD_BOT_TOKEN_KEY;
client.login(secretKeyDontSaveHere);
