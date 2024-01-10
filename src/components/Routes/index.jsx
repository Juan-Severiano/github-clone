import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Principal" options={{ title: "Perfil" }} component={Principal} />
                <Tab.Screen name="Repositorios" component={Repositorios} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
