import products from '@assets/data/products';
import Colors from '@constants/Colors';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import Button from '@/components/Button';
import { defaultPizzaImage } from '@/components/ProductListItem';

const sizes = ['S', 'M', 'L', 'XL', 'XXL', '3XL'];

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = React.useState('M');
  const product = products.find((p) => p.id.toString() === id);
  if (!product) <Text>Product not found</Text>;

  const addToCart = () => {
    console.log('Add to cart');
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Product Details of ' + product?.name }} />
      <Image source={{ uri: product?.image || defaultPizzaImage }} style={styles.image} />
      <Text style={styles.title}>{product?.name}</Text>
      <Text> Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            key={size}
            style={[
              styles.size,
              { backgroundColor: size === selectedSize ? 'gainsboro' : 'white' },
            ]}
          >
            <Text style={[styles.sizeText, { color: size === selectedSize ? 'black' : 'gray' }]}>
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product?.price}</Text>

      <Button onPress={addToCart} text="Add to cart" />
    </View>
  );
};

export default ProductDetails;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  size: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sizeText: {
    fontSize: 18,
    fontWeight: '600',
  },

  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
});
