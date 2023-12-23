import { View } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import OrderCard from "./../../components/OrderCard";
import RBSheet from "react-native-raw-bottom-sheet";

const CompletedOrderScreen = () => {
  const refRBSheet = useRef();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <OrderCard onPress={() => refRBSheet.current.open()} />
      <OrderCard />
      <OrderCard />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
        ></RBSheet>
      </View>
    </View>
  );
};

export default CompletedOrderScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
