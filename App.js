import * as React from 'react';
import { SafeAreaView, StatusBar, } from 'react-native';
import LaunchStack from './src/navigation/LaunchStack';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store/configureStore';
import colors from './src/utils/colors';
import α from 'color-alpha';
import { NavigationContainer } from '@react-navigation/native';


function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={configureStore}>
        <StatusBar animated={true} backgroundColor={α(colors.background, 0.4)} />
        <NavigationContainer>
          <LaunchStack />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
