import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Linking,
  Alert,
  StatusBar,
} from "react-native";
import colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";
import RowItem from "../components/RowItem";
import Separator from "../components/Separator";

const openURL = (url) => {
  Linking.openURL(url).catch(() => {
    Alert.alert("Something went wrong");
  });
};
const Options = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <ScrollView>
        <RowItem
          text="Themes"
          onPress={() => alert("To do!")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <Separator />
        <RowItem
          text="React Example"
          onPress={() => openURL("https://google.coml")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <Separator />

        <RowItem
          text="React Native By Examples"
          onPress={() => openURL("https://www.reactnativebyexample.com/")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Options;
