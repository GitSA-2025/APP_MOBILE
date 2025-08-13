import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import styles from './styles';


const Sidebar = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const navigation = useNavigation();

    const handlerHome = () => {
        navigation.navigate('Home');
    };

    const handleDeliveryRegister = () => {
        navigation.navigate('DeliveryRegisterScreen');
    };

    return (
        <View style={styles.sidebar}>
            <View style={styles.sidebarUser}>
                <View style={styles.userAvatar} />
                <View>
                    <Text style={styles.userName}>Nome do usuário</Text>
                    <Text style={styles.userRole}>Cargo de atuação</Text>
                </View>
            </View>

            <View style={styles.sidebarDivider} />

            <ScrollView style={styles.sidebarMenu} contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
                <View>
                    <TouchableOpacity style={styles.menuItem} onPress={handlerHome}>
                        <MaterialCommunityIcons name="clock-outline" size={24} color="white" />
                        <Text style={styles.menuItemText}>Registros</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={handleDeliveryRegister}>
                        <MaterialCommunityIcons name="truck-delivery-outline" size={24} color="white" />
                        <Text style={styles.menuItemText}>Fila de entregas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <MaterialCommunityIcons name="file-document-outline" size={24} color="white" />
                        <Text style={styles.menuItemText}>Relatórios</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <MaterialCommunityIcons name="qrcode-scan" size={24} color="white" />
                        <Text style={styles.menuItemText}>Aprovação{'\n'}QrCode</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.menuItem}>
                        <FontAwesome5 name="user-edit" size={22} color="white" />
                        <Text style={styles.menuItemText}>Editar conta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <Feather name="settings" size={24} color="white" />
                        <Text style={styles.menuItemText}>Configurações</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
                        <Text style={styles.logoutButtonText}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const Header = ({ onMenuPress }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onMenuPress} style={styles.menuButton} activeOpacity={0.7}>
                <Feather name="menu" size={28} color="white" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Sistema de Acesso</Text>

            <View style={styles.searchBox}>
                <Feather name="search" size={20} color="#2B3D52" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar"
                    placeholderTextColor="#2B3D52"
                    underlineColorAndroid="transparent"
                />
            </View>

            <View style={styles.logoContainer}>
                <Text style={styles.kozzyText}>KOZZY</Text>
                <Text style={styles.distribuidoraText}>Distribuidora</Text>
            </View>
        </View>
    );
};


export default function QrCodeApproval() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigation = useNavigation();

    const handlerDeliveryRegister = () => {
        navigation.navigate('DeliveryRegister');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <View style={{ flex: 1, marginLeft: sidebarOpen ? 230 : 0 }}>
                <Header onMenuPress={() => setSidebarOpen(!sidebarOpen)} />

                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.registrosHeader}>
                        <Text style={styles.registrosTitle}>Aprovação de geração de QRCode</Text>
                    </View>

                    <View style={styles.tableContainer}>
                        <View style={styles.tableHeaderRow}>
                            <Text style={[styles.tableHeaderCell, styles.cellDate]}>Data</Text>
                            <Text style={[styles.tableHeaderCell, styles.cellName]}>Nome</Text>
                            <Text style={[styles.tableHeaderCell, styles.cellStatus]}>Status</Text>
                            <Text style={[styles.tableHeaderCell, styles.cellTime]}>H. entrada</Text>
                            <Text style={[styles.tableHeaderCell, styles.cellTime]}>Aprovar ou não aprovar</Text>
                            <Text style={[styles.tableHeaderCell, styles.cellEdit]}></Text>
                        </View>

                        <View style={styles.tableRow}>
                            <Text style={[styles.tableCell, styles.cellDate]}>16/03/2026</Text>
                            <Text style={[styles.tableCell, styles.cellName, { color: 'green' }]}>José Silva</Text>
                            <View style={[styles.statusBadge, styles.statusLiberado]}>
                                <Feather name="check" size={14} color="white" />
                                <Text style={styles.statusText}>Liberado</Text>
                            </View>
                            <Text style={[styles.tableCell, styles.cellTime]}>08:10:27</Text>
                            <Text style={[styles.tableCell, styles.cellTime]}>08:10:27</Text>
                            <TouchableOpacity style={styles.editButton}>
                                <Feather name="edit-2" size={14} color="white" />
                                <Text style={styles.editButtonText}>Editar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}


