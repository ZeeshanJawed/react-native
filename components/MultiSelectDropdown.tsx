import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const monthOptions = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' },
];

const MultiSelectDropdown = () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleSelect = (value: string) => {
        setSelectedItems((prevSelectedItems) => {
            if (prevSelectedItems.includes(value)) {
                return prevSelectedItems.filter((item) => item !== value); // Remove the item if already selected
            }
            return [...prevSelectedItems, value]; // Add the item if not already selected
        });
    };

    return (
        <View style={styles.container}>
            {/* Dropdown Trigger */}
            <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setModalVisible(true)}
            >
                <Text>
                    {selectedItems.length > 0 ? selectedItems.join(', ') : 'Select Month(s)'}
                </Text>
                <Icon name="arrow-drop-down" size={24} color="#333" />
            </TouchableOpacity>

            {/* Modal for Multi-Select */}
            <Modal visible={isModalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <ScrollView>
                            {monthOptions.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.option}
                                    onPress={() => toggleSelect(item.value)}
                                >
                                    <Icon
                                        name={selectedItems.includes(item.value) ? 'check-box' : 'check-box-outline-blank'}
                                        size={24}
                                        color={selectedItems.includes(item.value) ? '#29a745' : '#ccc'}
                                    />
                                    <Text style={styles.optionLabel}>{item.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>

                        {/* Close Button */}
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 20,
    },
    dropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#ccc',
        backgroundColor: '#F7F7F7',
        padding: 12,
        borderRadius: 5,
    },
    dropdownText: {
        fontSize: 16,
        color: '#333',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        maxHeight: 400,
        borderRadius: 10,
        padding: 20,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    optionLabel: {
        fontSize: 16,
        marginLeft: 10,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#29a745',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default MultiSelectDropdown;
