import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker'; // Import DateTime Picker
import ExportToPDF from '../components/ExportToPDF';

function AdminHomeScreen({ navigation }: { navigation: any }) {
    const [searchUser, setSearchUser] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const users = [
        { id: '1', name: 'John Doe', amount: '100', date: '2024-10-10', month: 'October', status: 'Paid' },
        { id: '2', name: 'Jane Smith', amount: '150', date: '2024-09-25', month: 'September', status: 'Unpaid' },
        { id: '3', name: 'Mark Johnson', amount: '200', date: '2024-08-15', month: 'August', status: 'Paid' },
        { id: '4', name: 'Emily Davis', amount: '250', date: '2024-07-05', month: 'July', status: 'Paid' },
        { id: '5', name: 'Michael Brown', amount: '300', date: '2024-06-30', month: 'June', status: 'Unpaid' },
    ];

    // Show Date Picker
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    // Hide Date Picker
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    // Handle Date Selection
    const handleConfirm = (date: Date) => {
        const formattedDate = date.toISOString().split('T')[0]; // Format the date to YYYY-MM-DD
        // setSelectedDate(formattedDate);
        hideDatePicker();
    };

    // Filter users by name and date
    const filteredUsers = users.filter((user) => {
        const userNameMatches = user.name.toLowerCase().includes(searchUser.toLowerCase());
        const dateMatches = selectedDate === '' || user.date.includes(selectedDate);
        return userNameMatches && dateMatches;
    });

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                {/* Search Input for User Name */}
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by user name"
                    value={searchUser}
                    onChangeText={(text) => setSearchUser(text)}
                />

                {/* Date Picker Button */}
                <TouchableOpacity style={styles.dateButton} onPress={showDatePicker}>
                    <Text style={styles.dateButtonText}>{selectedDate || 'Pick a Date'}</Text>
                </TouchableOpacity>
            </View>

            {/* User List */}
            <FlatList
                data={filteredUsers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.userCard}>
                        <View style={styles.detailsContainer}>
                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.dateText}>{item.month} {item.date}</Text>
                        </View>
                        <Text style={item.status === 'Paid' ? styles.paidStatus : styles.unpaidStatus}>
                            {item.status}
                        </Text>
                    </View>
                )}
            />

            {/* Date Picker Modal */}
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

            <ExportToPDF user={users} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f7f7f7',
    },
    searchContainer: {
        flexDirection: 'row', // Align search bar and date button in one line
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    searchInput: {
        flex: 1, // Takes remaining space
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#F7F7F7',
        marginRight: 10, // Space between input and button
    },
    dateButton: {
        height: 38,
        paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: '#2296f3',
        borderRadius: 5,
    },
    dateButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    userCard: {
        flexDirection: 'row',
        padding: 16,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        // shadowColor: '#000',
        // shadowOpacity: 0.2,
        // shadowRadius: 5,
        // elevation: 2,
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        marginBottom: 20,
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 1,
    },
    nameText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#2296f3',
    },
    dateText: {
        fontSize: 14,
        color: '#555',
    },
    paidStatus: {
        width: 75,
        backgroundColor: '#2296f3',
        color: '#fff',
        paddingVertical: 8,
        borderRadius: 5,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    unpaidStatus: {
        width: 75,
        backgroundColor: '#f44336',
        color: '#fff',
        paddingVertical: 8,
        borderRadius: 5,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default AdminHomeScreen;
