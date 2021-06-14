import { StyleSheet, Dimensions } from 'react-native'

const SignUpStyle = StyleSheet.create({
    input: {
        color: 'black',
        margin: 5,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#bdbdbd',
        marginVertical: 10,
      },
      inner: {
        borderRadius: 10,
        backgroundColor: 'rgba(120,120,120,0.1)',
        fontSize: 50,
        fontWeight: 'bold',
      },
      buttonContainer: {
        backgroundColor: '#bbdefb',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
      },
      container: {
          flex: 1,
          justifyContent: 'center'
      }
})

export default SignUpStyle