
import React, { useState } from 'react';
import { StyleSheet,View } from 'react-native';
import { Input, Text, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../style/MainStyle';

export default function Login({navigation}) {

const[email, setEmail]= useState(null)
const[senha, setSenha]= useState(null)


const entrar= ()=>{
  navigation.reset({
      index: 0,
      routes: [{name: "Principal"}]
  })
}

  return (
    <View style={styles.container}>
      <Text h3>APS</Text>
     
      <Input
      placeholder="E-mail"
      leftIcon={{type: 'font-awesome', name: 'envelope'}}
      style={styles}
      onChangeText={value => setEmail(value)}
      keyboardType= "email-address"
      />
    
    <Input
      placeholder="Sua senha"
      leftIcon={{type: 'font-awesome', name: 'lock'}}
      style={styles}
      onChangeText={value => setSenha(value)}
      keyboardType= "email-address"
      secureTextEntry={true}
      />

    <Button
      icon={
        <Icon
          name="check"
          size={15}
          color="white"
        />
      }
  title="Entrar"
  onPress={()=>entrar()}
/>


    </View>
  );
}
