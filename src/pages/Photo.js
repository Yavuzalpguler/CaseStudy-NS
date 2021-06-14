import React, {useState} from 'react'
import { SafeAreaView, Text, View  } from 'react-native'
import UploadPhoto from '../components/UploadPhoto'
import styles from '../styles/PhotoStyle'

const Photo = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <UploadPhoto/>
        </SafeAreaView>
    )
}

export { Photo }