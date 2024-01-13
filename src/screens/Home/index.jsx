import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from './styles';
import api from '../../services/api';

export default function Home({ navigation }) {
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        api.get('/Juan-Severiano')
            .then(
                response => setUsuario(response.data)
            )
    }, [])

    return (
        <ScrollView style={{ backgroundColor: '#010409' }}>
            <View style={styles.container}>
                <View style={styles.fundo} />
                <View style={styles.imageArea}>
                    <Image source={{ uri: usuario.avatar_url }} style={styles.imagem} />
                </View>
                <Text style={styles.textoNome}>{usuario.name}</Text>
                <Text style={styles.textoEmail}>{usuario.bio ? usuario.bio : 'Usuário sem email'}</Text>
                <View style={styles.seguidoresArea}>
                    <View style={styles.seguidores}>
                        <Text style={styles.seguidoresNumero}>{usuario.followers}</Text>
                        <Text style={styles.seguidoresTexto}>Seguidores</Text>
                    </View>
                    <View style={styles.seguidores}>
                        <Text style={styles.seguidoresNumero}>{usuario.following}</Text>
                        <Text style={styles.seguidoresTexto}>Seguindo</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('RepositoryList')}>
                        <View style={styles.seguidores}>
                            <Text style={styles.seguidoresNumero}>{usuario.public_repos}</Text>
                            <Text style={styles.seguidoresTexto}>Repositórios</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.infoArea}>
                    <View style={styles.info}>
                        <Ionicons name='business-outline' size={20} color='#343a40' />
                        <Text style={styles.seguidoresTexto}>{usuario.company}</Text>
                    </View>
                    <View style={styles.info}>
                        <Ionicons name='location-outline' size={20} color='#343a40' />
                        <Text style={styles.seguidoresTexto}>{usuario.location}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
