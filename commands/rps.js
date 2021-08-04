exports.run = (client, message, args) => {
		const rps = ['rock', 'paper', 'scissors', 'gun'];
			if (!args.length)
			{
				return message.channel.send(`Options: rock, paper, scissors`);
			}
			if (!rps.includes(args[0]))
			{
				return message.channel.send(`Options: rock, paper, scissors`);
			}
			const choices = ['rock', 'paper', 'scissors'];
			const random = Math.floor((Math.random() * choices.length));
			var computerpicked = choices[random];
			var compare = function(choice1,choice2) 
			{
				if (choice1 === choice2) 
				{
					return "It's a tie!";
				} 
				else if ((choice1 == "rock" && choice2 == "scissors") || (choice1 == "paper" && choice2 == "rock") || (choice1 == "scissors" && choice2 == "paper")) 
				{
					return "You win!";
				} 
				else if ((choice1 == "paper" && choice2 == "scissors") || (choice1 == "scissors" && choice2 == "rock") || (choice1 == "rock" && choice2 == "paper")) 
				{
					return "You lose!";
				} 
				else if (choice1 === "gun")
				{ 
					return `You cheated, you get a cap in your ass.`; // ${client.emojis.cache.get("828704020477902878")}`;
				} 
			};
			var results = compare(args[0],computerpicked);
			
			if (args[0] == "gun")
			{
				computerpicked = `${client.emojis.cache.get("828704020477902878")}`;
			}
			
			const rpsembed = new Discord.MessageEmbed()
			  .setTitle(`Rock, Paper, Scissors`)
			  .addField(`${message.member   .displayName}`, args[0], true)
			  .addField(`${client.user.username}`, computerpicked, true)
			  .addField('Results', results)
			  .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
			  .setTimestamp()
			message.channel.send(rpsembed);
}