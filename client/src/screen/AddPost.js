import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

const AddPost = () => {
	return (
		<View>
			<View className="mx-5 mt-2">
				<TextInput>Add Title</TextInput>
			</View>
		</View>
	);
};

export default AddPost;
