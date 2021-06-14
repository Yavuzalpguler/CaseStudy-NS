import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from '../styles/CalculatorStyle'
import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';



const Calculator = (props) => {

    const [firstNumber, setFirstNumber] = useState('')
    const [secondNumber, setSecondNumber] = useState('')
    const [operator, setOperator] = useState('')
    const [result, setResult] = useState('')
    const setFirst = text => setFirstNumber(text);
    const setSecond = text => setSecondNumber(text);
  
    const fetchResult = async () => {
        await axios.get(`https://api.mathjs.org/v4/?expr=${firstNumber}${operator}${secondNumber}`)
                    .then((res) =>
                        setResult(res.data)
                    ).catch((err) => console.log(err))
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subView}>
                <Text style={styles.text}>{result}</Text>
            </View>
            <TextInput

                style={styles.textInput}
                placeholder="First number"
                placeholderTextColor="black"
                onChangeText={setFirst}
                autoCapitalize="none" />

            <TextInput

                style={styles.textInput}
                placeholder="Second Number"
                placeholderTextColor="black"
                onChangeText={setSecond}
                autoCapitalize="none" />


            <RNPickerSelect
                onValueChange={(value) => setOperator(value)}
                useNativeAndroidPickerStyle = {false}
                style={{ width: 40, backgroundColor: 'red' }}
                
                items={[
                    { label: 'Addition', value: '%2B' },
                    { label: 'Subtraction', value: '%2D' },
                    { label: 'Multiplication', value: '%2A' },
                ]}
            />
            <TouchableOpacity style={styles.uploadButton} onPress={fetchResult}>
                <Text style={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export { Calculator }