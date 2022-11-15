import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ButtonToggleGroup from "react-native-button-toggle-group";
import { useEffect, useState } from "react";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Order({ navigation }) {
  const [value, setValue] = useState("Deliver");
  const [data, setData] = useState({});
  const [prodcut, setProduct] = useState({});

  useEffect(() => {
    fetch("https://63512fa53e9fa1244e57aeb0.mockapi.io/store/Order")
      .then((res) => res.json())
      .then((resJson) => setData(resJson));

    setProduct(data.order_detail);
    console.log(prodcut);
  }, []);

  const handlerButton = (val) => {
    setValue(val);
  };

  function Render({}) {
    if (value === "Deliver") {
      return (
        <View>
            <View style={styles.deliverCotainer}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Deliver Address
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
                JI.Kpg Sutoyo
              </Text>
              <Text style={{ color: "gray", fontWeight: "bold", marginTop: 5 }}>
                kpg.Sutoyo No.620, Bilzen, Tanjungbalai
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.btnEditAddress}>
                  <FontAwesome name="edit" size={18} color="gray" />
                  <Text style={{ fontWeight: "600", color: "gray" }}>
                    Edit Address
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnEditAddress}>
                  <MaterialCommunityIcons
                    name="note-text-outline"
                    size={18}
                    color="gray"
                  />
                  <Text style={{ fontWeight: "600", color: "gray" }}>
                    Edit Address
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.listProduct}>
              <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                  return (
                    <View>
                      <View>
                        <Text>{item.order_detail.quantity}</Text>
                      </View>
                    </View>
                  );
                }}
              ></FlatList>
            </View>

            <View>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  padding: 15,
                  borderRadius: 10,
                  marginTop: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderColor: "gray",
                }}
              >
                <View style={{ height: 26, width: 26 }}>
                  <Image
                    source={{
                      uri: "https://cdn2.iconfinder.com/data/icons/ecommerce-solid-icons-vol-2/64/088-512.png",
                    }}
                    style={{ height: "100%", width: "100%" }}
                  ></Image>
                </View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  1 Discount is applied
                </Text>
                <AntDesign name="right" size={22}></AntDesign>
              </TouchableOpacity>
            </View>

            <View
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
              >
                Payment Summary
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.textPay}>Price</Text>
                <Text style={styles.textPrice}>$ 30</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <Text style={styles.textPay}>Deliver Fee</Text>
                <Text style={styles.textPrice}>$ 30</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <Text style={styles.textPay}>Total Payment</Text>
              <Text style={styles.textPrice}>$ 60</Text>
            </View>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="left" size={30}></AntDesign>
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Order</Text>
        <Text></Text>
      </View>
      <View>
        <ButtonToggleGroup
          style={styles.btnGroup}
          highlightBackgroundColor={"#AB8245"}
          highlightTextColor={"white"}
          inactiveBackgroundColor={"transparent"}
          inactiveTextColor={"black"}
          textStyle={{ fontSize: 18 }}
          values={["Deliver", "Pick up"]}
          value={value}
          onSelect={(val) => handlerButton(val)}
        />
      </View>
      <View>
        <Render></Render>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  headerContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnGroup: {
    backgroundColor: "#D9D9D9",
    padding: 5,
    marginTop: 20,
    borderRadius: 10,
    height: 50,
  },
  deliverCotainer: {
    marginTop: 16,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingBottom: 18,
  },
  btnEditAddress: {
    flexDirection: "row",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    padding: 6,
    marginTop: 15,
    marginRight: 15,
  },
  listProduct: {
    height: 120,
    backgroundColor: "red",
  },
  textPay: {
    fontSize: 18,
    color: "gray",
    fontWeight: "500",
  },
  textPrice: {
    fontSize: 18,
    fontWeight: "500",
  },
});
