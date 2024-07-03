import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../Screens/Login';
import Navigator from '../Navigation/Navigator';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={Navigator}/>
    </Stack.Navigator>
  );
};

export default Auth;