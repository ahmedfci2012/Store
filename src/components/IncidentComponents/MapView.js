import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import {
  Button,
  Text,
  CardItem,
  Card,
  Body,
  Left,
  Right,
  Icon
} from "native-base";
import { distance } from "../utils";

const styles = {
  cardItemPadding: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8
  }
};

export default class MapView extends Component {
  render() {
    const { onPressChange, disabled, strings, isRTL } = this.props;
    if (this.props.imageSrc) {
      return (
        <Card transparent>
          <CardItem style={[styles.cardItemPadding, { paddingLeft: 5 }]}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start"
              }}
            >
              <Icon
                name="map-marker"
                type="MaterialCommunityIcons"
                style={{ fontSize: 16, color: "#999999", width: 20 }}
              />
              <Text
                style={[
                  this.props.style.headerColor,
                  this.props.style.headerSize,
                  { paddingRight: isRTL ? 5 : undefined }
                ]}
              >
                {strings("createIncident.location")}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end"
              }}
            >
              <Icon
                name="directions-walk"
                type="MaterialIcons"
                style={{
                  fontSize: 16,
                  color: "#999999",
                  width: 15,
                  transform: [{ rotateY: isRTL ? "180deg" : "0deg" }]
                }}
              />
              <Text
                style={[
                  this.props.style.headerColor,
                  this.props.style.headerSize,
                  { paddingRight: isRTL ? 5 : undefined }
                ]}
              >
                {`${distance(this.props.location, this.props.currentLocation)}`}
              </Text>
            </View>
          </CardItem>

          <CardItem style={[styles.cardItemPadding]}>
            <ImageBackground
              source={this.props.imageSrc}
              style={{ height: 195, width: null, flex: 1 }}
            >
              <Body style={{ marginLeft: 8, marginTop: 152 }}>
                <Button
                  style={{ backgroundColor: "#FF5722", height: 36 }}
                  onPress={disabled ? undefined : onPressChange}
                  // disabled={disabled}
                >
                  <Text style={{ color: "#000000DE", fontWeight: "500" }}>
                    {strings("createIncident.change")}
                  </Text>
                </Button>
              </Body>
            </ImageBackground>
          </CardItem>
        </Card>
      );
    } else {
      return null;
    }
  }
}
