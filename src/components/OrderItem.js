import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View,Text } from 'react-native'
import { Image } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
const OrderItem = () => {
  return (
    <View>
    <View
      style={{
      
        marginTop: 15,
        elevation: 1,
        backgroundColor: "white",
        borderRadius: 15,
        padding: 20,
       
        flexDirection: "row",
      }}
    >
      <View style={{}}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNBB5-qUlbAdwqZvoi5_CSZKfaOiNn1SmhvCPxrzIwrXIiCU6",
          }}
          resizeMode="contain"
          style={{ width: 100, height: 110,borderRadius:15 }}
        />
      </View>

      <View style={{flex:1}} >

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems:"center",
          paddingLeft:5
        
        }}
      >
        <Text style={{fontSize:16,fontWeight:"bold",marginLeft:10,marginTop:"auto"}}>Werolla Cardigans</Text>
        <MaterialIcons name="delete-outline" size={24} color="black" style={{fontWeight:"100"}}/>
      </View>

      <View style={{flexDirection:"row",alignItems:"center",marginTop:"auto",marginLeft:10,alignItems:"center",paddingLeft:5}}>

      <FontAwesome name="circle" size={15} color="black" />
      <Text style={{marginLeft:5,color:"gray",fontSize:12,fontWeight:"600"}}>Color | Size = M</Text>  
      </View>
        
       <View style={{ marginTop:"auto",marginLeft:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <Text style={{fontSize:17,fontWeight:"bold",paddingLeft:5}}> $385.00</Text>
        <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"#E7E7E7",borderRadius:20,paddingHorizontal:8}}>
        
         <Text style={{marginHorizontal:8,paddingVertical:5,fontWeight:"bold"}}>1</Text>

        </View>
       </View>
      </View>



    </View>
  </View>
  )
}

export default OrderItem