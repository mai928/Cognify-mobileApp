import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './MainStack';
import { StatusBar } from 'react-native';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (

    <>
    <StatusBar hidden/>
    
       <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={MainStack} />
    </Stack.Navigator>
    </>
 
  );
};

export default StackNavigator;
