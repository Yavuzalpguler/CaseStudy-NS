import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    SafeAreaView
} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from "../styles/SignUpStyle"
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = props => {
    const [usermail, setUserMail] = useState('');
    const [userpass, setPassword] = useState('');

    const setMail = text => setUserMail(text);
    const setPass = text => setPassword(text);

    const loginUser = async () => {
        try {
            auth()
                .signInWithEmailAndPassword(usermail, userpass)
                .then(() => {
                    AsyncStorage.setItem('@USER_ID', auth().currentUser.uid);
                    props.navigation.navigate('Tab');

                })
                .catch(error => {
                    Alert.alert('MyApp', error.code);
                    console.error(error);
                });
        } catch (error) {
            Alert.alert('MyApp', 'Unknown Error');
        }
    };

    const forgotPassword = async () => {
        try {
            auth()
            .sendPasswordResetEmail(usermail)
            .then(() => {
                console.log('Password reset email sent successfully')
                Alert.alert('Password reset email sent successfully')

            }).catch(error => {
                Alert.alert(error.code)
            })
        } catch (error) {
            Alert.alert('general', error.code)
        }
    };


    const registerUser = async () => {
        try {
            auth()
                .createUserWithEmailAndPassword(usermail, userpass)
                .then(() => {
                    console.log('User account created & signed in!');
                    props.navigation.navigate('Tab');
                    Alert.alert('MyApp', 'You are registered and logged in, enjoy.');
                })
                .catch(error => {
                    Alert.alert('MyApp', error.code);
                });
        } catch (error) {
            Alert.alert('MyApp', 'Unknown Error');
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.inner}>
                <View>
                    <Text> In case of forgetting your password, please type your e-mail only and tap Forgot my password button. </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="gray"
                        onChangeText={setMail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="gray"
                        onChangeText={setPass}
                        secureTextEntry
                    />
                </View>

                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={loginUser}>
                        <Text>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={registerUser}>
                        <Text>Register</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={forgotPassword}>
                        <Text>Forgot my password</Text>
                    </TouchableOpacity>


                </View>
            </View>
        </SafeAreaView>
    );
};

export { SignUp };