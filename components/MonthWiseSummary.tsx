import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const users: any = [
    // Your user data here...
];

// Function to calculate the month-wise total summary
const calculateMonthWiseTotal = (users: any) => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Initialize an object to store totals for each month
    const monthTotals = months.reduce((acc: any, month) => {
        acc[month] = 0;
        return acc;
    }, {});

    // Sum values for each month
    users.forEach((user: any) => {
        months.forEach(month => {
            monthTotals[month] += user[month];
        });
    });

    return monthTotals;
};

const MonthSummary = (user: any) => {
    let users = user.user

    const monthTotals = calculateMonthWiseTotal(users);
    const firstSixMonths = ['January', 'February', 'March', 'April', 'May', 'June'];
    const lastSixMonths = ['July', 'August', 'September', 'October', 'November', 'December'];

    return (
        <View style={styles.container}>
            {/* First view with the first six months */}
            {/* 
            <View style={{ backgroundColor: 'red', flex: 1, padding: 5 }}>

            </View>
            <View style={{ backgroundColor: 'green', flex: 1, padding: 5 }}>

            </View> */}
            <View style={styles.row}>
                {firstSixMonths.map(month => (
                    <View key={month} style={styles.monthBox}>
                        <Text style={styles.monthText}>{month}</Text>
                        <Text style={styles.totalText}>{monthTotals[month]}</Text>
                    </View>
                ))}
            </View>

            {/* Second view with the last six months */}
            <View style={styles.row}>
                {lastSixMonths.map(month => (
                    <View key={month} style={styles.monthBox}>
                        <Text style={styles.monthText}>{month}</Text>
                        <Text style={styles.totalText}>{monthTotals[month]}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: 200,
        width: '100%',
        paddingVertical: 10,
        // borderWidth: 2,
        display: 'flex',
        flexDirection: 'row'

        // padding: 20,
        // flexDirection: 'row'
        // display: 'flex',
        // flexDirection: 'row'
    },
    row: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,
        paddingHorizontal: 20,
        // borderWidth: 1,
        width: '49%',  // Adjust the width based on how you want it displayed

    },
    monthBox: {
        // width: '45%',  // Adjust the width based on how you want it displayed
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 2,
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: '#ccc',
        borderRadius: 5,
    },
    monthText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    totalText: {
        fontSize: 14,
        marginTop: 5,
        marginLeft: 5
    },
});

export default MonthSummary;
