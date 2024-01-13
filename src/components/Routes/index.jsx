import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import RepositoryList from '../../screens/RepositoryList';
import Search from '../../screens/Search';

const Tab = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#010409',
                    },
                    headerTintColor: '#f0f0f0',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Tab.Screen name="Search" options={{ title: "Pesquisar" }} component={Search} />
                <Tab.Screen name="Home" options={{ title: "Perfil" }} component={Home} />
                <Tab.Screen name="RepositoryList" options={{ title: "Lista de Repositórios" }} component={RepositoryList} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
