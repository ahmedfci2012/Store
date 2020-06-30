import React from "react";
import { View, Image, Dimensions } from "react-native";
import { Text, Card, CardItem } from "native-base";

const styles = {
  cardItemPadding: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 0
  },
  map: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }
};

class CameraAndLocation extends React.Component {
  render() {
    const {
      takePicture,
      toggleChooseLocationModal,
      location,
      imageSrc,
      disabled,
      strings
    } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          paddingTop: 20,
          paddingBottom: 20,
          backgroundColor: "#F5F5F5"
        }}
      >
        <Card transparent style={{ flex: 1 }}>
          <CardItem
            button
            onPress={takePicture}
            style={[
              styles.cardItemPadding,
              { justifyContent: "center", backgroundColor: "#F5F5F5" }
            ]}
            disabled={disabled}
          >
            <Image
              source={
                imageSrc
                  ? require("../assets/fill_camera.png")
                  : require("../assets/camera.png")
              }
              style={{ width: 50, height: 45 }}
            />
          </CardItem>

          <CardItem
            style={[
              styles.cardItemPadding,
              {
                paddingTop: 5,
                justifyContent: "center",
                backgroundColor: "#F5F5F5"
              }
            ]}
          >
            {imageSrc ? (
              <Text style={{ color: "#345C65A6" }}>
                {strings("createIncident.changePhoto")}
              </Text>
            ) : (
              <Text style={{ color: "#BBB" }}>
                {strings("createIncident.setPhoto")}
              </Text>
            )}
          </CardItem>
        </Card>

        <View
          style={{
            height: 85,
            width: 1,
            backgroundColor: "rgba(112, 112, 112, 0.2)"
          }}
        />

        <Card transparent style={{ flex: 1 }}>
          <CardItem
            button
            onPress={toggleChooseLocationModal}
            style={[
              styles.cardItemPadding,
              { justifyContent: "center", backgroundColor: "#F5F5F5" }
            ]}
            disabled={disabled}
          >
            <Image
              source={
                location
                  ? require("../assets/fill_location.png")
                  : require("../assets/location.png")
              }
              style={{ width: 34.63, height: 50 }}
            />
          </CardItem>
          <CardItem
            style={[
              styles.cardItemPadding,
              { justifyContent: "center", backgroundColor: "#F5F5F5" }
            ]}
          >
            {location ? (
              <Text style={{ color: "#345C65A6" }}>
                {strings("createIncident.changeLocation")}
              </Text>
            ) : (
              <Text style={{ color: "#BBB" }}>
                {strings("createIncident.setLocation")}
              </Text>
            )}
          </CardItem>
        </Card>
      </View>
    );
  }
}
export default CameraAndLocation;
