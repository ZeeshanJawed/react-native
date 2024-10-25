import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const SimpleTable = (data: any) => {
    const [selectedMonth, setSelectedMonth] = useState(months[new Date().getMonth()]);
    const { years, users } = data
    return (
        <View style={styles.container}>
            {/* Month Picker */}
            <View style={styles.pickerContainer}>
                <Text style={styles.pickerLabel}>Summary :  {years}</Text>
                <Picker
                    selectedValue={selectedMonth}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedMonth(itemValue)}
                >
                    {months.map((month) => (
                        <Picker.Item key={month} label={month} value={month} />
                    ))}
                </Picker>
            </View>

            {/* Table */}
            <ScrollView>
                <View>
                    {/* Header Row */}
                    <View style={styles.row}>
                        <Text style={styles.headerCell}>Name</Text>
                        <Text style={styles.headerCell}>Plot</Text>
                        <Text style={styles.headerCell}>{selectedMonth}</Text>
                    </View>

                    {/* Data Rows */}
                    {users.map((user: any) => (
                        <View key={user.id} style={styles.row}>
                            <Text style={styles.cell}>{user.name}</Text>
                            <Text style={styles.cell}>{user.plote}</Text>
                            <Text style={styles.cell}>{user[selectedMonth]}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    pickerLabel: {
        marginRight: -10,
        fontSize: 15,
        // fontWeight: 'bold',
        color: '#000'
    },
    picker: {
        height: 50,
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    headerCell: {
        flex: 1,
        padding: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    cell: {
        flex: 1,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        textAlign: 'center',
    },
});

export default SimpleTable;
