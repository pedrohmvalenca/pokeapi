import { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');

  function buscarPokemon() {
    const id = Math.floor(Math.random() * 1025) + 1;
    fetch('https://pokeapi.co/api/v2/pokemon/' + id)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setNome(dados.name);
        setImagem(dados.sprites.front_default);
      });
  }

  useEffect(() => {
    buscarPokemon();
  }, []);

  return (
    <View>
      <Image source={{ uri: imagem }} style={{ width: 200, height: 200 }} />
      <Text>{nome}</Text>
      <Button title="Atualizar" onPress={buscarPokemon} />
    </View>
  );
}
