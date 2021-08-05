import React from 'react';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

export default function SplashScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', }}>
            <View style={{ flex: 1, width: '100%' }}>

                <View style={{ flex: 1, backgroundColor: "#0F360A" }}></View>
                <View style={{ flex: 6, backgroundColor: "#0F360A" }}>
                    <ImageBackground source={require('./images/vetor1.png')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
                        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>

                            <View style={{ flex: 2, justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', paddingBottom: 5 }}>Bem vindo</Text>
                                <Text style={{ color: 'white', fontSize: 20, paddingTop: 5 }}>Expanda suas possibilidades com o SalaAdmin</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Button icon="arrow-right" style={{ borderRadius: 50, padding: 10, backgroundColor: "#0F360A" }} mode="contained" onPress={() => navigation.navigate('LoginScreen')}>Seguir</Button>
                            </View>

                        </View>
                    </ImageBackground>
                </View>

            </View>
        </ScrollView >
    );
}