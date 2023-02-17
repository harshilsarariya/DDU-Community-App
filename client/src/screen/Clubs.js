import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";

const data = [
    {
        title: "DDUConnect",
        image:require("../../assets/images/clubs/dduconnect.png"),
        backdrop : require("../../assets/images/clubs/1.jpg"),
        tag: "DDU Connect covers all the latest events happening around the university. Our tagline “For the students, By the students"
    },
    {
        title: "Shutterbugs",
        image:require("../../assets/images/clubs/shutterbugs.jpg"),
        backdrop : require("../../assets/images/clubs/2.jpg"),
        tag: "Photography club of DDU,nadiad which aims to enhance and showcase the creative photography skills of the students."
    },
    {
        title: "NSS",
        image:require("../../assets/images/clubs/nss.png"),
        backdrop : require("../../assets/images/clubs/3.jpg"),
        tag: "National Service Scheme is the integral part of the system of our University"
    },
    {
        title: "Spandan",
        image:require("../../assets/images/clubs/spandan.png"),
        backdrop : require("../../assets/images/clubs/1.jpg"),
        tag: "Official Social Service Clubs of DDU"
    },
    {
        title: "The Reader's Community",
        image:require("../../assets/images/clubs/trc.png"),
        backdrop : require("../../assets/images/clubs/2.jpg"),
        tag: "Committee with their aphorism to share and spread the importance of reading through book talks, podcasts, etc."
    },
]

const Clubs = ({navigation}) => {
    return (
    <ScrollView>
      <View className="h-96 overflow-hidden">
        <Image
          className="h-full w-full"
          source={require("../../assets/images/club.jpg")}
        />
      </View>
      <View className="-my-6 p-4 bg-white rounded-t-3xl">
        <Text className="my-2 text-2xl text-sky-500 font-medium">
          Clubs for Fun
        </Text>
        <View>
          {data.map((val, idx) => {
            return (
              <>
                <TouchableOpacity onPress={() => navigation.navigate("ClubPage")} key={idx} className="my-2">
                  <ClubCard idx={idx}/>
                </TouchableOpacity>
              </>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const ClubCard = ({idx}) => {
  return (
    <>
        <View className="border border-gray-100 rounded-xl p-1 h-56">
          <View className="h-20 w-full">
            <Image
              className="w-full h-full rounded-xl"
              source={data[idx].backdrop}
            />
          </View>
          <View>
            <Image className="w-16 h-16 rounded-full -my-8 mx-4 bg-white" source={data[idx].image} />
          </View>
          <View className="p-2 px-4">
            <Text className="mt-8 text-xl font-medium">{data[idx].title}</Text>
            <Text>{data[idx].tag}</Text>
          </View>
        </View>
      </>
  );
};

export default Clubs;