const discord = require('discord.js')
const client = new discord.Client()

client.on('ready', () => {
    console.log('pret !')
    client.user.setActivity("%help", {type:"WATCHING"})
})

client.login("NjY2MzQ0MTE2Mjc5MzEyMzg1.XhyzWg.UvaxfzTBwGW8NDQmBQJ3yIvjLjY")