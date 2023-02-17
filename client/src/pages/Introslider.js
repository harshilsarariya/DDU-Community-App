import AppIntroSlider from "react-native-app-intro-slider";
import Icon from "react-native-vector-icons/MaterialIcons";
import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from "react-native";

const Introslider = ({ navigation }) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const buttonLabel = (label) => {
    return (
      <View
        style={{
          padding: 12,
        }}
      >
        <Text
          style={{
            color: "black",
            fontWeight: "600",
            fontSize: 18,
          }}
        >
          {label}
        </Text>
      </View>
    );
  };

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  useEffect(() => {
    if (showRealApp === true) {
      navigation.navigate("Login");
    }
  }, [showRealApp]);

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          // alignItems: 'center',
          justifyContent: "center",
          paddingBottom: 20,
          paddingTop: 40,
          // paddingHorizontal:20
        }}
      >
        <View className="flex space-y-4">
          <View className="rounded-full basis-2/3 h-full">
            <Image
              className="z-50 w-full h-full object-cover"
              source={item.image}
            />
            {/* <View className="h-10 w-10 bg-yellow-400 absolute top-0 right-16 rounded-full"></View> */}
            {/* <View className="h-20 w-20 bg-blue-700 absolute bottom-0 left-6 rounded-full"></View> */}
          </View>
          <View className="flex space-y-2 basis-1/3 px-8">
            <Text className="text-4xl text-left font-semibold tracking-widest leading-12">
              {item.title}
            </Text>
            <Text className="text-xl">{item.text}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={onDone}
        showSkipButton={true}
        onSkip={onSkip}
        dotStyle={{
          backgroundColor: "#E7E6E0",
          width: 18,
        }}
        activeDotStyle={{ backgroundColor: "#808080" }}
        renderNextButton={() => {
          return (
            <View style={{ marginTop: 10 }}>
              <Icon name="navigate-next" size={30}></Icon>
            </View>
          );
        }}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Let's go")}
      />
      {/* )} */}
      {/* comment in miraj branch */}
    </>
  );
};

export default Introslider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  introImageStyle: {
    width: 270,
    height: 270,
  },
  introTextStyle: {
    fontSize: 23,
    color: "black",
    textAlign: "center",
    paddingVertical: 30,
    width: "52%",
    marginBottom: 30,
  },
  introTitleStyle: {
    fontSize: 32,
    color: "black",
    textAlign: "center",
    marginTop: 40,
    fontWeight: "bold",
  },
});

const slides = [
  {
    key: "s1",
    text: "Join an existing creative association or create your own",
    title: "Find comfy and like-minded people",
    image: require("../../assets/images/community.gif"),
  },
  {
    key: "s2",
    title: "Enjoy and learn new skills",
    text: "Participate in activities of other authors or purchase ready-made mini-courses",
    image: require("../../assets/images/learn.gif"),
  },
  {
    key: "s3",
    title: "Organize your own events",
    text: "Or broadcast creative processes by communicating with the audience online",
    image: require("../../assets/images/event.gif"),
  },
];
