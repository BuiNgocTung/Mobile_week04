
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";

const screen2 = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image
          source={require("../assets/img/usb.png")}
          style={{ height: 70, width: 70, marginRight: "10px" }}></Image>
        <Text style={styles.customTextHeader}>
          USB Bluetooth Music Receiver{"\n"}HJX-001- Biến loa thường thành loa{" "}
          {"\n"}bluetooth
        </Text>
      </View>

      <View style={styles.evaluate} >

        <Text style={styles.customText1}>Cực kỳ hài lòng</Text>
        <View style={styles.img}>
          <Image source={require('../assets/img/star.png')} style={[{ height: '39px', width: '39px' }, styles.starImg]} ></Image>
          <Image source={require('../assets/img/star.png')} style={[{ height: '39px', width: '39px' }, styles.starImg]} ></Image>
          <Image source={require('../assets/img/star.png')} style={[{ height: '39px', width: '39px' }, styles.starImg]} ></Image>
          <Image source={require('../assets/img/star.png')} style={[{ height: '39px', width: '39px' }, styles.starImg]} ></Image>
          <Image source={require('../assets/img/star.png')} style={[{ height: '39px', width: '39px' }, styles.starImg]} ></Image>


        </View>

      </View>
      <View style={styles.styleImg}>
        <TouchableOpacity style={{
          width: 293,
          height: 68,
          flexShrink: 0,
          borderColor: "#1511EB", borderWidth: 1, borderRadius: 5
        }}>
          <View style={styles.stylesBNT1}>
            <Image
              source={require("../assets/img/camera.png")}
              style={{ width: "39px", height: "32px", right: "10px" }}
            ></Image>
            <Text style={styles.customText1}>Thêm hình ảnh</Text>
          </View>
        </TouchableOpacity>


        <View style={styles.stylesInput}>
          <TextInput
            placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
            style={styles.input}
            multiline={true}
          // numberOfLines={4}
          />
          <View style={styles.rightAlignedTextContainer}>
            <Text style={styles.customText2}>https://meet.google.com/nsj-ojwi-xpp</Text>
          </View>
        </View>

      </View>

      <View style={styles.bottom}>
        <TouchableOpacity  style={styles.bnt}>
          <Text style={styles.customText3}>Gửi</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.imgContainer}>

      <Text style={styles.text2}>Cực kỳ hài lòng</Text> 
        <View style={styles.img}>
        <Image source={require('../assets/img/star.png')} style={{height: '39px', width: '39px'}}></Image>
        <Image source={require('../assets/img/star.png')} style={{height: '39px', width: '39px'}}></Image>
        <Image source={require('../assets/img/star.png')} style={{height: '39px', width: '39px'}}></Image>
        <Image source={require('../assets/img/star.png')} style={{height: '39px', width: '39px'}}></Image>
        <Image source={require('../assets/img/star.png')} style={{height: '39px', width: '39px'}}></Image>
      
        </View>
       
      </View>
      
      <TouchableOpacity>
        <View style={styles.btn1}>
          <Image
            source={require("../assets/img/camera.png")}
            style={{ width: "39px", height: "32px", right: "10px" }}
          ></Image>
          <Text style={styles.text3}>Thêm hình ảnh</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.input1}>
        <TextInput
          placeholder="Hãy chi sẻ những điều mà bạn 
 thích về sản phẩm "
          style={{
            color: "rgba(196, 196, 196, 1)",
            textAlign: "center",
            marginLeft: "5px",
           
          }}
        ></TextInput>
        <TouchableOpacity>
        <Text style={styles.text4}>https://meet.google.com/nsj-ojwi-xpp</Text>
        </TouchableOpacity>
      </View>


      <TouchableOpacity> 
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Text style={styles.text5}>Gửi</Text>
          </View>
        </View>
      </TouchableOpacity> */}
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "640px",
    width: "360px",
  },
  header: {
    marginTop: 20,
    width: 360,
    height: 105,
    flexShrink: 0,
    flexDirection: "row",
    marginLeft:30
  },
  bottom: {
    marginTop: 50,
    alignItems: "center",
  },
  evaluate: {
    marginTop: 20,
    width: 360,
    height: 105,
    flexShrink: 0,
    alignItems: "center",
    flexDirection: "column",

  },
  styleImg: {
    alignItems: "center",

  },
  stylesBNT1: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

  },
  stylesInput: {
    marginTop: 15,
    alignItems: "center",


  },
  customTextHeader: {
    color: '#000',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  customText1: {
    color: '#000',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  
  },
  customText2: {
    color: '#000',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  customText3: {
    color: '#FFF',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    textAlign:"center",
  
  },
  img: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 15,

  },
  starImg: {
    marginHorizontal: 5,
  },
  input: {
    width: 293,
    height: 222,
    borderWidth: 2,
    borderColor: '#C4C4C4',
    borderRadius: 5,
    padding: 10,
    placeholderTextColor: '#C4C4C4',
    color: '#C4C4C4',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',

    flexWrap: "wrap",
  },

  rightAlignedTextContainer: {
    alignSelf: 'flex-end',

    marginTop: -25,
    marginRight: 15,
  },
  bnt: {
    borderRadius:5,
    backgroundColor: '#0D5DB6',
    borderWidth: 1,
    borderColor: '#1511EB',
    width: 289,
    height: 41,
    justifyContent:"center",

  }
});
export default screen2;
