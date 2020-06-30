import React from "react";
import { Alert, View, Image, Dimensions } from "react-native";
import {
  Left,
  Right,
  Icon,
  Text,
  Header,
  Button,
  Body,
  Title,
  Content
} from "native-base";

import countries from "../countries.js";
import countryFlag from "../countryFlags";

const { width, height } = Dimensions.get("window");

const getCountryName = callingCode => {
  const country = countries.find(
    country => country.callingCode[0] === callingCode
  );
  return country.name.common;
};

getCountryFlag = callingCode => {
  const country = countries.find(
    country => country.callingCode[0] === callingCode
  );
  return countryFlag[country.cca2];
};

class HeaderSection extends React.Component {
  deleteIncident = () => {
    Alert.alert(
      "Delete Incident",
      "Are you sure you want to delete this incident?",
      [
        {
          text: "Cancel",
          //onPress: () => console.log('Cancel Pressed'),
          style: "cancel"
        },
        { text: "OK", onPress: this.props.delete }
      ]
    );
  };

  render() {
    const { user, isRTL } = this.props;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#345C65",
          height: 220,
          marginBottom: 6
        }}
      >
        <Header
          androidStatusBarColor="#00000033"
          transparent
          style={{ backgroundColor: "transparent" }}
        >
          <Left>
            <Button transparent onPress={this.props.back}>
              <Icon
                name="arrowleft"
                type="AntDesign"
                style={{
                  color: "#FFF",
                  transform: [{ rotateY: isRTL ? "180deg" : "0deg" }]
                }}
              />
            </Button>
          </Left>
          <Body />
          {this.props.owner ? (
            <Right>
              <Button transparent onPress={this.props.edit}>
                <Icon name="edit" type="Entypo" style={{ color: "#FFF" }} />
              </Button>
            </Right>
          ) : (
            <Right />
          )}
        </Header>
        <View style={{ alignItems: "center", marginTop: -15 }}>
          <Image
            source={user.imageSrc || require("../assets/person.png")}
            style={{ width: 90, height: 90 }}
          />
          <View style={{ paddingTop: 5 }}>
            <Text style={{ color: "#FFF", fontSize: 16 }}>{user.name}</Text>
          </View>

          <View
            style={{
              paddingTop: 5,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Image
              style={{ width: 24, height: 16 }}
              source={{ uri: getCountryFlag(user.callingCode) }}
            />
            <Text
              style={{
                color: "#FFF",
                fontSize: 14,
                paddingLeft: isRTL ? undefined : 10,
                paddingRight: isRTL ? 10 : undefined
              }}
            >
              {getCountryName(user.callingCode)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default HeaderSection;
