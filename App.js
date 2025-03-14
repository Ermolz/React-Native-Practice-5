import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import CartScreen from './screens/CartScreen';
import {useState} from "react";

const Stack = createStackNavigator();

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home">
            {props => (
                <HomeScreen
                    {...props}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    cart={cart}
                    setCart={setCart}
                />
            )}
          </Stack.Screen>
          <Stack.Screen name="Favorites">
            {props => (
                <FavoritesScreen
                    {...props}
                    favorites={favorites}
                    setFavorites={setFavorites}
                />
            )}
          </Stack.Screen>
          <Stack.Screen name="Cart">
            {props => (
                <CartScreen
                    {...props}
                    cart={cart}
                    setCart={setCart}
                />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
