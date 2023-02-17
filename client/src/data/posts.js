const posts = [
	{
		user: {
			avatar: require("../../assets/images/avatar.jpg"),
			name: "Jack Mendolin",
			role: "SDE Intern",
			rollNumber: "IT056",
		},
		postItem: {
			description:
				"Your Snapdragon-powered OnePlus device can now help you Unleash your Dreams! Follow @Snapdragon_in to learn how.",
			image: require("../../assets/images/snapdragon.jpg"),
			likes: 340,
			comments: [
				{
					avatar: require("../../assets/images/avatar.jpg"),
					name: "Brian Snyder",
					content: "this is the comment dude!",
				},
				{
					avatar: require("../../assets/images/avatar.jpg"),
					name: "Harshil Sarariya",
					content: "Great to hear",
				},
			],
		},
	},
	{
		user: {
			avatar: require("../../assets/images/avatar2.png"),
			name: "Jack Mendolin",
			role: "SDE Intern",
			rollNumber: "IT056",
		},
		postItem: {
			description:
				"असफलता ही इनके जीवन का हिस्सा है, सफलता ही इनके जीवन का किस्सा है। मां के सपनों को पूरा करना है,पिता के उम्मीदों पर खरा उतरना है। दूसरों से पहले इन्हें खुद को जितना है, दूसरों से पहले इन्हें लक्ष्य को भेदना है।",
			// image: require("../../assets/images/snapdragon.jpg"),
			likes: 90,
			comments: [
				{
					avatar: require("../../assets/images/avatar.jpg"),
					name: "Harshil Sarariya",
					content: "Great to hear",
				},
			],
		},
	},
];

export default posts;
