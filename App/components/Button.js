import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});

export const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={require("../assets/images/reverse.png")}
        resizeMode="contain"
        style={styles.buttonIcon}
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
