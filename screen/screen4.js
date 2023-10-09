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

const screen4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/img/book.png")}
          style={styles.img}
        ></Image>
        <View>
          <Text style={styles.text1}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.text1}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.price1}>141.800đ</Text>
          <Text style={styles.price2}>141.800đ</Text>

          <View style={styles.btn1}>
            <TouchableOpacity>
              <Image
                source={require("../assets/img/btnminus.png")}
                style={styles.img1}
              ></Image>
            </TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "roboto",
                fontWeight: "bold",
                lineHeight: "17.58px",
                fontSize: "15px",
              }}
            >
              {"    "}1{"   "}
            </Text>
            <TouchableOpacity>
              <Image
                source={require("../assets/img/btnadd.png")}
                style={styles.img1}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: "roboto",
                  fontWeight: "bold",
                  lineHeight: "14.06px",
                  fontSize: "12px",
                  color: "rgba(19, 79, 236, 1)",
                  marginLeft: "80px",
                }}
              >
                Mua sau
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textContainer}>
            <Text
              style={{
                fontFamily: "roboto",
                fontWeight: "bold",
                lineHeight: "14.06px",
                fontSize: "12px",
                marginLeft: "40px",
                marginTop: "20px",
              }}
            >
              Mã giảm giá đã lưu
            </Text>

            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: "roboto",
                  fontWeight: "bold",
                  lineHeight: "14.06px",
                  fontSize: "12px",
                  marginLeft: "34px",
                  marginTop: "20px",
                  color: "rgba(19, 79, 236, 1)",
                }}
              >
                Xem tại đây
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btnContainer}>
            <View style={styles.btnContainer1}>
              <TouchableOpacity>
                <View style={styles.btn}>
                  <View style={styles.block1}></View>
                  <Text style={styles.btnText}>Mã giảm giá</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.btn2}>
                  <Text style={styles.btnText2}>Áp dụng</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{backgroundColor:'#C4C4C4',height:15,marginTop:30}}></View>
      <View style={styles.content}>
        <View style={styles.gift}>
        
          <Text style={styles.textGift}>
            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          </Text>
          <TouchableOpacity>
            <Text style={styles.textGift1}>{"   "}Nhập tại đây?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor:'#C4C4C4',height:15,marginTop:-50}}></View>
      <View style={styles.content1}>
        <View style={styles.sell}>
          <Text style={styles.textSell}>Tạm tính</Text>
          <TouchableOpacity>
            <Text style={styles.textSell1}>141.800đ</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor:'#C4C4C4',height:150,marginTop:-70}}></View>
      <View style={styles.footer}>
        <View style={styles.money}>
          <Text style={styles.textM}>Thành tiền</Text>
          <TouchableOpacity>
            <Text style={styles.textM1}>141.800đ</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View style={styles.btnfooter}>
            <Text style={styles.btnText3}>TIẾN HÀNH ĐẶT HÀNG</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "640px",
    width: "360px",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    position: "relative",
  },

  img: {
    height: "127px",
    width: "104px",
  },

  text1: {
    fontFamily: "roboto",
    fontWeight: "bold",
    lineHeight: "14.06px",
    fontSize: "12px",
    marginBottom: "10px",
  },

  price1: {
    fontFamily: "roboto",
    fontWeight: "bold",
    lineHeight: "21.09px",
    fontSize: "18px",
    marginBottom: "10px",
    color: "rgba(238, 13, 13, 1)",
  },
  price2: {
    textDecorationLine: "line-through",
    fontFamily: "roboto",
    fontWeight: "bold",
    lineHeight: "14.06px",
    fontSize: "12px",
    marginBottom: "10px",
    color: "rgba(128, 128, 128, 1)",
  },

  btn1: {
    flexDirection: "row",
  },

  img1: {
    height: "16px",
    width: "14.22px",
  },

  textContainer: {
    marginLeft: "-170px",
    flexDirection: "row",
  },

  btnContainer: {
    flex: 1,
  },

  btn: {
    width: "208px",
    height: "45px",
    borderRadius: "2px",
    borderWidth: "1px",
    marginTop: "30px",
    alignItems: "center",
    borderColor: "rgba(128, 128, 128, 1)",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: "-130px",
  },

  block1: {
    width: "32px",
    height: "16px",
    backgroundColor: "rgba(242, 221, 27, 1)",

    marginLeft: "5px",
    marginBottom: "5px",
  },

  btnText: {
    fontFamily: "roboto",
    fontWeight: "bold",
    lineHeight: "21.09px",
    fontSize: "18px",
    marginBottom: "10px",
    color: "rgba(1, 22, 39, 1)",
    marginLeft: "10px",
  },

  btn2: {
    width: "99px",
    height: "45px",
    borderRadius: "2px",
    borderWidth: "1px",
    marginTop: "30px",
    alignItems: "center",
    borderColor: "rgba(128, 128, 128, 1)",
    marginLeft: "40px",
    backgroundColor: "rgba(10, 94, 183, 1)",
    justifyContent: "center",
  },

  btnContainer1: {
    flexDirection: "row",
  },

  btnText2: {
    fontFamily: "roboto",
    fontWeight: "bold",
    lineHeight: "23.44px",
    fontSize: "20px",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
  },

  content: {
    marginTop:-40,
width:1000,
    height: 120,
   
  },

  gift: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: "20px",
  },

  textGift: {
    fontFamily: "roboto",
    fontWeight: "bold",
    lineHeight: "14.06px",
    fontSize: "12px",
    marginBottom: "10px",
    marginTop: "50px",
  },

  textGift1: {
    fontFamily: "roboto",
    fontWeight: "bold",
    lineHeight: "14.06px",
    fontSize: "12px",
    marginBottom: "10px",
    marginTop: "50px",
    color: "rgba(19, 79, 236, 1)",
  },

  content1: {
    flex: 1,
    height: "51px",
    width: "360px",
    marginTop:20
  },

  sell: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "20px",
    marginTop: "-10px",
  },

  textSell: {
    fontFamily: "roboto",
    fontWeight: "bold",
    lineHeight: "21.09px",
    fontSize: "18px",
  },

  textSell1: {
    fontFamily: "roboto",
    fontWeight: "bold",
    lineHeight: "21.09px",
    fontSize: "18px",
    color: "rgba(238, 13, 13, 1)",
  },

  footer: {
    flex: 1,
    height: "120px",
    width: "360px",
  },

  money: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "20px",
    marginTop: "30px",
  },

  textM: {
    color:'#808080',
    fontFamily: "roboto",
    fontWeight: "bold",
    lineHeight: "21.09px",
    fontSize: "18px",
  },

  textM1: {
    fontFamily: "roboto",
    fontWeight: "bold",
    lineHeight: "21.09px",
    fontSize: "18px",
    color: "rgba(238, 13, 13, 1)",
  },

  btnfooter: {
    width: "331px",
    height: "45px",
    borderRadius: "2px",
    backgroundColor: "rgba(229, 57, 53, 1)",
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: "30px",
    marginTop: "30px",
  },

  btnText3: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "23.44px",
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
  },
});
export default screen4;