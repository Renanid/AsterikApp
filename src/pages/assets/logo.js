import React from 'react';
import { View, Image } from 'react-native';
import Style from './style'

export default function () {
    return (
        <View style={Style.container}>
            <Image source={require('./logo.png')}
                    style={Style.logo}
            />

        </View>
    );
};