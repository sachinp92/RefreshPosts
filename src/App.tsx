import * as React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import store from './redux/store';
import AppNavigator from './navigation/AppNavigator';

// Some borderColor warning with the avatar that is definitely a false positive
LogBox.ignoreLogs(['Invalid props.style key']);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
