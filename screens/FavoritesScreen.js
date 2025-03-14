import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ProductCard from '../components/ProductCard';
import styles from '../styles';

const FavoritesScreen = ({ navigation, favorites, setFavorites }) => {
    const removeFavorite = (id) => {
        setFavorites(favorites.filter(product => product.id !== id));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Улюблені продукти</Text>
            <FlatList
                data={favorites}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <ProductCard
                        product={item}
                        isFavoriteScreen={true}
                        removeFavorite={removeFavorite}
                    />
                )}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Назад</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FavoritesScreen;
