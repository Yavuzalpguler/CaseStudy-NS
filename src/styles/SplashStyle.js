import { StyleSheet, Dimensions } from 'react-native'

const UploadTextStyle = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'contain',
      },
      inner: {
        width: '90%',
        borderRadius: 10,
        height: '80%',
        backgroundColor: 'rgba(120,120,120,0.1)',
        fontSize: 50,
        fontWeight: 'bold',
      },
})

export default UploadTextStyle