import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: 'Product Details of ' + id }} />
      <Text>ProductDetails of {id}</Text>
    </View>
  );
};

export default ProductDetails;
