import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function EsqueciSenhaScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>

      <TextInput
        placeholder="Informe seu Email"
        placeholderTextColor="black"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Informe seu Telefone"
        placeholderTextColor="black"
        keyboardType="phone-pad"
        autoCapitalize="none"
        autoCompleteType="tel"
        value={telefone}
        onChangeText={setTelefone}
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={() => navigation.navigate("login")}>
        <Text style={styles.buttonText}>ENVIAR</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    color:'#808080',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 22,
    width: '80%',
    padding: 10,
    margin: 10,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#708090',
    width: '80%',
    height: '7%',
    margin: 10,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

