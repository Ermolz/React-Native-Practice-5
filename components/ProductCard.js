import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';

const ProductCard = ({
                         product,
                         favorites,
                         setFavorites,
                         cart,
                         setCart,
                         isFavoriteScreen,
                         removeFavorite
                     }) => {
    const addToFavorites = () => {
        if (favorites && !favorites.find(item => item.id === product.id)) {
            setFavorites([...favorites, product]);
        }
    };

    const addToCart = () => {
        if (cart && !cart.find(item => item.id === product.id)) {
            setCart([...cart, product]);
        }
    };

    return (
        <View style={styles.card}>
            <Image source={{ uri: product.image }} style={styles.productImage} resizeMode="contain" />
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productPrice}>${product.price}</Text>
            <View style={styles.cardButtons}>
                {isFavoriteScreen ? (
                    <TouchableOpacity onPress={() => removeFavorite(product.id)} style={styles.smallButton}>
                        <Text style={styles.smallButtonText}>Видалити з улюблених</Text>
                    </TouchableOpacity>
                ) : (
                    <>
                        {setFavorites && (
                            <TouchableOpacity onPress={addToFavorites} style={styles.smallButton}>
                                <Text style={styles.smallButtonText}>Улюблене</Text>
                            </TouchableOpacity>
                        )}
                        {setCart && (
                            <TouchableOpacity onPress={addToCart} style={styles.smallButton}>
                                <Text style={styles.smallButtonText}>Додати в кошик</Text>
                            </TouchableOpacity>
                        )}
                    </>
                )}
            </View>
        </View>
    );
};

export default ProductCard;
