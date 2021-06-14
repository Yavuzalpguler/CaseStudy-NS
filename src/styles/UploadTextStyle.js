import { StyleSheet, Dimensions } from 'react-native'

const UploadTextStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#bbded6',
      },
      selectButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#8ac6d1',
        alignItems: 'center',
        justifyContent: 'center'
      },
      textInput: {
        color: 'white',
        margin: 5,
        width: Dimensions.get("window").width/1.45,
        height: Dimensions.get("window").height/20,
        borderRadius: 5,
        backgroundColor: '#bdbdbd',
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
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
      text: {
        color: "black",
        fontSize: 18,
        fontWeight: 'bold'
      },
      subView: {
        alignItems:'center',
        paddingTop: Dimensions.get("window").height/10,
        justifyContent: 'center',
        width: Dimensions.get("window").width/1.45,
      }
})

export default UploadTextStyle