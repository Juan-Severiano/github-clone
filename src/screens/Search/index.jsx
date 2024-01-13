import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'

export default function Search({ navigation }) {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Pesquise o usuário aqui'
                placeholderTextColor='#fff'
                style={styles.searchInput}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Pesquisar</Text>
            </TouchableOpacity>
        </View>
    )
}