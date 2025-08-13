import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import AnimatedInput from '../../components/AnimatedInput';
import { useState } from 'react';

export default function EntryRegister() {
    const [nome, setNome] = useState('');
    const [tipoPessoal, setTipoPessoa] = useState('');
    const [cpf, setCpf] = useState('');
    const [data, setData] = useState('');
    const [hrEntrada, setHrEntrada] = useState('');
    const [placa, setPlaca] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.painel}>

                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Ionicons name="chevron-back-outline" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Registro de entrada</Text>
                    </View>


                    <View style={styles.fullPainel}>

                        <View style={styles.painelLeft}>
                            <AnimatedInput
                                label="Nome"
                                iconName="account"
                                value={nome}
                                onChangeText={setNome}
                            />
                            <AnimatedInput
                                label="Selecione o tipo de pessoa"
                                iconName="account-group"
                                value={tipoPessoal}
                                onChangeText={setTipoPessoa}
                            />
                            <AnimatedInput
                                label="CPF"
                                iconName="badge-account-horizontal"
                                value={cpf}
                                onChangeText={setCpf}
                            />
                            <AnimatedInput
                                label="Data"
                                iconName="calendar"
                                value={data}
                                onChangeText={setData}
                            />
                            <AnimatedInput
                                label="Horário da Entrada"
                                iconName="clock-time-four-outline"
                                value={hrEntrada}
                                onChangeText={setHrEntrada}
                            />
                            <AnimatedInput
                                label="Placa do Veículo"
                                iconName="car"
                                value={placa}
                                onChangeText={setPlaca}
                            />
                        </View>

                        <View style={styles.painelRight}>
                            <TouchableOpacity style={styles.photo}>
                                <Ionicons name="person-outline" size={80} color="#344650" />
                            </TouchableOpacity>
                            <Text style={styles.photoText}>Foto de identificação</Text>

                            <TouchableOpacity style={styles.btnSalvar}>
                                <Text style={styles.btnText}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
