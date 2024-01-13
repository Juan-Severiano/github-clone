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
    }
});

export default styles;