import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import Register from '../screens/RegisterScreen';
import Splash from '../screens/SplashScreen';
import Tabs from '../screens/Tabs';
import EditProfile from '../screens/EditProfile';
import ForgetPassword from '../screens/ForgetPassword';


const MainStack = () => {
  const MainStack = createStackNavigator();
  return (
    <MainStack.Navigator
      initialRouteName='Splash'
      screenOptions={{
        headerShown: false,

      }}>
      <MainStack.Screen name="Splash" component={Splash} />
      <MainStack.Screen name="Tabs" component={Tabs} />

      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="SignUp" component={SignUpScreen} />
      <MainStack.Screen name="Register" component={Register} />
      <MainStack.Screen  name='EditProfile' component={EditProfile}/>
      <MainStack.Screen  name='ForgetPassword' component={ForgetPassword}/>
      
    </MainStack.Navigator>
  );
};

export default MainStack;
