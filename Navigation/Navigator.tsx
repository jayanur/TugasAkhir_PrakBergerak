import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import AddList from '../Screens/AddList';
import Profile from '../Screens/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={AddList}/>
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#00FF00' },
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
      }}>
      <Tab.Screen
        name="Add"
        component={HomeStack}
        options={() => ({
          tabBarIcon: () => <Ionicons name="add-circle-outline" />,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={() => ({
          tabBarIcon: () => <Ionicons name="person-outline" />,
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
