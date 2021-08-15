import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, ScrollView, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { classroomApi } from "../../services/classroomApi";

async function listCourses(token: string) {
    classroomApi.defaults.headers.authorization = `Bearer ${token}`;
    const res = await classroomApi.get('/v1/courses');
    return res.data.courses;
}

type CourseData = {
    name: string,
    key: string
}

export default function Home({ route, navigation }) {
    const { type, accessToken, user, userInfoResponse } = route.params;
    const [items, setItems] = useState<CourseData[]>([]);

    useEffect(() => {
        async function getItems() {
            try {
                let course = new Array<CourseData>();

                const data = await listCourses(accessToken);
                for (let i = 0; i < data.length; i++) {
                    const list = JSON.parse(JSON.stringify(data[i]));
                    course.push({
                        name: list.name,
                        key: String(i)
                    });
                }
                setItems(course);
            } catch (error) {
                console.log("ERROS");
                console.log("Ocorreu um erro ao buscar os items " + error);
                console.log("Ocorreu um erro ao buscar os items " + error.response);
                console.log("Ocorreu um erro ao buscar os items " + error.response.data.error.message);
            }
        }
        getItems();
    }, []);

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#081E06' }}>
            <View style={{ flex: 1, width: '100%' }}>

                <View style={{ flex: 1, padding: 20, backgroundColor: '#0F360A', justifyContent: 'center', flexDirection: 'row' }}>

                    <View style={{ flex: 1, padding: 10, height: 150 }}>
                        <ImageBackground
                            source={{
                                uri: user.photoUrl,
                            }}
                            style={{ flex: 1 }}
                            imageStyle={{ borderRadius: 10 }}
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

                    <View style={{ flex: 0.5, padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Minhas Turmas</Text>
                    </View>



                    <View style={{ flex: 3.5, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <FlatList
                            data={items}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ flex: 1, padding: 10, height: 200, }}>
                                        <ImageBackground
                                            source={require('./images/logo_turma.png')}
                                            style={{ flex: 1 }}
                                            imageStyle={{ borderRadius: 10 }}
                                        ></ImageBackground>
                                        <Button style={{ padding: 0, borderRadius: 10, backgroundColor: 'white' }}
                                            mode="contained"
                                            onPress={() => navigation.navigate('TurmaScreen')}>
                                            <Text style={{ color: '#081E06', fontWeight: 'bold' }}>{item.name}</Text>
                                        </Button>
                                    </View>

                                );
                            }}

                        />

                    </View>


                </View>

            </View>
        </ScrollView >
    );
}