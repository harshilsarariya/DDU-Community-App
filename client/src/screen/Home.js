import {
	View,
	Text,
	Image,
	ScrollView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import posts from "../data/posts";
import { Divider } from "react-native-paper";

const Home = ({ navigation }) => {
	return (
		<View className="relative">
			<ScrollView className="bg-white -z-30">
				<View className="flex space-y-4 gap-8">
					{posts.map((post, idx) => {
						return (
							<View key={idx} className="bg-white">
								<Chat post={post} />
								<Divider />
							</View>
						);
					})}
				</View>
			</ScrollView>
			<TouchableOpacity
				onPress={() => navigation.navigate("AddPost")}
				className="absolute bottom-4 bg-sky-500 rounded-full flex justify-center items-center w-12 h-12 right-4 z-50"
			>
				<AntDesign name="plus" size={30} color="white" />
			</TouchableOpacity>
		</View>
	);
};

const Chat = ({ post }) => {
	const { user, postItem } = post;
	const [hasLiked, setHasLiked] = useState(false);
	return (
		<>
			<View className="flex flex-row w-screen ">
				<View className="basis-1/5">
					<Image className="h-20 w-20 rounded-full" source={`${user.avatar}`} />
				</View>
				<View className="basis-3/5 flex justify-center p-4">
					<Text className="font-semibold text-lg">{user.name}</Text>
					<View className="flex flex-row space-x-1">
						<Text>{user.role}</Text>
						<Text>|</Text>
						<Text>{user.rollNumber}</Text>
					</View>
				</View>
				<View className="w-4 basis-1/5 flex justify-center">
					<MaterialCommunityIcons name="dots-vertical" size={24} color="gray" />
				</View>
			</View>
			<View className="flex flex-col justify-center">
				<Text className="my-2 px-4 text-sm text-gray-400">
					{new Date().toLocaleString()}
				</Text>

				<View className="mx-4">
					<Text className="text-lg">{postItem.description}</Text>
					{postItem.image ? (
						<Image
							className="h-64 mt-2 w-full rounded-2xl"
							source={postItem.image}
						/>
					) : (
						<></>
					)}
				</View>
				<View className="flex flex-row justify-between mt-4 border-y border-gray-300 py-2 px-4">
					<TouchableOpacity
						onPress={() => {
							setHasLiked(!hasLiked);
						}}
					>
						<View className="flex flex-row items-center justify-center space-x-1">
							{hasLiked ? (
								<Ionicons name="heart-sharp" size={20} color={`red`} />
							) : (
								<AntDesign name="hearto" size={20} color="black" />
							)}
							<Text>{postItem.likes + (hasLiked ? 1 : 0)}</Text>
						</View>
					</TouchableOpacity>

					<View className="flex flex-row items-center justify-center space-x-1">
						<EvilIcons name="share-google" size={24} color="black" />
						<Text>share</Text>
					</View>
					<View className="flex flex-row items-center justify-center space-x-1">
						<EvilIcons name="comment" size={24} color="black" />
						<Text>{postItem.comments.length}</Text>
					</View>
				</View>
				{/* Commnets */}
				{/* <View className="px-4">
					{postItem.comments.map((comment, idx) => {
						return (
							<>
								<View className="flex flex-row items-center my-2">
									<View className="basis-1/5">
										<Image
											className="h-10 w-10 rounded-full"
											source={require(`../../assets/images/avatar.jpg`)}
										/>
									</View>
									<View className="flex flex-col basis-4/5">
										<Text className="font-medium">{comment.name}</Text>
										<Text className="text-sm text-slate-700 font-normal">
											{comment.content}
										</Text>
									</View>
								</View>
								<Divider />
							</>
						);
					})}
				</View> */}
				<View className="flex flex-row border-t border-gray-100">
					<View className="">
						<Image
							className="h-12 w-12 rounded-full"
							source={require("../../assets/images/avatar.jpg")}
						/>
					</View>
					<TextInput className="px-6" placeholder="Add a comment..." />
				</View>
			</View>
		</>
	);
};

export default Home;
