import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TeacherList from './../pages/TeachersList/index';
import Favorite from './../pages/Favorite/index';
import { Ionicons } from '@expo/vector-icons';
import { ColorPropType } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator 
            tabBarOptions={{
                style:{
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 65,
                },
                tabStyle:{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 25,
                    height: 25,
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d',
            }}
        >
            <Screen 
                name="TeacherList" 
                component={TeacherList}
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size, focused }) => {
                    return (
                            <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
                    );
                    }
                }} />

            <Screen 
                name="Favorite" 
                component={Favorite} 
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused
                     }) => {
                        return (
                            <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color}/>
                        )
                    }
                }}/>
        </Navigator>
    )
}

export default StudyTabs;