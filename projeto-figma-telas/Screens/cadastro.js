import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function CadastroScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua conta</Text>

      <TextInput
        placeholder="Informe o Email"
        placeholderTextColor="#DCDCDC"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Informe a senha"
        placeholderTextColor="#DCDCDC"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
      />

      <TextInput
        placeholder="Confirme a senha"
        placeholderTextColor="#DCDCDC"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={() => navigation.navigate("login")}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
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


