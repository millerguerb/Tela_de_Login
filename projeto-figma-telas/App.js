const Stack = createNativeStackNavigator();
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Index from './Screens/index';
import Login from './Screens/login';
import Cadastrar from './Screens/cadastro';
import EsqueciSenha from './Screens/esqueciSenha';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const[hideSplashScreen, setHideSplashScreen] = React.useState(true)
  return(
    <NavigationContainer>
    {hideSplashScreen ? (
      <Stack.Navigator screenOptions = {{headerShown: false}}>
        <Stack.Screen 
        name="index"
        component={Index}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name="login"
        component={Login}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="cadastrar"
        component={Cadastrar}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="esqueciSenha"
        component={EsqueciSenha}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    ) : null}
    </NavigationContainer>
  );
};

export default App;
