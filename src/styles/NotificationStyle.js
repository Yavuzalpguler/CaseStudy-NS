import { StyleSheet, Dimensions } from 'react-native'

const NotificationStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bbded6'
    },
    buttonContainer: {
        backgroundColor: 'red',
        width: Dimensions.get("window").width/2,
        height: Dimensions.get("window").width/2,
        borderRadius: Dimensions.get("window").width/4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    },
    signOutButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#ffb6b9',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
      },

})

export default NotificationStyle