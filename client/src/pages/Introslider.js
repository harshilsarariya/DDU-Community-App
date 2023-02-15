import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState, useEffect } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
} from 'react-native';

const Introslider = ({ navigation }) => {



    const [showRealApp, setShowRealApp] = useState(false);

    const buttonLabel = (label) => {
        return (
            <View style={{
                padding: 12
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: '600',
                    fontSize: 18,
                }}>{label}</Text>
            </View>
        );
    }

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
    }, [showRealApp])


    const RenderItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: "space-evenly",
                    paddingBottom: 100,
                }}>
                <View className="flex items-center space-y-4">
                <View className="bg-rose-300 rounded-full relative">
                    <Image className="z-50 w-80 h-80" source={item.image} />
                    {/* <View className="h-10 w-10 bg-yellow-400 absolute top-0 right-16 rounded-full"></View> */}
                    {/* <View className="h-20 w-20 bg-blue-700 absolute bottom-0 left-6 rounded-full"></View> */}
                </View>
                <View className="flex items-center w-80 space-y-6">
                <Text className="text-4xl font-semibold tracking-widest text-center leading-12">{item.title}</Text>
                <Text className="w-72 text-center text-xl">{item.text}</Text>
                </View>
                </View>
            </View>
        );
    };

    return (
        <>
            {/* {showRealApp ? (
                <SafeAreaView style={styles.container}>
                    <Loginpage  />
                </SafeAreaView>
            ) : ( */}
            <AppIntroSlider
                data={slides}
                renderItem={RenderItem}
                onDone={onDone}
                showSkipButton={true}
                onSkip={onSkip}
                dotStyle={{
                    backgroundColor: '#E7E6E0',
                    width: 18,
                }}
                activeDotStyle={{ backgroundColor: '#808080' }}
                // renderNextButton={()=>buttonLabel("Next")}
                renderNextButton={() => {
                    return (
                        <View style={{ marginTop: 10 }} >
                            <Icon name='navigate-next' size={30} ></Icon>
                        </View>)
                }}
                renderSkipButton={() => buttonLabel("Skip")}
                renderDoneButton={() => buttonLabel("Let's go")}
            />
            {/* )} */}
            {/* comment in miraj branch */}
        </>
    );

}

export default Introslider;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    introImageStyle: {
        width: 270,
        height: 270,
    },
    introTextStyle: {
        fontSize: 23,
        color: 'black',
        textAlign: 'center',
        paddingVertical: 30,
        width: '52%',
        marginBottom: 30,
    },
    introTitleStyle: {
        
        fontSize: 32,
        color: 'black',
        textAlign: 'center',
        marginTop: 40,
        fontWeight: 'bold',

    },
});




const slides = [
    {
        key: 's1',
        text: 'Choose what bothers you and we will provide the solution',
        title: 'Personal Treatment Plan',
        image: require('../../assets/images/avatar.jpg'),
    },
    {
        key: 's2',
        title: 'Automatic reminders',
        text: 'No need to remember the medicines as we will remind you',
        image: require('../../assets/images/avatar.jpg'),
    },
    {
        key: 's3',
        title: 'Book Appointments',
        text: 'Book your upcoming visit to clinic instantly by just few clicks',
        image: require('../../assets/images/avatar.jpg'),
    },

];
