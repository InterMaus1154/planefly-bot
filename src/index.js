const {config} = require('dotenv');
config();

const {Client, GatewayIntentBits} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ]
});

const randomInt = (min, max) =>{
    return Math.floor(Math.random() * (max-min) + min);
}

client.addListener("ready", c => {
   console.log(`${c.user.tag} connected`)
});

client.addListener("messageCreate", message =>{

    if(message.author.bot) return;

    if(message.content.toLowerCase().includes('plane') || message.content.includes("✈️")){
        let random = randomInt(1, 10);
        let reply = "";
        for(let i=0;i<random;i++){
            reply += "✈️";
        }
        message.reply(reply);
    }
});

client.login(process.env.token).then(() => {
    console.log("Successful login")
})
.catch(()=>{
   console.log("Login failed");
});