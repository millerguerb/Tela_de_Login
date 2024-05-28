import {View, Text, Image,  StyleSheet, Button, Pressable} from 'react-native';
import logo from '../assets/donna_elementos_logo_principal_cor.webp';
import { useNavigation } from "@react-navigation/native";

export default function App () {
  const navigation = useNavigation();
  return(

//TODA A PAGINA    style = {{flex:1, justifyContent: 'center', backgroundColor:'fff', alignItems: 'center'
  <View style={style.container}>
    
    <Image source={logo} style={style.logo} />
    
    <View style = {style.welcomeTextContainer}>    
      <Text style={style.welcomeText}> Bem-vindo de volta! </Text> 
    </View>

    <View style={style.subtitleContainer}>
      <Text style={style.subtitleText}> Acesse sua conta agora mesmo, clicando no botão abaixo: </Text>
    </View>

    <View style={style.buttonContainer}> 
      <Pressable onPress={() => navigation.navigate("login")}>   
        <Text style={style.buttonText}> ENTRAR </Text> 
      </Pressable>  
    </View>
    

    <View style={style.registerContainer}>    
      <Text style={style.registerText}> Ainda nao possui uma conta?

      <Pressable onPress={() => navigation.navigate("cadastrar")}>   
        <Text style={style.registerLink}>  cadastre-se </Text> 
        
      </Pressable>      
      </Text>  


      
    </View>
    
  </View>
 
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: '38%',
    height: '13%',
  },
  welcomeTextContainer: {
    justifyContent: 'center',
    height: '20%',
  },
  welcomeText: {
    color:'#808080',
    fontSize: 32,
    fontWeight: 'bold',
    alignItems: 'center',
    fontFamily: 'futura-lt-w01-light, futura-lt-w05-light', 
  },
  subtitleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '6%',

  },
  subtitleText: {
    color: 'black',
    fontSize: 15,
    alignItems: 'center',
    textAlign:'center',
    
  },
  buttonContainer: {
    justifyContent: 'center',
    backgroundColor: '#708090',
    width: '80%',
    height: '7%',
    margin: 10,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color:'#363636',
    fontSize: 15,
    fontFamily: 'poppis',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  registerContainer: {
    justifyContent: 'center',
    height: '15%',
    marginTop: 50,
  },
  registerText: {
    color: 'black',
    fontSize: 10,
    alignItems: 'center',
    height: '30%',
  },
  registerLink: {
    color: 'green',
    fontSize: 10,
    fontFamily: 'poppis',
    fontWeight: 'bold',
    alignItems: 'center',
    height: 11,
  },

});





