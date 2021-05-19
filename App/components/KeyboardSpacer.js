import React, { useState, useEffect } from "react";
import { View, Keyboard, Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export const KeyboardSpacer = ({ onToggle }) => {
  const [keyboardSpace, setKeyboardSpace] = useState(0);
  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", (event) => {
      const endY = event.endCoordinates.screenY;
      const screenHeight = Dimensions.get("window").height;
      setKeyboardSpace(screenHeight - endY);
      onToggle(true);
    });

    const hideListener = Keyboard.addListener("keyboardDidHide", () => {
      onToggle(false);
      setKeyboardSpace(0);
    });

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);
  return <View style={[styles.container, { height: keyboardSpace }]}></View>;
};
