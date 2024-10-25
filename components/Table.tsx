import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

// List of months for headers
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const SimpleTable = (data: any) => {
    const { users } = data
    console.log(users, 'users')
    return (
        <ScrollView horizontal>
            <View>
                {/* Header Row */}
                <View style={styles.row}>
                    <Text style={styles.headerCell}>Name</Text>
                    <Text style={styles.headerCell}>Plot</Text>
                    {months.map((month) => (
                        <Text key={month} style={styles.headerCell}>{month}</Text>
                    ))}
                </View>

                {/* Data Rows */}
                {users.map((user: any) => (
                    <View key={user.id} style={styles.row}>
                        <Text style={styles.cell}>{user.name.length < 10 ? user.name : user.name.slice(0, 8) + '..'}</Text>
                        <Text style={styles.cell}>{user.plote}</Text>
                        {months.map((month) => (
                            <Text key={month} style={styles.cell}>{user[month]}</Text>
                        ))}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    headerCell: {
        width: 92,
        padding: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    cell: {
        width: 92,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        textAlign: 'center',
    },
});

export default SimpleTable;
