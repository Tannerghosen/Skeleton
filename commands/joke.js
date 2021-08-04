const axios = require("axios");
exports.run = async (client, message, args) => {
				var say;
				if(args[0] == "dad" || args[1] == "dad")
				{
					await axios.get("https://icanhazdadjoke.com/slack").then((response) => { 
						say = response.data.attachments[0].fallback;
					});
				}
				else
				{
					var picker = Math.floor(Math.random() * 2); // Number after * = Max amount of APIs + 1
					switch(picker)
					{
					case 0:
						await axios.get("https://v2.jokeapi.dev/joke/Any").then((response) => { 
							if (response.data.type == "twopart")
							{
								say = response.data.setup + "\n" + response.data.delivery;
							}
							else
							{
								say = response.data.joke;
							}
						});
						break;
					case 1:
						await axios.get("http://www.official-joke-api.appspot.com/random_joke").then((response) => {
							say = response.data.setup + "\n" + response.data.punchline; 
						});
						break;
					}
				}
				var foot;
				
				if (message.mentions.users.first() == message.author.id) 
				{
					say = "You can't send a joke to yourself."; 
					foot = message.member.displayName;
				}
				else if (message.mentions.members.first())
				{
					foot = `For ${message.mentions.users.first().username}, From ${message.member.displayName}`;
				}
				else
				{
					foot = message.member.displayName;
				}
				const jokeembed = new Discord.MessageEmbed()
				  .setTitle(`Joke`)
				  .setDescription(`${say}`)
				  .setFooter(foot,  message.author.displayAvatarURL({ dynamic: true }))
				  .setTimestamp()
				message.channel.send(jokeembed);
			
}