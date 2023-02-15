import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const Sidebar = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#c4b5fd' }}>

      <Image
        source={require('../../Icons/user.png')}
        style={{ marginTop: 50, alignSelf: 'center', width: 80, height: 80 }}

      />
      <Text style={{ fontSize: 20, fontWeight: '600', alignSelf: 'center', marginTop: 20 }}>miraj</Text>

      <View style={{ marginTop: 50, width: '100%' }}>
        <FlatList style={{ marginLeft: 20 }}
          data={[
            { icon: require('../../Icons/account.png'), title: 'Profile', },
            { icon: require('../../Icons/service.png'), title: 'Service' },
            { icon: require('../../Icons/about.png'), title: 'About' },
            { icon: require('../../Icons/support.png'), title: 'Support' },
          ]}

          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style=
                {{
                  width: '100%', flexDirection: 'row', alignItems: 'center', height: 55


                }}
                onPress={() => {
                  navigation.closeDrawer();
                  navigation.navigate(item.title)
                }}
              >
                <Image source={item.icon} style={{ marginLeft: 15, width: 24, height: 24 }}></Image>
                <Text style={{ fontSize: 16, color: 'white', marginLeft: 15 }}>{item.title}</Text>
              </TouchableOpacity>
            )
          }}
        />

      </View>
    </View>

  )
}

export default Sidebar