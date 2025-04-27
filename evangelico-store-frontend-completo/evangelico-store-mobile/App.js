import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from './services/api';

export default function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('/produtos').then(res => setProdutos(res.data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.nome} - R${item.preco}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  item: { fontSize: 16, marginBottom: 10 }
});