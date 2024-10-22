import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

function LoginScreen({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <LinearGradient colors={['#CBC3E3', '#002681']} style={styles.container}>
            < View style={styles.formContainer} >
                <Text style={styles.title}>Login</Text>

                <View style={styles.inputWrapper}>
                    <Icon name="person" size={24} color="#aaa" />
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor="#aaa"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Icon name="lock" size={24} color="#aaa" />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholderTextColor="#aaa"
                    />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('AdminHome')} style={{ ...styles.button, marginTop: 10 }}>
                    <Text style={styles.buttonText}>Admin Login</Text>
                </TouchableOpacity>

            </View >

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
        </LinearGradient >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    formContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        elevation: 4,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 30,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        height: 50,
        color: '#333',
    },
    loginButton: {
        backgroundColor: '#29a745',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        marginTop: 20,
        elevation: 5,
    },
    registerText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
    },
    button: {
        backgroundColor: '#2296f3',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
