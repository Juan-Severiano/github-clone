import { useState } from 'react'
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import api from './../../services/api';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Search({ navigation, route }) {
    const [search, setSearch] = useState('')
    const [user, setUser] = useState({})

    async function getUser() {
        api.get(`/${search}`)
            .then(response => setUser(response.data))
    }

    function nav() {
        navigation.navigate('Home', { username: search })
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Pesquise o usuário aqui'
                placeholderTextColor='#fff'
                value={search}
                onChangeText={value => setSearch(value)}
                style={styles.searchInput}
            />
            <TouchableOpacity style={styles.button} onPress={getUser}>
                <Text style={styles.buttonText}>Pesquisar</Text>
            </TouchableOpacity>

            {
                user.name ?
                    <TouchableOpacity style={styles.userArea} onPress={nav}>
                        <View style={styles.imageArea}>
                            <Image source={{ uri: user.avatar_url }} style={styles.imagem} />
                        </View>
                        <View style={styles.userNameArea}>
                            <Text style={styles.buttonText}>{user.login}</Text>
                            <Text style={styles.username}>{user.name}</Text>
                        </View>
                        <Text style={styles.bio}>{user.bio}</Text>
                        <View style={styles.infoArea}>
                            <View style={styles.info}>
                                <Ionicons name='business-outline' size={20} style={{ marginRight: 10 }} color='#c0c0c0' />
                                <Text style={styles.infoText}>{user.company}</Text>
                            </View>
                            <View style={styles.info}>
                                <Ionicons name='location-outline' size={20} style={{ marginRight: 10 }} color='#c0c0c0' />
                                <Text style={styles.infoText}>{user.location}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    : null
            }
        </View>
    )
}