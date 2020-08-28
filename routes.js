import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import ForgotPassword from './screens/ForgotPasswordScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import AuthDecision from './screens/AuthDecisionScreen';
import OnboardScreen from './screens/OnboardScreen';
import DashBoard from './screens/DashBoard';
import CourseDetails  from "./screens/CourseDetailsScreen";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AntDesign} from '@expo/vector-icons';
import  colors from "./colors/colors";

const Stack=createStackNavigator();
const Tab= createBottomTabNavigator();
const getTabBarIcon=icon=>({color})=>(
    <AntDesign name={icon} size={26} style={{color:color}}/>
);
export default function app(){

    const primaryPage=()=>{
        return( <Tab.Navigator   tabBarOptions={{
            showLabel:false,
        }}>
                <Tab.Screen name="Home" component={DashBoard}
                    options={{
                        tabBarIcon: getTabBarIcon('home'),
                        
                    }}
                />
                <Tab.Screen name="CourseDetails" component={CourseDetails}
                      options={{
                        tabBarIcon: getTabBarIcon('videocamera'),
                    
                    }}
                />
            </Tab.Navigator>
        )
    }
return(
    <NavigationContainer>
        <Stack.Navigator>

            
             <Stack.Screen name="OnboardScreen"  component={OnboardScreen} 
            
            options={{
                title:'ResoLearn',
                headerShown:false
            }}
            /> 
            <Stack.Screen name="AuthScreen" component={AuthDecision}
              options={{
                  title:'Welcome'
              }}
            />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword}
            options={{
                    // headerShown:false,
                    title:'Forgot Password'
                }}
            />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen name="SignInScreen" component={SignInScreen}
                options={{
                    headerShown:false
                }}
            />

        <Stack.Screen name="Primary Navigation" component={primaryPage} options={{headerShown:false}}>

        </Stack.Screen>


            
        
        </Stack.Navigator>
    </NavigationContainer>
)
}