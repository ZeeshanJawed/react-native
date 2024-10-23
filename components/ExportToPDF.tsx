import React from 'react';
import { View, Text, Button, Alert, PermissionsAndroid, Platform } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { useState } from 'react';


const ExportToPDF = (user: any) => {
    let users = user.user
    const [pdfPath, setPdfPath] = useState(null);

    const checkAndroidPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            return false;
        }
    };

    const generatePDF = async () => {
        if (Platform.OS === 'android' && !(await checkAndroidPermission())) {
            Alert.alert('Permission Denied', 'Storage permission is required to save PDF');
            return;
        }

        let htmlContent = `
      <h1>User Information</h1>
      <table border="1" style="width: 100%; text-align: left;">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Month</th>
          <th>Status</th>
        </tr>
        ${users.map((user: any) => `
        <tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.amount}</td>
          <td>${user.date}</td>
          <td>${user.month}</td>
          <td>${user.status}</td>
        </tr>`).join('')}
      </table>
    `;

        try {
            const options = {
                html: htmlContent,
                fileName: 'user_information',
                directory: 'Documents',
            };

            const file: any = await RNHTMLtoPDF.convert(options);
            setPdfPath(file.filePath);
            Alert.alert('PDF Created', `PDF file has been saved to ${file.filePath}`);
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to create PDF');
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Click the button to generate and download the PDF</Text>
            <Button title="Download PDF" onPress={generatePDF} />
            {pdfPath && <Text>PDF Path: {pdfPath}</Text>}
        </View>
    );
};

export default ExportToPDF;
