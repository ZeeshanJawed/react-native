import React, { useState } from 'react';
import { View, Alert, TextInput, Button, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the Icon
import { launchImageLibrary } from 'react-native-image-picker';
import MultiSelectDropdown from './../components/MultiSelectDropdown';  // Import the dropdown component

function MakePaymentScreen({ navigation }: { navigation: any }) {
    const [amount, setAmount] = useState('');
    const [image, setImage] = useState<any>(null);
    const [comments, setComments] = useState('');

    const handleSelectImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response: any) => {
            if (!response.didCancel && response.assets && response.assets.length > 0) {
                setImage(response.assets[0].uri); // Set the selected image URI
            }
        });
    };

    const handleDeleteImage = () => {
        setImage(null); // Clear the selected image
    };

    const handleSubmit = () => {
        if (!amount || !image) {
            Alert.alert('', 'Please fill in all required fields.');
            console.log('Please fill in all required fields.');
        } else {
            // Perform submit action
            console.log({ amount, image, comments });
        }
    };

    return (
        <View style={styles.container}>

            {image ? (
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: image }}
                        style={styles.selectedImage}
                    />
                    <TouchableOpacity style={styles.deleteIcon} onPress={handleDeleteImage}>
                        <Icon name="delete" size={30} color="#ff0000" />
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity onPress={handleSelectImage}>
                    <View style={styles.imagePicker}>
                        <Text>Attach Image</Text>
                    </View>
                </TouchableOpacity>
            )}


            {/* Multi-Select Dropdown */}
            <View style={{ minHeight: 85 }}>
                <MultiSelectDropdown />
            </View>


            {/* Amount Input */}
            <TextInput
                style={styles.input}
                placeholder="Amount"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
            />

            {/* Comments (Optional) */}
            <TextInput
                style={styles.textArea}
                placeholder="Comments (Optional)"
                value={comments}
                onChangeText={setComments}
                multiline
            />

            {/* Submit Button */}
            <View style={{ flex: 1 }}>
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
    },
    input: {
        height: 50,
        // borderColor: '#ccc',
        // borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#F7F7F7',
    },
    imagePicker: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: '#ccc',
        // borderWidth: 1,
        backgroundColor: '#F7F7F7',
        // marginBottom: 20,
        borderRadius: 5,
    },
    textArea: {
        height: 100,
        // borderColor: '#ccc',
        // borderWidth: 1,
        backgroundColor: '#F7F7F7',
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 5,
        textAlignVertical: 'top',
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
    imageContainer: {
        position: 'relative',
        marginBottom: 20,
    },
    selectedImage: {
        width: '100%',
        height: 230, // Adjust the height as per your requirement
        borderRadius: 5,
    },
    deleteIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background
        borderRadius: 15,
        padding: 5,
    },
});

export default MakePaymentScreen;
