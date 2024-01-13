import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#010409',
        paddingHorizontal: 30
    },
    repositoryView: {
        width: '100%',
        padding: 20,
        backgroundColor: '#0d1117',
        marginVertical: 5,
        borderRadius: 20
    },
    text: {
        color: '#fff'
    },
    imageCover: {
        width: 20,
        height: 20,
        borderRadius: 60,
        marginRight: 10
    },
    repositoryHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    projectName: {
        fontSize: 24,
        color: '#fff',
        fontWeight: '600',
        marginVertical: 5
    },
    description: {
        color: '#e0e0e0',
    },
    language: {
        color: '#fff',
        fontWeight: '600'
    },
    langArea: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default styles;