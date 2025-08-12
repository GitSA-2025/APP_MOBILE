import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import AnimatedInput from '../../components/AnimatedInput';
export default function Register() {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [repetirSenha, setRepetirSenha] = useState('');


    const handleRegister = () => {
        navigation.navigate('Login');
    }
    return (
        <View style={styles.container}>
            <View style={styles.leftPainel}>
                <Text style={styles.title}>Olá, seja bem-vindo(a) novo usuário!</Text>
                <Text style={styles.subTitle}>Crie a sua conta nova no SA para continuar e utilizar as funcionalidades do APP!</Text>
            </View>
            <ScrollView>
                <View style={styles.rightPainel}>
                    <Text style={styles.titleLogin}>Crie a sua conta</Text>
                    <AnimatedInput
                        label="Nome"
                        iconName="account"
                        value={nome}
                        onChangeText={setNome}
                    />
                    <AnimatedInput
                        label="Email"
                        iconName="email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <AnimatedInput
                        label="Senha"
                        iconName="lock"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                    />
                    <AnimatedInput
                        label="Repita a senha"
                        iconName="lock"
                        value={repetirSenha}
                        onChangeText={setRepetirSenha}
                        secureTextEntry
                    />

                    <TouchableOpacity style={styles.btnAvancar}>
                        <Text style={styles.btnText}>Avançar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.btnLinkText, { alignSelf: 'center', marginTop: 16 }]} onPress={handleRegister}>
                        <Text style={styles.linkText}>Já possuo login.</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}