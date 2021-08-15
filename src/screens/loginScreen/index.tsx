import React, { useState } from 'react';
import { Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-paper';
import * as Google from 'expo-google-app-auth';

import { IOS_CLIENT_ID, ANDROID_CLIENT_ID } from './../../config/googleAuth';

export default function LoginScreen({ navigation }) {

    //const IOS_CLIENT_ID = IOS_CLIENT_ID;
    //const ANDROID_CLIENT_ID = ANDROID_CLIENT_ID;

    const signInAsync = async () => {
        console.log("LoginScreen.js 6 | loggin in");
        try {
            const { type, accessToken,token, user } = await Google.logInAsync({
                iosClientId: IOS_CLIENT_ID,
                androidClientId: ANDROID_CLIENT_ID,
                scopes: ['https://www.googleapis.com/auth/classroom.courses.readonly'],
            });

            if (type === "success") {
                // Then you can use the Google REST API
                let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
                    headers: { Authorization: `Bearer ${accessToken}` },
                });
                console.log("LoginScreen.js 17 | success, navigating to profile");
                navigation.navigate("Home", { type, accessToken, user,  userInfoResponse });
            }
        } catch (error) {
            console.log("LoginScreen.js 19 | error with login", error);
        }
    };


    return (
        <ScrollView contentContainerStyle={{ flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', }}>
            <View style={{ flex: 1, width: '100%' }}>

                <View style={{ flex: 1.2 }}>
                    <ImageBackground source={require('./images/vetortopo.png')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
                    </ImageBackground>
                </View>

                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                    <Button style={{ padding: 10, borderRadius: 50, backgroundColor: 'white' }}
                        icon={() => (
                            <View>
                                <Image
                                    source={require('./images/logo_google.png')}
                                    style={{ resizeMode: 'contain', width: 30, height: 30, }}
                                />
                            </View>
                        )}
                        mode="contained"
                        onPress={signInAsync}>
                        <Text style={{ color: '#081E06', fontWeight: 'bold' }}>Continue com o Google</Text>
                    </Button>
                </View>

            </View>
        </ScrollView >
    );
}

function handleMessage(arg0: string) {
    throw new Error('Function not implemented.');
}
