import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  CheckBox,
} from "react-native";

const Screen3 = () => {
  const [lengthChecked, setLengthChecked] = useState(false);
  const [lowerCaseChecked, setLowerCaseChecked] = useState(false);
  const [upperCaseChecked, setUpperCaseChecked] = useState(false);
  const [numberChecked, setNumberChecked] = useState(false);
  const [specialSymbolChecked, setSpecialSymbolChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.backgroundIn}>
        <Text style={styles.title}>PASSWORD {"\n"} GENERATOR</Text>
        <View style={styles.output}></View>

        <View style={styles.input}>
          <Text style={styles.label}>Password length</Text>
          <TextInput style={styles.inputField} />
        </View>

        <CheckBoxRow
          label="Include lower case letters"
          checked={lowerCaseChecked}
          onValueChange={() => setLowerCaseChecked(!lowerCaseChecked)}
        />

        <CheckBoxRow
          label="Include upper case letters"
          checked={upperCaseChecked}
          onValueChange={() => setUpperCaseChecked(!upperCaseChecked)}
        />

        <CheckBoxRow
          label="Include numbers"
          checked={numberChecked}
          onValueChange={() => setNumberChecked(!numberChecked)}
        />

        <CheckBoxRow
          label="Include special symbols"
          checked={specialSymbolChecked}
          onValueChange={() => setSpecialSymbolChecked(!specialSymbolChecked)}
        />

        <TouchableOpacity>
          <View style={styles.generateBtn}>
            <Text style={styles.generateText}>GENERATE PASSWORD</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CheckBoxRow = ({ label, checked, onValueChange }) => (
  <View style={styles.input}>
    <Text style={styles.label}>{label}</Text>
    <CheckBox
      value={checked}
      onValueChange={onValueChange}
      style={styles.checkbox}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B98",
    alignItems: "center",
    justifyContent: "center",
  },

  backgroundIn: {
    width: 322,
    borderRadius: 15,
    backgroundColor: "#23235B",
    borderWidth: 2,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
  },

  title: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    color: "#FFF",
    marginTop: 50,
  },

  output: {
    height: 55,
    width: 297,
    backgroundColor: "#151537",
    alignSelf: "center",
    marginTop: 30,
  },

  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  label: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 23.44,
    color: "#FFF",
  },

  inputField: {
    width: 118,
    height: 33,
    backgroundColor: "#FFF",
  },

  checkbox: {
    alignSelf: "center",
    width: 25,
    height: 25,
  },

  generateBtn: {
    height: 55,
    width: 269,
    backgroundColor: "#3B3B98",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 65,
  },

  generateText: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 21.09,
    textAlign: "center",
    color: "#FFF",
  },
});

export default Screen3;
