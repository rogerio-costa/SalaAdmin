import React from 'react';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { Button, DataTable, TextInput } from 'react-native-paper';

export default function AlunoScreen({ route, navigation }) {

    const [text, setText] = React.useState('');
    const [text2, setText2] = React.useState('');

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: '#081E06' }}>
            <View style={{ flex: 1, width: '100%' }}>

                <View style={{ flex: 1, padding: 20, backgroundColor: '#0F360A', justifyContent: 'center', flexDirection: 'row' }}>

                    <View style={{ flex: 1, padding: 10, height: 150 }}>
                        <ImageBackground
                            source={require('./images/logo_aluno.png')}
                            style={{ flex: 1, borderRadius: 10 }}
                        ></ImageBackground>
                    </View>

                    <View style={{ flex: 2, justifyContent: 'center', padding: 10 }}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Aluno...</Text>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Turma..</Text>
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
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Notas por Atividade</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <DataTable style={{ backgroundColor: 'white', borderRadius: 10 }}>
                                <DataTable.Header>
                                    <DataTable.Title>Atividade</DataTable.Title>
                                    <DataTable.Title numeric>Nota</DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 1</DataTable.Cell>
                                    <DataTable.Cell numeric>0,0</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 2</DataTable.Cell>
                                    <DataTable.Cell numeric>0,0</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 3</DataTable.Cell>
                                    <DataTable.Cell numeric>0,0</DataTable.Cell>
                                </DataTable.Row>

                            </DataTable>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Atividades Não Entregues</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <DataTable style={{ backgroundColor: 'white', borderRadius: 10 }}>
                                <DataTable.Header>
                                    <DataTable.Title>Atividade</DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 1</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 2</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 3</DataTable.Cell>
                                </DataTable.Row>

                            </DataTable>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Atividades Entregues Sem Arquivos Anexados</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <DataTable style={{ backgroundColor: 'white', borderRadius: 10 }}>
                                <DataTable.Header>
                                    <DataTable.Title>Atividade</DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 1</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 2</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 3</DataTable.Cell>
                                </DataTable.Row>

                            </DataTable>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Atividades Entregues com Atraso</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <DataTable style={{ backgroundColor: 'white', borderRadius: 10 }}>
                                <DataTable.Header>
                                    <DataTable.Title>Atividade</DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 1</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 2</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 3</DataTable.Cell>
                                </DataTable.Row>

                            </DataTable>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Atividades Zeradas</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <DataTable style={{ backgroundColor: 'white', borderRadius: 10 }}>
                                <DataTable.Header>
                                    <DataTable.Title>Atividade</DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 1</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 2</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 3</DataTable.Cell>
                                </DataTable.Row>

                            </DataTable>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Atividades Editadas Após a Submissão</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <DataTable style={{ backgroundColor: 'white', borderRadius: 10 }}>
                                <DataTable.Header>
                                    <DataTable.Title>Atividade</DataTable.Title>
                                </DataTable.Header>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 1</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 2</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 3</DataTable.Cell>
                                </DataTable.Row>

                            </DataTable>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0F360A', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Atividades com Nota Menor que a Média</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <DataTable style={{ backgroundColor: 'white', borderRadius: 10 }}>
                                <DataTable.Header>
                                    <DataTable.Title>Atividade</DataTable.Title>
                                    <DataTable.Cell numeric>Média de notas</DataTable.Cell>
                                    <DataTable.Cell numeric>Nota</DataTable.Cell>
                                </DataTable.Header>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 1</DataTable.Cell>
                                    <DataTable.Cell numeric>0</DataTable.Cell>
                                    <DataTable.Cell numeric>0</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 2</DataTable.Cell>
                                    <DataTable.Cell numeric>0</DataTable.Cell>
                                    <DataTable.Cell numeric>0</DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Atividade 3</DataTable.Cell>
                                    <DataTable.Cell numeric>0</DataTable.Cell>
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