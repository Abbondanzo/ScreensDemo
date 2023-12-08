import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
  NativeModules,
} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';

enableScreens();
const Stack = createNativeStackNavigator();

const {NativeActivity} = NativeModules;

const styles = StyleSheet.create({
  backgroundStyleDark: {
    backgroundColor: Colors.darker,
    flex: 1,
  },
  backgroundStyleLight: {
    backgroundColor: Colors.lighter,
    flex: 1,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView
      style={
        isDarkMode ? styles.backgroundStyleDark : styles.backgroundStyleLight
      }>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.view}>
        <Button
          title="Open Native Activity"
          onPress={() => {
            NativeActivity.openNativeActivity();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const WithNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WithNavigation;
