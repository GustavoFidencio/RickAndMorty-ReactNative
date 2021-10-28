import { Animated, Easing } from 'react-native';

export class Animate {

    static default(
        toValue: number,
        state: any,
        duration: number = 1500,
        useNativeDriver: boolean = false,
    ) {
        Animated.timing(state, {
            toValue,
            duration,
            useNativeDriver,
        }).start();
    }

    static smooth(
        toValue: number,
        state: any,
        duration: number = 1500,
        useNativeDriver: boolean = false,
    ) {
        Animated.timing(state, {
            toValue,
            duration,
            useNativeDriver,
            easing: Easing.out(Easing.exp),
        }).start();
    }

    // static elastic(toValue, state, duration = 1500, useNativeDriver = false, onComplete) {
    //     Animated.timing(state, {
    //         toValue,
    //         duration,
    //         onComplete,
    //         useNativeDriver,
    //         easing: Easing.bounce,
    //     }).start();
    // }
}