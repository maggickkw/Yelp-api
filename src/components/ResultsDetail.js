import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container }>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count}</Text>
    </View>
  )
}

export default ResultsDetail

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold",
    
  }
})