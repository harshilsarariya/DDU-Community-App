import { Image, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";

const ClubPage = ({ navigation }) => {
  return (
    <>
      <ScrollView className="pt-10 bg-white">
        <View className="px-4">
          <View>
            <Text className="text-2xl font-semibold">Profile</Text>
          </View>
          <View className="flex flex-row items-center mt-6 space-x-4 justify-between">
            <View className="">
                <Image className="h-24 rounded-full w-24" source={require("../../assets/images/avatar.jpg")} />
            </View>
            <View className="flex flex-row basis-3/4 flex-1 justify-between">
                <TouchableWithoutFeedback className="basis-1/3">
                <View className="flex">
                    <Text className="text-center text-lg font-medium">3</Text>
                    <Text className="text-center text-lg">Posts</Text>
                </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback className="basis-1/3 flex-1">
                   <View className="flex">
                    <Text className="text-center text-lg font-medium">355</Text>
                    <Text className="text-center text-lg">Followers</Text>
                   </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback className="basis-1/3 flex-1">
                <View className="flex">
                    <Text className="text-center text-lg font-medium">523</Text>
                    <Text className="text-center text-lg">Following</Text>
                </View>
                </TouchableWithoutFeedback>
            </View>
          </View>
          <View className="mt-4">
            <Text className="font-medium text-lg">Shutterbugs</Text>
            <Text>The Official photography club of DDU</Text>
            <Text className="text-justify">fhjhf fyguhkvjg fgjhfgfd fkj udgfhfdhfusdhfdsf fuyfdhskfjsh udfghfjsg fudfgjdfhgjd gfhdsfkjdhkf hfkhdfkjd ughkdjfghkdufh uyfhughfkjg ufhgkhfguhdflkfgoifkdf ugyfkjbdfodnfd fuyofijdsjfgu ifyugydjfnd ufdyguiyhgif oeuriuelasf dfiugug</Text>
          </View>
          <View className="mt-4">
            <Text className="text-xl font-medium">Posts</Text>
          </View>
        </View>
            <View className="flex flex-row flex-wrap space-x-1 space-y-1 mt-6">
                {[...Array(14)].map((val,idx)=> {
                    return(
                        <>
                        <TouchableWithoutFeedback  onPress={() => navigation.navigate("Home")}>
                            <Image className="basis-1/3 h-32" source={require("../../assets/images/club.jpg")} />
                        </TouchableWithoutFeedback>
                        </>
                    )
                })}
            </View>
      </ScrollView>
    </>
  );
};

export default ClubPage;
