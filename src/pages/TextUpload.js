import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from '../styles/UploadTextStyle'
import firestore from '@react-native-firebase/firestore';



const TextUpload = (props) => {

    const [text, setText] = useState('')
    const [loading, setLoading] = useState(true);
    const [uploadedText, setUploadedText] = useState({"title": ""});
    
    const setUploadText = text => setText(text);

    const ref = firestore().collection('texts');

    async function addText() {
        await ref.doc('qjtYtdDMG13XGW97kobb').update({
            title: text,
        });
        setUploadText('');
    }
    useEffect(() => {
        return ref.doc('qjtYtdDMG13XGW97kobb').onSnapshot(documentSnapshot => {
            
            setUploadedText(documentSnapshot.data());  
            
            console.log(documentSnapshot.data())
            if (loading) {
                setLoading(false);
            }
        });
    }, [])

    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subView}>
                <Text style={styles.text}>{uploadedText.title}</Text>
            </View>
            <TextInput
                value={text}
                style={styles.textInput}
                placeholder="Put your text here"
                placeholderTextColor="black"
                onChangeText={setUploadText}
                autoCapitalize="none" />
            <TouchableOpacity style={styles.uploadButton} onPress={addText}>
                <Text style={styles.buttonText}>Update text</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export { TextUpload }