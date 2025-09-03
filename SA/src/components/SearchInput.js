import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Modal, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const SearchInput = () => {

    const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

    const handleFilterPress = () => {
        setIsFilterModalVisible(true);
    }

    const closeFilter = () => {
        setIsFilterModalVisible(false);
    }


    return (
        <View>
            <View style={styles.searchBox}>
                <Feather name="search" size={20} color="#2B3D52" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar"
                    placeholderTextColor="#2B3D52"
                    underlineColorAndroid="transparent"
                />
                <TouchableOpacity onPress={handleFilterPress}>
                    <Feather name="filter" size={20} color="#2B3D52" />
                </TouchableOpacity>
            </View>

            <Modal
                visible={isFilterModalVisible}
                animationType='slide'
                transparent={true}
                onRequestClose={closeFilter}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Opções de Filtro</Text>
                        <Text>Checkbox: Preço</Text>
                        <Text>Slider: Distância</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={closeFilter}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
};

const styles = StyleSheet.create({
    searchBox: {
        backgroundColor: '#fff',
        borderRadius: 4,
        flexDirection: 'row',
        paddingHorizontal: 8,
        alignItems: 'center',
        height: 32,
        marginRight: 12,
    },

    searchInput: {
        marginLeft: 6,
        fontSize: 16,
        color: '#2B3D52',
        flex: 1,
        height: 32,
    },
    modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 10, // Sombra para Android
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
})

export default SearchInput;