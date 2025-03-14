import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { AppContext } from '../context/AppContext';

const CartScreen = ({ navigation }) => {
    const { cart, removeFromCart } = useContext(AppContext);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Кошик</Text>

            {cart.length === 0 ? (
                <Text style={styles.emptyText}>Кошик порожній</Text>
            ) : (
                <FlatList
                    data={cart}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.cartItem}>
                            <Text style={styles.productTitle}>{item.title}</Text>
                            <Text style={styles.productPrice}>${item.price}</Text>
                            <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.smallButton}>
                                <Text style={styles.smallButtonText}>Видалити</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}

            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Назад</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CartScreen;
