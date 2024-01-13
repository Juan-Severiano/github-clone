import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#010409',
        paddingHorizontal: 30
    },
    searchInput: {
        marginTop: 20,
        height: 50,
        borderWidth: 2,
        borderColor: '#30363d',
        borderRadius: 20,
        paddingHorizontal: 20,
        color: '#fff',

    },
    button: {
        backgroundColor: '#d83b7d',
        borderRadius: 20,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText: {
        fontWeight: '700',
        color: '#fff',
        fontSize: 18
    },
    imageArea: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
    },
    imagem: {
        width: 50,
        height: 50,
        borderRadius: 60,
    },
    infoArea: {
        width: '80%',
        flexDirection: 'row',
        marginTop: 10
    },
    info: {
        margin: 5,
        alignItems: 'center',
        flexDirection: 'row'
    },
    infoText: {
        color: '#c0c0c0'
    },
    userArea: {
        backgroundColor: '#0d1117',
        marginTop: 30,
        padding: 20,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#30363d',
    },
    userNameArea: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    username: {
        color: '#e0e0e0',
        marginLeft: 20,
        fontSize: 16
    },
    bio: {
        color: '#f0f0f0',
    }
});

export default styles;