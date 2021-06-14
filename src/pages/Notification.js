import React from 'react'
import { SafeAreaView, TouchableOpacity, Text } from 'react-native'
import styles from '../styles/NotificationStyle'
import { LocalNotification } from '../services/LocalPushController'
import auth from '@react-native-firebase/auth';









const Notification = (props) => {
    const sendNotification = () => {
        LocalNotification()
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={sendNotification}
            >
                <Text style={styles.text}>Tap to send notification</Text>
            </TouchableOpacity>


          
                
        </SafeAreaView>
    )
}

export { Notification }