// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
// import Data from "../data/data";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";

const data = [
  {
    userName: "tung",
    passWord: "123",
  },
  {
    userName: "tien",
    passWord: "123",
  },
];

const screen1 = () => {
  const [errorLogin, setLogin] = useState("");
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const checkLogin = (userName, passWord) => {
    for (let i = 0; i < data.length; index++) {
      if (data[i].userName == userName && data[i].passWord == passWord) {
        return true;
      }
      return false;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.styles1}>

        <Text style={[styles.customText, { paddingLeft: 20 }]}  >  LOGIN</Text>
      </View>

      <View style={styles.styles2}>



        <TextInput placeholder="  Name"
          onChangeText={(txt) => setUserName(txt)}
          value={userName}
          style={styles.input} ></TextInput>
        <TextInput placeholder="   Password"
          onChangeText={(txt) => setPassWord(txt)}
          value={passWord}
          style={styles.input} ></TextInput>


        <Image
          source={require('../assets/img/avatar_user 1.png')}
          style={[{
            width: 30,
            height: 30,
            flexShrink: 0,
            position: 'absolute',
            marginTop: 10,
            marginRight: 280


          }]}
        />


        <Image
          source={require('../assets/img/lock-152879.png')}
          style={[{
            width: 30,
            height: 30,
            flexShrink: 0,
            position: 'absolute',
            marginTop: 95,
            marginRight: 280


          }]}
        />

        <Image
          source={require('../assets/img/eye 1.png')}
          style={[{
            width: 30,
            height: 30,
            flexShrink: 0,
            position: 'absolute',
            marginTop: 95,
            marginLeft: 250



          }]}
        />


      </View>
      <View style={styles.styles3}>

        <TouchableOpacity style={styles.customButton} onPress={() => checkLogin(userName, passWord)?
      setLogin("success"): setLogin("error")}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={{ color:'rgba(6, 0, 0, 1)' , fontSize: 20, marginTop: '50px', marginLeft: '10px'}}>{errorLogin}</Text>






      </View>

      <View style={styles.styles4}>
        <Text style={[styles.text, styles.customText1]}> CREATE ACCOUNT</Text>

      </View>

      <View style={styles.styles5}>

      </View>





    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)',

  },
  styles1: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',

  },
  styles2: {
    flex: 3,
    // justifyContent: 'center',
    alignItems: 'center',


  },
  styles3: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',

  },
  styles4: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styles5: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',

  },
  styles6: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  styles7: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  customText: {
    color: '#000',
    textAlign: 'center',
    // fontFamily: 'Roboto',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  customText1: {
    color: '#000',
    textAlign: 'center',
    // fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    fontWeight: 'bold'

  },

  customText2: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 'px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',

  },

  customButton: {
    backgroundColor: '#060000',
    width: '330px',
    height: '45px',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    // fontFamily: 'Roboto',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    borderRadius: '2px'
  },
  input: {
    borderWidth: 1,
    border: ' 1px solid var(--Gray-6, #F2F2F2)',

    width: '330px',
    height: '54px',
    marginBottom: 30,
    backgroundColor: 'rgba(196, 196, 196, 0.30)',
    flexShrink: 0,
    paddingLeft: 55, // Thêm khoảng trắng bên trái


  },
  text: {
    marginBottom: 10
  },
  icon: {
    borderWidth: 1,
    borderColor: 'skyblue',

  }

});
export default screen1;
