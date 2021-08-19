import React from 'react';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { Button, DataTable, TextInput } from 'react-native-paper';
import Panel from '../../../components/Panel';  // Step 1

export default function TurmaScreen({ route, navigation }) {

    const { item } = route.params;
    const [text, setText] = React.useState('');
    const [text2, setText2] = React.useState('');

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: '#081E06' }}>
            <View style={{ flex: 1, width: '100%' }}>

                <View style={{ flex: 1, padding: 20, backgroundColor: '#0F360A', justifyContent: 'center', flexDirection: 'row' }}>

                    <View style={{ flex: 1, padding: 10, height: 150 }}>
                        <ImageBackground
                            source={require('./images/logo_turma.png')}
                            style={{ flex: 1, borderRadius: 10 }}
                        ></ImageBackground>
                    </View>

                    <View style={{ flex: 2, justifyContent: 'center', padding: 10 }}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{item.name}</Text>
                        <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Número de alunos</Text>
                        <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Número de atividades</Text>
                    </View>

                </View>

                <View style={{ flex: 3, padding: 20, }}>

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Período de Busca</Text>
                        </View>

                        <View>
                            <TextInput style={{ margin: 10 }}
                                label="Data inicial"
                                value={text}
                                onChangeText={text => setText(text)}
                            />

                            <TextInput style={{ margin: 10 }}
                                label="Data final"
                                value={text2}
                                onChangeText={text2 => setText2(text2)}
                            />
                        </View>

                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Alunos Matriculados</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <ScrollView horizontal={true}>

                                <View style={{ flex: 1, padding: 10, height: 150, }}>
                                    <ImageBackground
                                        source={require('./images/logo_aluno.png')}
                                        style={{ flex: 1 }}
                                    ></ImageBackground>
                                    <Button style={{ padding: 0, borderRadius: 10, backgroundColor: 'white' }}
                                        mode="contained"
                                        onPress={() => navigation.navigate('AlunoScreen')}>
                                        <Text style={{ color: '#081E06', fontWeight: 'bold' }}>Aluno 1</Text>
                                    </Button>
                                </View>

                                <View style={{ flex: 1, padding: 10, height: 150, }}>
                                    <ImageBackground
                                        source={require('./images/logo_aluno.png')}
                                        style={{ flex: 1 }}
                                    ></ImageBackground>
                                    <Button style={{ padding: 0, borderRadius: 10, backgroundColor: 'white' }}
                                        mode="contained"
                                        onPress={() => navigation.navigate('AlunoScreen')}>
                                        <Text style={{ color: '#081E06', fontWeight: 'bold' }}>Aluno 2</Text>
                                    </Button>
                                </View>

                                <View style={{ flex: 1, padding: 10, height: 150, }}>
                                    <ImageBackground
                                        source={require('./images/logo_aluno.png')}
                                        style={{ flex: 1 }}
                                    ></ImageBackground>
                                    <Button style={{ padding: 0, borderRadius: 10, backgroundColor: 'white' }}
                                        mode="contained"
                                        onPress={() => navigation.navigate('AlunoScreen')}>
                                        <Text style={{ color: '#081E06', fontWeight: 'bold' }}>Aluno 3</Text>
                                    </Button>
                                </View>

                                <View style={{ flex: 1, padding: 10, height: 150, }}>
                                    <ImageBackground
                                        source={require('./images/logo_aluno.png')}
                                        style={{ flex: 1 }}
                                    ></ImageBackground>
                                    <Button style={{ padding: 0, borderRadius: 10, backgroundColor: 'white' }}
                                        mode="contained"
                                        onPress={() => navigation.navigate('AlunoScreen')}>
                                        <Text style={{ color: '#081E06', fontWeight: 'bold' }}>Aluno 4</Text>
                                    </Button>
                                </View>

                            </ScrollView>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Atividades</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <ScrollView horizontal={true}>

                                <View style={{ flex: 1, padding: 10, height: 150, }}>
                                    <ImageBackground
                                        source={require('./images/logo_turma.png')}
                                        style={{ flex: 1 }}
                                    ></ImageBackground>
                                    <Button style={{ padding: 0, borderRadius: 10, backgroundColor: 'white' }}
                                        mode="contained"
                                        onPress={() => navigation.navigate('AtividadeScreen')}>
                                        <Text style={{ color: '#081E06', fontWeight: 'bold' }}>Atividade 1</Text>
                                    </Button>
                                </View>

                                <View style={{ flex: 1, padding: 10, height: 150, }}>
                                    <ImageBackground
                                        source={require('./images/logo_turma.png')}
                                        style={{ flex: 1 }}
                                    ></ImageBackground>
                                    <Button style={{ padding: 0, borderRadius: 10, backgroundColor: 'white' }}
                                        mode="contained"
                                        onPress={() => navigation.navigate('AtividadeScreen')}>
                                        <Text style={{ color: '#081E06', fontWeight: 'bold' }}>Atividade 2</Text>
                                    </Button>
                                </View>

                                <View style={{ flex: 1, padding: 10, height: 150, }}>
                                    <ImageBackground
                                        source={require('./images/logo_turma.png')}
                                        style={{ flex: 1 }}
                                    ></ImageBackground>
                                    <Button style={{ padding: 0, borderRadius: 10, backgroundColor: 'white' }}
                                        mode="contained"
                                        onPress={() => navigation.navigate('AtividadeScreen')}>
                                        <Text style={{ color: '#081E06', fontWeight: 'bold' }}>Atividade 3</Text>
                                    </Button>
                                </View>

                                <View style={{ flex: 1, padding: 10, height: 150, }}>
                                    <ImageBackground
                                        source={require('./images/logo_turma.png')}
                                        style={{ flex: 1 }}
                                    ></ImageBackground>
                                    <Button style={{ padding: 0, borderRadius: 10, backgroundColor: 'white' }}
                                        mode="contained"
                                        onPress={() => navigation.navigate('AtividadeScreen')}>
                                        <Text style={{ color: '#081E06', fontWeight: 'bold' }}>Atividade 4</Text>
                                    </Button>
                                </View>

                            </ScrollView>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center', textAlign: 'center' }}>Notas Totais</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>

                            <DataTable style={{ backgroundColor: 'white', borderRadius: 10 }}>
                                <DataTable.Header>
                                    <DataTable.Title>Aluno</DataTable.Title>
                                    <DataTable.Title>Nota Total</DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 1</DataTable.Cell>
                                    <DataTable.Cell numeric>0,0</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 2</DataTable.Cell>
                                    <DataTable.Cell numeric>0,0</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 3</DataTable.Cell>
                                    <DataTable.Cell numeric>0,0</DataTable.Cell>
                                </DataTable.Row>

                            </DataTable>

                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Alunos que não Entregaram Atividades</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <DataTable style={{ backgroundColor: 'white', borderRadius: 10 }}>
                                <DataTable.Header>
                                    <DataTable.Title>Aluno</DataTable.Title>
                                    <DataTable.Title>Atividade</DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 1</DataTable.Cell>
                                    <DataTable.Title>Atividade 1</DataTable.Title>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 2</DataTable.Cell>
                                    <DataTable.Title>Atividade 2</DataTable.Title>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 3</DataTable.Cell>
                                    <DataTable.Title>Atividade 3</DataTable.Title>
                                </DataTable.Row>

                            </DataTable>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Alunos que Entregaram Atividades sem Arquivos Anexados</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <DataTable style={{ backgroundColor: 'white', borderRadius: 10 }}>
                                <DataTable.Header>
                                    <DataTable.Title>Aluno</DataTable.Title>
                                    <DataTable.Title>Atividade</DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 1</DataTable.Cell>
                                    <DataTable.Title>Atividade 1</DataTable.Title>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 2</DataTable.Cell>
                                    <DataTable.Title>Atividade 2</DataTable.Title>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 3</DataTable.Cell>
                                    <DataTable.Title>Atividade 3</DataTable.Title>
                                </DataTable.Row>

                            </DataTable>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Alunos que Entregaram Atividades com Atraso</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <DataTable style={{ backgroundColor: 'white', borderRadius: 10 }}>
                                <DataTable.Header>
                                    <DataTable.Title>Aluno</DataTable.Title>
                                    <DataTable.Title>Atividade</DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 1</DataTable.Cell>
                                    <DataTable.Title>Atividade 1</DataTable.Title>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 2</DataTable.Cell>
                                    <DataTable.Title>Atividade 2</DataTable.Title>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 3</DataTable.Cell>
                                    <DataTable.Title>Atividade 3</DataTable.Title>
                                </DataTable.Row>

                            </DataTable>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Alunos que Zeraram Atividades</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <DataTable style={{ backgroundColor: 'white', borderRadius: 10 }}>
                                <DataTable.Header>
                                    <DataTable.Title>Aluno</DataTable.Title>
                                    <DataTable.Title>Atividade</DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 1</DataTable.Cell>
                                    <DataTable.Title>Atividade 1</DataTable.Title>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 2</DataTable.Cell>
                                    <DataTable.Title>Atividade 2</DataTable.Title>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 3</DataTable.Cell>
                                    <DataTable.Title>Atividade 3</DataTable.Title>
                                </DataTable.Row>

                            </DataTable>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Alunos que Editaram Atividades após a Submissão</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <DataTable style={{ backgroundColor: 'white', borderRadius: 10 }}>
                                <DataTable.Header>
                                    <DataTable.Title>Aluno</DataTable.Title>
                                    <DataTable.Title>Atividade</DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 1</DataTable.Cell>
                                    <DataTable.Title>Atividade 2</DataTable.Title>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 2</DataTable.Cell>
                                    <DataTable.Title>Atividade 2</DataTable.Title>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 3</DataTable.Cell>
                                    <DataTable.Title>Atividade 3</DataTable.Title>
                                </DataTable.Row>

                            </DataTable>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Alunos com Notas Menores que a Média por Atividade</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <DataTable style={{ backgroundColor: 'white', borderRadius: 10 }}>
                                <DataTable.Header>
                                    <DataTable.Title>Aluno</DataTable.Title>
                                    <DataTable.Title>Atividade</DataTable.Title>
                                    <DataTable.Cell numeric>Nota</DataTable.Cell>
                                </DataTable.Header>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 1</DataTable.Cell>
                                    <DataTable.Title>Atividade 1</DataTable.Title>
                                    <DataTable.Cell numeric>0</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 2</DataTable.Cell>
                                    <DataTable.Title>Atividade 2</DataTable.Title>
                                    <DataTable.Cell numeric>0</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Aluno 3</DataTable.Cell>
                                    <DataTable.Title>Atividade 3</DataTable.Title>
                                    <DataTable.Cell numeric>0</DataTable.Cell>
                                </DataTable.Row>

                            </DataTable>
                        </View>
                    </View>

                </View>

            </View>
        </ScrollView >
    );
}