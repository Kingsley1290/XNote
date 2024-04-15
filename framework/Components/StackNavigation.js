import { createStackNavigator } from '@react-navigation/stack';
import { Intro } from '../Screens/Intro';
import { LogIn } from '../Screens/LogIn';
import { SignUp } from '../Screens/SignUp';
import { HomePage } from '../Screens/HomePage';
import { PostNote } from '../Screens/PostNote';
import { Profile } from '../Screens/Profile';
import { SendNote } from '../Screens/SendNote';

const Stack = createStackNavigator();

export function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Intro' component={Intro} options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={HomePage} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={LogIn} options={{ headerShown: false }} />
            <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name='PostNote' component={PostNote} />
            <Stack.Screen name='SendNote' component={SendNote} />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    )
}