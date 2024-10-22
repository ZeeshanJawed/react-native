import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function HomeScreen({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MakePayment')}>
                    <Text style={{ ...styles.buttonText, color: '#6a6b6d' }}>Make Payment</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.button, backgroundColor: '#2296f3' }} onPress={() => navigation.navigate('PaymentHistory')}>
                    <Text style={styles.buttonText}>Payment History</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        padding: 16,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#e4e5eb',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
        width: '80%',
        alignItems: 'center',
    },

    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
