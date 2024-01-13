import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#010409',
        alignItems: 'center'
    },
    botao: {
        backgroundColor: '#d83b7d',
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: '90%',
    },
    textoBotao: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
    entrada: {
        borderWidth: 2,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        marginTop: 40,
        borderRadius: 8,
        height: 44,
        width: '90%',
    },
    imageArea: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: -75,
        backgroundColor: '#161b22',
    },
    imagem: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    fundo: {
        width: '100%',
        height: 156,
        backgroundColor: '#0d1117'
    },
    textoNome: {
        fontSize: 21,
        fontWeight: '600',
        color: '#e5e5e5',
        padding: 15
    },
    textoEmail: {
        fontSize: 15,
        color: '#717E84',
        marginTop: 5,
        paddingHorizontal: 30
    },
    seguidoresArea: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    infoArea: {
        width: '80%',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    seguidores: {
        margin: 20,
        alignItems: 'center',
    },
    info: {
        margin: 5,
        alignItems: 'center',
        flexDirection: 'row'
    },
    seguidoresNumero: {
        color: '#d83b7d',
        fontSize: 15,
    },
    seguidoresTexto: {
        color: '#95A8B2',
        fontSize: 13,
    },
    repositorios: {
        color: '#d83b7d',
        fontSize: 15,
        fontWeight: '400',
    }
});

export default styles;