import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AnimatedInput from '../../components/AnimatedInput';
import { useState } from 'react';

export default function DeliveryRegister() {
    const [nome, setNome] = useState('');
    const [fornecedor, setFornecedor] = useState('');
    const [telefone, setTelefone] = useState('');
    const [hrEntrada, setHrEntrada] = useState('');
    const [placa, setPlaca] = useState('');
    const [nNota, setNNota] = useState('');

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
                        <Text style={styles.headerTitle}>Registro de entrega</Text>
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
                                label="Placa do Veículo"
                                iconName="car"
                                value={placa}
                                onChangeText={setPlaca}
                            />
                            <AnimatedInput
                                label="Horário da Entrada"
                                iconName="clock-time-four-outline"
                                value={hrEntrada}
                                onChangeText={setHrEntrada}
                            />
                            <AnimatedInput
                                label="Fornecedor"
                                iconName="store"
                                value={fornecedor}
                                onChangeText={setFornecedor}
                            />
                            <AnimatedInput
                                label="Telefone"
                                iconName="phone"
                                value={telefone}
                                onChangeText={setTelefone}
                            />
                            <AnimatedInput
                                label="Nº da nota"
                                iconName="file-document-outline"
                                value={nNota}
                                onChangeText={setNNota}
                            />
                            
                        </View>

                        <View style={styles.painelRight}>
                            <TouchableOpacity style={styles.photo}>
                                <MaterialCommunityIcons name="truck-minus" size={80} color="#344650" />
                            </TouchableOpacity>
                            <Text style={styles.photoText}>Foto da placa do veículo</Text>

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
