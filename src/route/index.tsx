import React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import friendsReducer from '../rdx/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { Home, CharacterModal } from "../pages";

const Stack = createStackNavigator();
const store = createStore(friendsReducer);

export const App: React.FC = ({ }) => {

    return (
        <Provider store={store}>
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
        </Provider>
    )
}