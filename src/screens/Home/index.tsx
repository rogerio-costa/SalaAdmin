import React from 'react';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

export default function Home({ route, navigation }) {
    const { user } = route.params;
    console.log("user from google", user);
    console.log(user.name)
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#081E06' }}>
            <View style={{ flex: 1, width: '100%' }}>

                <View style={{ flex: 1, padding: 20, backgroundColor: '#0F360A', justifyContent: 'center', flexDirection: 'row' }}>

                    <View style={{ flex: 1, padding: 10, height: 150 }}>
                        <ImageBackground
                            source={{
                                uri: user.photoUrl,
                              }}
                            style={{ flex: 1, borderRadius: 10 }}
                        ></ImageBackground>
                        <Button style={{ padding: 0, borderRadius: 10, backgroundColor: 'white' }}
                            mode="contained"
                            onPress={() => navigation.navigate('LoginScreen')}>
                            <Text style={{ color: '#081E06', fontWeight: 'bold' }}>Sair</Text>
                        </Button>
                    </View>

                    <View style={{ flex: 2, justifyContent: 'center', padding: 10 }}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Bem vindo</Text>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{user.name}</Text>
                    </View>

                </View>

                <View style={{ flex: 3, padding: 20 }}>

                    <View style={{ flex: 0.5, padding: 10 ,alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Minhas Turmas</Text>
                    </View>

                    <View style={{ flex: 3.5, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>

                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <View style={{ flex: 1, padding: 10, height: 200, }}>
                                <ImageBackground
                                    source={require('./images/logo_turma.png')}
                                    style={{ flex: 1 }}
                                ></ImageBackground>
                                <Button style={{ padding: 0, borderRadius: 10, backgroundColor: 'white' }}
                                    mode="contained"
                                    onPress={() => navigation.navigate('')}>
                                    <Text style={{ color: '#081E06', fontWeight: 'bold' }}>Turma 1</Text>
                                </Button>
                            </View>

                            <View style={{ flex: 1, padding: 10, height: 200 }}>
                                <ImageBackground
                                    source={require('./images/logo_turma.png')}
                                    style={{ flex: 1 }}
                                ></ImageBackground>
                                <Button style={{ padding: 0, borderRadius: 10, backgroundColor: 'white' }}
                                    mode="contained"
                                    onPress={() => navigation.navigate('')}>
                                    <Text style={{ color: '#081E06', fontWeight: 'bold' }}>Turma 2</Text>
                                </Button>
                            </View>

                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', }}>

                            <View style={{ flex: 1, padding: 10, height: 200, }}>
                                <ImageBackground
                                    source={require('./images/logo_turma.png')}
                                    style={{ flex: 1 }}
                                ></ImageBackground>
                                <Button style={{ padding: 0, borderRadius: 10, backgroundColor: 'white' }}
                                    mode="contained"
                                    onPress={() => navigation.navigate('')}>
                                    <Text style={{ color: '#081E06', fontWeight: 'bold' }}>Turma 3</Text>
                                </Button>
                            </View>

                            <View style={{ flex: 1, padding: 10, height: 200 }}>
                                <ImageBackground
                                    source={require('./images/logo_turma.png')}
                                    style={{ flex: 1 }}
                                ></ImageBackground>
                                <Button style={{ padding: 0, borderRadius: 10, backgroundColor: 'white' }}
                                    mode="contained"
                                    onPress={() => navigation.navigate('')}>
                                    <Text style={{ color: '#081E06', fontWeight: 'bold' }}>Turma 4</Text>
                                </Button>
                            </View>

                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', }}>

                            <View style={{ flex: 1, padding: 10, height: 200, }}>
                                <ImageBackground
                                    source={require('./images/logo_turma.png')}
                                    style={{ flex: 1 }}
                                ></ImageBackground>
                                <Button style={{ padding: 0, borderRadius: 10, backgroundColor: 'white' }}
                                    mode="contained"
                                    onPress={() => navigation.navigate('')}>
                                    <Text style={{ color: '#081E06', fontWeight: 'bold' }}>Turma 5</Text>
                                </Button>
                            </View>

                            <View style={{ flex: 1, padding: 10, height: 200 }}>
                                <ImageBackground
                                    source={require('./images/logo_turma.png')}
                                    style={{ flex: 1 }}
                                ></ImageBackground>
                                <Button style={{ padding: 0, borderRadius: 10, backgroundColor: 'white' }}
                                    mode="contained"
                                    onPress={() => navigation.navigate('')}>
                                    <Text style={{ color: '#081E06', fontWeight: 'bold' }}>Turma 6</Text>
                                </Button>
                            </View>

                        </View>

                    </View>

                </View>

            </View>
        </ScrollView >
    );
}