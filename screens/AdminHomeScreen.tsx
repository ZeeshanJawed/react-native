import React, { useState } from 'react';
import { View, Text, FlatList, Modal, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker'; // Import DateTime Picker
import ExportToPDF from '../components/ExportToPDF';
import Table from '../components/Table';
import Tablesecond from '../components/Tablesecond';
import Icon from 'react-native-vector-icons/FontAwesome';
import MonthWiseSummary from '../components/MonthWiseSummary';

function AdminHomeScreen({ navigation }: { navigation: any }) {
    const [searchUser, setSearchUser] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);


    // const users = [
    //     { id: '1', name: 'John Doe', amount: '100', date: '2024-10-10', month: 'October', status: 'Paid' },
    //     { id: '2', name: 'Jane Smith', amount: '150', date: '2024-09-25', month: 'September', status: 'Unpaid' },
    //     { id: '3', name: 'Mark Johnson', amount: '200', date: '2024-08-15', month: 'August', status: 'Paid' },
    //     { id: '4', name: 'Emily Davis', amount: '250', date: '2024-07-05', month: 'July', status: 'Paid' },
    //     { id: '5', name: 'Michael Brown', amount: '300', date: '2024-06-30', month: 'June', status: 'Unpaid' },
    // ];

    const users = [
        {
            id: '1', name: 'John Doe', plote: '101',
            January: 2000, February: 3000, March: 2500, April: 1800, May: 3200, June: 2900, July: 2100, August: 3300, September: 2200, October: 2400, November: 3100, December: 2800
        },
        {
            id: '2', name: 'Jane Smith', plote: '102',
            January: 2100, February: 3200, March: 2400, April: 2300, May: 3100, June: 2700, July: 2500, August: 3000, September: 2200, October: 2600, November: 2900, December: 3300
        },
        {
            id: '3', name: 'Mark Johnson', plote: '103',
            January: 2200, February: 3300, March: 2600, April: 2100, May: 3000, June: 2800, July: 2300, August: 3100, September: 2400, October: 2700, November: 3200, December: 2900
        },
        {
            id: '4', name: 'Emily Davis', plote: '104',
            January: 2300, February: 3400, March: 2700, April: 2200, May: 3100, June: 2900, July: 2400, August: 3200, September: 2500, October: 2800, November: 3300, December: 3000
        },
        {
            id: '5', name: 'Michael Brown', plote: '105',
            January: 2400, February: 3500, March: 2800, April: 2300, May: 3200, June: 3000, July: 2500, August: 3300, September: 2600, October: 2900, November: 3400, December: 3100
        },
        {
            id: '6', name: 'Sarah Wilson', plote: '106',
            January: 2500, February: 3600, March: 2900, April: 2400, May: 3300, June: 3100, July: 2600, August: 3400, September: 2700, October: 3000, November: 3500, December: 3200
        },
        {
            id: '7', name: 'David Miller', plote: '107',
            January: 2600, February: 3700, March: 3000, April: 2500, May: 3400, June: 3200, July: 2700, August: 3500, September: 2800, October: 3100, November: 3600, December: 3300
        },
        {
            id: '8', name: 'Laura Martinez', plote: '108',
            January: 2700, February: 3800, March: 3100, April: 2600, May: 3500, June: 3300, July: 2800, August: 3600, September: 2900, October: 3200, November: 3700, December: 3400
        },
        {
            id: '9', name: 'James Anderson', plote: '109',
            January: 2800, February: 3900, March: 3200, April: 2700, May: 3600, June: 3400, July: 2900, August: 3700, September: 3000, October: 3300, November: 3800, December: 3500
        },
        {
            id: '10', name: 'Linda Thompson', plote: '110',
            January: 2900, February: 4000, March: 3300, April: 2800, May: 3700, June: 3500, July: 3000, August: 3800, September: 3100, October: 3400, November: 3900, December: 3600
        },
        {
            id: '11', name: 'Robert Garcia', plote: '111',
            January: 3000, February: 4100, March: 3400, April: 2900, May: 3800, June: 3600, July: 3100, August: 3900, September: 3200, October: 3500, November: 4000, December: 3700
        },
        {
            id: '12', name: 'Jessica Harris', plote: '112',
            January: 3100, February: 4200, March: 3500, April: 3000, May: 3900, June: 3700, July: 3200, August: 4000, September: 3300, October: 3600, November: 4100, December: 3800
        },
        {
            id: '13', name: 'Richard Lee', plote: '113',
            January: 3200, February: 4300, March: 3600, April: 3100, May: 4000, June: 3800, July: 3300, August: 4100, September: 3400, October: 3700, November: 4200, December: 3900
        }
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
        const year = date.getFullYear(); // Get the year
        console.log(year, 'year___year');
        console.log(formattedDate, 'formattedDate___formattedDate');
        setSelectedYear(year)
        // setSelectedDate(formattedDate);
        hideDatePicker();
    };

    // Filter users by name and date
    // const filteredUsers = users.filter((user) => {
    //     const userNameMatches = user.name.toLowerCase().includes(searchUser.toLowerCase());
    //     const dateMatches = selectedDate === '' || user.date.includes(selectedDate);
    //     return userNameMatches && dateMatches;
    // });

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
                    <Text style={styles.dateButtonText}>{selectedYear || 'Pick a Year'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.downloadButton} >
                    <Text style={[styles.dateButtonText, { marginRight: 2 }]}>PDF</Text>
                    <Icon name="download" size={16} color="#ffffff" />

                    {/* <Text style={styles.dateButtonText}>{selectedYear || 'Pick a Year'}</Text> */}
                </TouchableOpacity>
            </View>

            {/* User List */}
            {/* <FlatList
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
            /> */}

            {/* <Table users={users} /> */}
            <Tablesecond users={users} years={selectedYear} />



            {/* Date Picker Modal */}
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <View style={{ paddingHorizontal: 20, borderTopWidth: 1, borderColor: 'lightgray' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}></Text>
            </View>
            {/* <ExportToPDF user={users} /> */}
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.button} activeOpacity={0.5}>
                <Text style={styles.buttonText}>Month Wise Total Summary</Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ borderBottomWidth: 1, width: '100%', borderColor: 'lightgray' }}>
                            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', paddingVertical: 10 }}>Month Wise Total Summary</Text>
                        </View>
                        <MonthWiseSummary user={users} />
                        <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
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
        marginRight: 9,

    },
    downloadButton: {
        height: 38,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: '#2296f3',
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
});

export default AdminHomeScreen;
