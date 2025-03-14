import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { AppContext } from '../context/AppContext';

const ProductCard = ({ product, isFavoriteScreen, removeFavorite }) => {
    const { favorites, addToFavorites, cart, addToCart } = useContext(AppContext);

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
                        <TouchableOpacity
                            onPress={() => addToFavorites(product)}
                            style={[
                                styles.smallButton,
                                favorites.some(item => item.id === product.id) ? styles.activeButton : null,
                            ]}
                        >
                            <Text style={styles.smallButtonText}>
                                {favorites.some(item => item.id === product.id) ? 'В улюблених' : 'Улюблене'}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => addToCart(product)}
                            style={[
                                styles.smallButton,
                                cart.some(item => item.id === product.id) ? styles.activeButton : null,
                            ]}
                        >
                            <Text style={styles.smallButtonText}>
                                {cart.some(item => item.id === product.id) ? 'У кошику' : 'Додати в кошик'}
                            </Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </View>
    );
};

export default ProductCard;
