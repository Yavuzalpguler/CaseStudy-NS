import { StyleSheet, Dimensions } from 'react-native'

const UploadPhotoStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#bbded6'
      },
      selectButton: {
        marginTop: 20,
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#8ac6d1',
        alignItems: 'center',
        justifyContent: 'center'
      },
      uploadButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#ffb6b9',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
      },
      buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
      },
      imageContainer: {
        marginTop: 30,
        marginBottom: 50,
        alignItems: 'center'
      },
      progressBarContainer: {
        marginTop: 20
      },
      imageBox: {
        width: 300,
        height: 300
      }
})

export default UploadPhotoStyle