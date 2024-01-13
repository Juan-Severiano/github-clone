import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, TextInput, ImageBackground, FlatList, Linking } from 'react-native';
import styles from './styles';
import api from '../../services/api';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RepositoryList({ navigation }) {
    const [repo, setRepo] = useState({});

    useEffect(() => {
        api.get('Juan-Severiano/repos')
            .then(
                response => setRepo(response.data)
            )
    }, [])

    function defineLanguageColor(language) {
        switch (String(language).toLowerCase()) {
            case 'html':
                return '#e34c26'
            case 'typescript':
                return '#3178c6'
            case 'vue':
                return '#41b883'
            case 'dart':
                return '#00b4ab'
            case 'css':
                return '#563d7c'
            case 'python':
                return '#3572a5'
            case 'ejs':
                return '#a91e50'
            case 'java':
                return '#b07219'
            case 'c++':
                return '#f34b7b'
            case 'javascript':
                return '#ff0'
            default:
                return '#30363d'
        }
    }

    return (
        <FlatList
            data={repo}
            contentContainerStyle={styles.container}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => (
                <View style={styles.repositoryView}>
                    <View style={styles.repositoryHeader}>
                        <Image source={{ uri: item.owner.avatar_url }} style={styles.imageCover} />
                        <Text style={styles.text}>{item.owner.login}</Text>
                        <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => Linking.openURL(`${item.html_url}`)}>
                            <Ionicons name='logo-github' size={20} color='#fff' />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.projectName}>{item.name}</Text>
                    <Text style={styles.description}>{item.description || item.name}</Text>
                    <View style={styles.langArea}>
                        <Ionicons name='ellipse-sharp' size={20} color={defineLanguageColor(item.language)} style={{ marginRight: 5 }} />
                        <Text style={styles.language}>{item.language}</Text>
                    </View>
                </View>
            )}
        />
    )
}
