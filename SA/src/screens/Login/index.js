import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import AnimatedInput from '../../components/AnimatedInput';

export default function Login() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleRegister = () => {
        navigation.navigate('Register');
    }

    const handleAvancar = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftPainel}>
                <Text style={styles.title}>Olá, seja bem-vindo novamente!</Text>
                <Text style={styles.subTitle}>Conecte-se à sua conta para continuar e utilizar as funcionalidades do APP!</Text>
            </View>
            <View style={styles.rightPainel}>
                <Text style={styles.titleLogin}>Faça login no SA</Text>
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
                <TouchableOpacity style={styles.btnLinkText}>
                    <Text style={styles.linkText}>Esqueci a senha.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnAvancar} onPress={handleAvancar}>
                    <Text style={styles.btnText}>Avançar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btnLinkText, {alignSelf: 'center', marginTop: 16}]} onPress={handleRegister}>
                    <Text style={styles.linkText}>Não possuo login.</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}