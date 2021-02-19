import 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import VideoPlayer from './Components/VideoPlayer';
import AudioPlayer from './Components/AudioPlayer';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Countries from './Components/Countries'
import LogoImage from './Components/LogoImage'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView style={styles.drawer} {...props}>
      <LogoImage />
      <View
        style={{
          borderColor: '#001b32',
          borderWidth: 1
        }}
      ><Text>&nbsp;</Text></View>
      <DrawerItemList labelStyle={styles.menu} {...props} />
      <DrawerItem labelStyle={styles.menu}
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem labelStyle={styles.menu}
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Countries" component={Countries} />
      <Drawer.Screen name="AudioPlayer" component={AudioPlayer} />
      <Drawer.Screen name="VideoPlayer" component={VideoPlayer} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppDrawer />
        {/* <Stack.Navigator>

          <Stack.Screen
            name="Countries"
            component={Countries}
            options={{
              title: 'Countries',
              image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg',
              headerStyle: {
                backgroundColor: '#001B32',
                height: 70,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerLeft: () =>
                <TouchableOpacity><Icon name="bars" size={30} color="#fff" style={{ paddingLeft: 10 }} /></TouchableOpacity>,
              headerRight: () => <LogoImage />
            }}
          />
          <Stack.Screen name="Audio" component={AudioPlayer} />
        </Stack.Navigator> */}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "#001b32",
    paddingTop: 10
  },
  menu: {
    color: "#fff"
  }
});

export default App;