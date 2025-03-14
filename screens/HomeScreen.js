import React, {useContext, useEffect, useState} from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../utils/api';
import styles from '../styles';

import { AppContext } from '../context/AppContext';

const HomeScreen = ({ navigation }) => {
    const { favorites, setFavorites, cart, setCart } = useContext(AppContext);
    const [products, setProducts] = useState([]);
    const [nameFilter, setNameFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');

    useEffect(() => {
        fetchProducts().then(setProducts);
    }, []);

    const filteredProducts = products.filter(product => {
        const matchesName = product.title.toLowerCase().includes(nameFilter.toLowerCase());
        const matchesPrice = priceFilter ? product.price <= parseFloat(priceFilter) : true;
        return matchesName && matchesPrice;
    });

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.header}>Магазин</Text>

                <View style={styles.filterContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Фільтр за назвою"
                        value={nameFilter}
                        onChangeText={setNameFilter}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Максимальна ціна"
                        value={priceFilter}
                        onChangeText={setPriceFilter}
                        keyboardType="numeric"
                    />
                </View>

                <View style={{ flex: 1, maxHeight: '70%' }}>
                    <FlatList
                        contentContainerStyle={{ paddingBottom: 16 }}
                        data={filteredProducts}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <ProductCard
                                product={item}
                                favorites={favorites}
                                setFavorites={setFavorites}
                                cart={cart}
                                setCart={setCart}
                            />
                        )}
                        scrollEnabled={true}
                    />
                </View>

                <View style={styles.bottomNav}>
                    <TouchableOpacity
                        style={styles.navButton}
                        onPress={() => navigation.navigate('Favorites')}
                    >
                        <Text style={styles.navButtonText}>Улюблені</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.navButton}
                        onPress={() => navigation.navigate('Cart')}
                    >
                        <Text style={styles.navButtonText}>Кошик</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
