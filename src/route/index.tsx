import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { Home, CharacterModal } from "../pages";

const Stack = createStackNavigator();

export const App: React.FC = ({ }) => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="CharacterModal"
                    component={CharacterModal}
                    options={{
                        headerShown: false,
                        gestureEnabled: true,
                        cardOverlayEnabled: true,
                        ...TransitionPresets.ModalPresentationIOS,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}