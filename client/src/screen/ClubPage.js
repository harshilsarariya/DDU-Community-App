import { Image, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";

const ClubPage = ({ navigation }) => {
  return (
    <>
      <ScrollView className="py-10 bg-white">
        <View className="px-4">
          <View>
            <Text className="text-2xl font-semibold my-4">Profile</Text>
          </View>
          <View className="flex flex-row items-center mt-6 space-x-4 justify-between ">
            <View className="border-2 border-violet-500 overflow-hidden flex items-center justify-center h-24 w-24 p-2 rounded-full">
                <Image className="h-full rounded-full w-full" source={require("../../assets/images/clubs/dduconnect.png")} />
            </View>
            <View className="flex flex-row basis-3/4 flex-1 justify-evenly">
                <TouchableWithoutFeedback className="basis-1/2">
                <View className="flex">
                    <Text className="text-center text-lg font-medium">14</Text>
                    <Text className="text-center text-lg">Posts</Text>
                </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback className="basis-1/2 flex-1">
                   <View className="flex">
                    <Text className="text-center text-lg font-medium">355</Text>
                    <Text className="text-center text-lg">Followers</Text>
                   </View>
                </TouchableWithoutFeedback>
            </View>
          </View>
          <View className="mt-4">
            <Text className="font-medium text-lg">DDUConnect</Text>
            <Text>The Official photography club of DDU</Text>
            <Text className="text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Text>
          </View>
          <View className="mt-2">
            <Text className="text-xl font-medium">Posts</Text>
          </View>
        </View>
            <View className="flex flex-row flex-wrap space-x-1 space-y-1 mt-2">
                {[...Array(14)].map((val,idx)=> {
                    return(
                        <>
                        <TouchableWithoutFeedback>
                        <View className="h-32 w-1/3 p-1">
                            <Image className="h-full w-full" source={{uri:`https://picsum.photos/200/300?random=${idx+1}`}} />
                        </View>
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
