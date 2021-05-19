import React, { useContext } from "react";
import { StatusBar, FlatList, View, StyleSheet } from "react-native";
import colors from "../constants/colors";
import currencies from "../data/currencies.json";
import RowItem from "../components/RowItem.js";
import Separator from "../components/Separator";
import { useSafeArea } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { ConversionContext } from "../util/ConversionContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: colors.blue,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ({ navigation, route = {} }) => {
  const insets = useSafeArea();
  const params = route.params || {};
  const { isBaseCurrency } = params;
  const {
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
  } = useContext(ConversionContext);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          let selected = false;
          if (isBaseCurrency && baseCurrency === item) {
            selected = true;
          } else if (!isBaseCurrency && quoteCurrency === item) {
            selected = true;
          }
          return (
            <RowItem
              text={item}
              onPress={() => {
                if (isBaseCurrency) {
                  setBaseCurrency(item);
                } else {
                  setQuoteCurrency(item);
                }
                navigation.pop();
              }}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <Entypo size={20} name="check" color={colors.white} />
                  </View>
                )
              }
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <Separator />}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: insets.bottom }} />
        )}
      />
    </View>
  );
};
