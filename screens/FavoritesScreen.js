import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ProductCard from '../components/ProductCard';
import styles from '../styles';
import { AppContext } from '../context/AppContext';

const FavoritesScreen = ({ navigation }) => {
    const { favorites, removeFromFavorites } = useContext(AppContext);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Улюблені продукти</Text>

            {favorites.length === 0 ? (
                <Text style={styles.emptyText}>У вас немає улюблених товарів</Text>
            ) : (
                <FlatList
                    data={favorites}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <ProductCard
                            product={item}
                            isFavoriteScreen={true}
                            removeFavorite={removeFromFavorites}
                        />
                    )}
                />
            )}

            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Назад</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FavoritesScreen;
