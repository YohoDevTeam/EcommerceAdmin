import { View } from "react-native";
import React from "react";
import { OngoigCard } from "../../components";
import { useState } from "react";


const OngoingOrderScreen = () => {
  const [orders, setOrders] = useState([]);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {orders?.map((item, index) => (
        <OngoigCard data={item}  key={index}/>
      ))}
    </View>
  );
};

export default OngoingOrderScreen;
