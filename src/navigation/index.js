import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { JCHome } from "../screens/Home";
import { JCAbout } from "../screens/About";
import JCNews from "../screens/News";
import { JCAlbums } from "../screens/Albums";
import { JCContact } from "../screens/Contact";

const Stack = createNativeStackNavigator();
const JCNav = createMaterialTopTabNavigator();

export const JCRootNavigation = () => {
    return (
        <JCNav.Navigator
           initialRouteName="Home"
           screenOptions={{
            lazy: true,
            tabBarPressOpacity: 1,
            tabBarContentContainerStyle: {
                justifyContent: 'left',
            },
            tabBarIndicatorStyle: {
                display: "none",
            },
            tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
            tabBarItemStyle: { width: 100 },
            tabBarStyle: { 
                backgroundColor: '#fff',
                justifyContent: 'right'
            },
            indicatorStyle: {
                backgroundColor: "white",
                height: 30,
                borderRadius: 30,
                top: 9,
            },
        }}
        >
            <JCNav.Screen
                name="Home"
                component={JCHome}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <JCNav.Screen
                name="About"
                component={JCAbout}
                options={{
                    tabBarLabel: "About",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="information" color={color} size={26} />
                    ),
                }}
            />
            <JCNav.Screen
                name="News"
                component={JCNews} 
                options={{
                    tabBarLabel: "News",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="newspaper" color={color} size={26} />
                    ),
                }}
            />
            <JCNav.Screen
                name="Albums"
                component={JCAlbums}
                options={{
                    tabBarLabel: "Albums",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="album" color={color} size={26} />
                    ),
                }}
            />
            <JCNav.Screen
                name="Contact"
                component={JCContact}
                options={{
                    tabBarLabel: "Contact",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="email" color={color} size={26} />
                    ),
                }}
            />
        </JCNav.Navigator>
    )
}
