import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import {
  EvilIcons,
  MaterialIcons,
  AntDesign,
  Ionicons,
  Octicons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
import { Divider } from "react-native-paper";

const Home = () => {
  return (
    <View style={styles.HomeContainer}>
      <View style={styles.headerBar}>
        <View>
          <EvilIcons name="camera" size={40} color="black" />
        </View>
        <View style={styles.otherside}>
          <View style={{ marginRight: 10 }}>
            <MaterialIcons name="message" size={35} color="black" />
          </View>
          <View>
            <AntDesign name="hearto" size={35} color="black" />
          </View>
        </View>
      </View>
      <Divider />
      <View style={styles.statues}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <View style={styles.cirle}>
            <Image
              style={styles.stretch}
              source={require("/Users/sundiatakeita/here_we_go/assets/Mo.jpg")}
            />
            <View style={{ paddingBottom: 10 }}>
              <Ionicons
                name="add-circle"
                size={24}
                color="blue"
                style={{ position: "absolute", top: -20, left: 35 }}
              />
            </View>
            <Text style={{ marginLeft: 7, marginTop: -9 }}>New story</Text>
          </View>

          <View style={styles.cirle}>
            <Image
              style={styles.stretch}
              source={require("/Users/sundiatakeita/here_we_go/assets/conteh.jpeg")}
            />
            <View style={{ paddingBottom: 10 }}>
              <Text style={{ marginLeft: 7 }}>Conteh</Text>
            </View>
          </View>

          <View style={styles.cirle}>
            <Image
              style={styles.stretch}
              source={require("/Users/sundiatakeita/here_we_go/assets/muham.jpeg")}
            />
            <View style={{ paddingBottom: 10 }}>
              <Text style={{ marginLeft: 7 }}>Muha</Text>
            </View>
          </View>

          <View style={styles.cirle}>
            <Image
              style={styles.stretch}
              source={require("/Users/sundiatakeita/here_we_go/assets/Malik.jpeg")}
            />
            <View style={{ paddingBottom: 10 }}>
              <Text style={{ marginLeft: 7 }}>Malik</Text>
            </View>
          </View>

          <View style={styles.cirle}>
            <Image
              style={styles.stretch}
              source={require("/Users/sundiatakeita/here_we_go/assets/sundi.png")}
            />
            <View style={{ paddingBottom: 10 }}>
              <Text style={{ marginLeft: 7 }}>Malik</Text>
            </View>
          </View>

          <View style={styles.cirle}>
            <Image
              style={styles.stretch}
              source={require("/Users/sundiatakeita/here_we_go/assets/sundi.png")}
            />
            <View style={{ paddingBottom: 10 }}>
              <Text style={{ marginLeft: 7 }}>Malik</Text>
            </View>
          </View>

          {/* second persion */}

          <View style={styles.cirle}>
            <Image
              style={styles.stretch}
              source={require("/Users/sundiatakeita/here_we_go/assets/ml.jpeg")}
            />
            <View style={{ paddingBottom: 10 }}>
              <Text style={{ marginLeft: 7 }}>ML kit</Text>
            </View>
          </View>

          <View style={styles.cirle}>
            <Image
              style={styles.stretch}
              source={require("/Users/sundiatakeita/here_we_go/assets/ml.jpeg")}
            />
            <View style={{ paddingBottom: 10 }}>
              <Text style={{ marginLeft: 7 }}>ML kit</Text>
            </View>
          </View>

          <View style={styles.cirle}>
            <Image
              style={styles.stretch}
              source={require("/Users/sundiatakeita/here_we_go/assets/ml.jpeg")}
            />
            <View style={{ paddingBottom: 10 }}>
              <Text style={{ marginLeft: 7 }}>ML kit</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <Divider />
      <View style={styles.profileContainer}>
        <View style={styles.subprofile}>
          <Image
            style={styles.stretchfii}
            source={require("/Users/sundiatakeita/here_we_go/assets/sundi.png")}
          />
          <Text style={{ marginTop: 25, marginLeft: 10, fontWeight: "bold" }}>
            Sundiata keita
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginTop: 15,
              marginRight: 8,
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            ...
          </Text>
        </View>
      </View>

      <View style={styles.postpicture}>
        <ScrollView>
          <Image
            style={styles.Image}
            source={require("/Users/sundiatakeita/here_we_go/assets/conteh.jpeg")}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <FontAwesome5 name="heart" size={24} color="black" />
              <Feather name="message-circle" size={24} color="black" />
              <Feather name="send" size={24} color="black" />
            </View>
            <View>
              <Octicons name="bookmark" size={24} color="black" />
            </View>
          </View>
          <View>
            <View>
              <View style={styles.subprofile}>
                <Image
                  style={styles.stretchfii}
                  source={require("/Users/sundiatakeita/here_we_go/assets/sundi.png")}
                />
                <Text
                  style={{ marginTop: 25, marginLeft: 10, fontWeight: "bold" }}
                >
                  lamin Kanteh
                </Text>
              </View>
            </View>
            <Text style={{ marginLeft: 70 }}>
              If you want only to hide the header on 1 screen you can do this by
              setting the screenOptions on the screen component see below for
              example:
            </Text>
          </View>

          <Image
            style={styles.Image}
            source={require("/Users/sundiatakeita/here_we_go/assets/ml.jpeg")}
          />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <FontAwesome5 name="heart" size={24} color="black" />
              <Feather name="message-circle" size={24} color="black" />
              <Feather name="send" size={24} color="black" />
            </View>
            <View>
              <Octicons name="bookmark" size={24} color="black" />
            </View>
          </View>
          <View>
            <View>
              <View style={styles.subprofile}>
                <Image
                  style={styles.stretchfii}
                  source={require("/Users/sundiatakeita/here_we_go/assets/sundi.png")}
                />
                <Text
                  style={{ marginTop: 25, marginLeft: 10, fontWeight: "bold" }}
                >
                  lamin Kanteh
                </Text>
              </View>
            </View>
            <Text style={{ marginLeft: 70 }}>
              If you want only to hide the header on 1 screen you can do this by
              setting the screenOptions on the screen component see below for
              example:
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  HomeContainer: {
    marginTop: 50,
  },
  headerBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  otherside: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statues: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cirle: {
    marginLeft: 10,
    borderColor: "#ceb6ca",
  },
  stretch: {
    borderRadius: 250,
    height: 70,
    width: 70,
    marginTop: 7,
    borderColor: "#ceb6ca",
    borderWidth: 3,
  },
  stretchfii: {
    borderRadius: 250,
    height: 60,
    width: 60,
    marginTop: 7,
    borderColor: "#ceb6ca",
    borderWidth: 3,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subprofile: {
    flexDirection: "row",
  },
  postpicture: {
    height: "100%",
    width: "100%",
  },
  Image: {
    width: 400,
    height: 480,
    marginTop: 5,
    marginBottom: 10,
  },
});
