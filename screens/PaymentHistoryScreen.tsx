import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Modal, Button } from 'react-native';

function PaymentHistoryScreen({ navigation }: { navigation: any }) {
    const payments = [
        { id: '1', amount: '100', date: '2024-10-10', month: 'October', image: 'https://i.pinimg.com/736x/b9/79/b4/b979b44de607f29f12a7e3655165f7f7.jpg' },
        { id: '2', amount: '150', date: '2024-09-25', month: 'September', image: 'https://i.pinimg.com/736x/b9/79/b4/b979b44de607f29f12a7e3655165f7f7.jpg' },
        { id: '3', amount: '200', date: '2024-08-15', month: 'August', image: 'https://i.pinimg.com/736x/b9/79/b4/b979b44de607f29f12a7e3655165f7f7.jpg' },
        { id: '4', amount: '250', date: '2024-07-05', month: 'July', image: 'https://i.pinimg.com/736x/b9/79/b4/b979b44de607f29f12a7e3655165f7f7.jpg' },
        { id: '5', amount: '300', date: '2024-06-30', month: 'June', image: 'https://i.pinimg.com/736x/b9/79/b4/b979b44de607f29f12a7e3655165f7f7.jpg' },
        { id: '6', amount: '100', date: '2024-10-10', month: 'October', image: 'https://i.pinimg.com/736x/b9/79/b4/b979b44de607f29f12a7e3655165f7f7.jpg' },
        { id: '7', amount: '150', date: '2024-09-25', month: 'September', image: 'https://i.pinimg.com/736x/b9/79/b4/b979b44de607f29f12a7e3655165f7f7.jpg' },
        { id: '8', amount: '200', date: '2024-08-15', month: 'August', image: 'https://i.pinimg.com/736x/b9/79/b4/b979b44de607f29f12a7e3655165f7f7.jpg' },
        { id: '9', amount: '250', date: '2024-07-05', month: 'July', image: 'https://i.pinimg.com/736x/b9/79/b4/b979b44de607f29f12a7e3655165f7f7.jpg' },
        { id: '10', amount: '300', date: '2024-06-30', month: 'June', image: 'https://i.pinimg.com/736x/b9/79/b4/b979b44de607f29f12a7e3655165f7f7.jpg' },
    ];


    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (image: string) => {
        setSelectedImage(image);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedImage(null);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={payments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.paymentCard}>
                        <TouchableOpacity onPress={() => openModal(item.image)}>
                            <Image source={{ uri: item.image }} style={styles.paymentImage} />
                        </TouchableOpacity>
                        <View style={styles.detailsContainer}>
                            <Text style={styles.amountText}>Rs {item.amount}=/</Text>
                            <Text style={styles.dateText}>{item.month} {item.date}</Text>
                        </View>
                        <TouchableOpacity style={styles.viewButton} onPress={() => openModal(item.image)}>
                            <Text style={styles.buttonText}>View</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {selectedImage && (
                            <Image source={{ uri: selectedImage }} style={styles.modalImage} />
                        )}
                        <Button title="Close" onPress={closeModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f7f7f7', // Lighter background
    },
    paymentCard: {
        flexDirection: 'row',
        padding: 16,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        // shadowColor: '#ffffff', // Set shadow color to black for better visibility
        // shadowOffset: {
        //     width: 4, // Centered shadow horizontally
        //     height: 4, // Slightly lower for a soft shadow effect
        // },
        // shadowOpacity: 0.2, // Reduced opacity for a softer shadow
        // shadowRadius: 5, // Increased radius for a blurred shadow effect
        // elevation: 2, // Adjusted elevation for Android shadow
        marginBottom: 20,
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
    },
    paymentImage: {
        width: 60,
        height: 60,
        borderRadius: 5, // Circular image
        borderColor: '#2296f3',
        borderWidth: 0.5,
    },
    amountText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#2296f3',
    },
    dateText: {
        fontSize: 14,
        color: '#555',
    },
    viewButton: {
        backgroundColor: '#2296f3',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '90%', // Adjust width for responsiveness
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        alignItems: 'center',
    },
    modalImage: {
        width: '100%',
        height: 400, // Fixed height for consistency
        marginBottom: 20,
    },
});


export default PaymentHistoryScreen;
