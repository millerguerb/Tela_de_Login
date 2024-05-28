import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable } from 'react-native';
import logo from '../assets/donna_elementos_logo_principal_cor.webp';
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Faça seu login</Text>
      </View>

      <TextInput 
        placeholder='informe seu Email'
        placeholderTextColor='#DCDCDC'
        keyboardType='email-address'
        autoCapitalize='none'
        autoComplete='email' 
        style={styles.input}
      />
      
      <TextInput 
        placeholder='informe a senha'
        placeholderTextColor='#DCDCDC'
        autoCapitalize='none'
        secureTextEntry
        style={styles.input}
      />

      <View style={styles.forgotPasswordContainer}>    
        <Pressable onPress={() => navigation.navigate("esqueciSenha")}>   
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text> 
        </Pressable>      
      </View> 

      <View style={styles.buttonContainer}> 
        <Pressable>   
          <Text style={styles.buttonText}>ENTRAR</Text> 
        </Pressable>  
      </View>

      <View style={styles.registerContainer}>    
        <Text style={styles.registerText}>Ainda não possui uma conta?
          <Pressable onPress={() => navigation.navigate("cadastrar")}>   
            <Text style={styles.registerLink}> cadastre-se!</Text> 
          </Pressable>      
        </Text>
      </View>
      
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
  logo: {
    resizeMode: 'contain',
    width: '40%',
    height: '15%',
  },
  headerContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  headerText: {
    color: '#808080',
    fontSize: 32,
    fontWeight: 'bold',
    alignItems: 'center',
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
  forgotPasswordContainer: {
    justifyContent: 'flex-end',
    width: '80%',
  },
  forgotPasswordText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'poppins',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  buttonContainer: {
    justifyContent: 'center',
    backgroundColor: '#708090',
    width: '80%',
    height: '7%',
    marginVertical: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'poppins',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  registerContainer: {
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    color: 'black',
    fontSize: 15,
    alignItems: 'center',
  },
  registerLink: {
    color: 'green',
    fontSize: 15,
    fontFamily: 'poppins',
    fontWeight: 'bold',
    alignItems: 'center',
  },
});
