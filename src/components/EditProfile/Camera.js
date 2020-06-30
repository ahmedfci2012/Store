import React from "react";
import { View, Image, Dimensions } from "react-native";
import { Text, Card, CardItem } from "native-base";

const styles = {
  cardItemPadding: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 0
  }
};

class Camera extends React.Component {
  render() {
    const { takePicture, imageSrc, strings, isRTL } = this.props;

    return (
      <Card transparent>
        <CardItem
          button
          onPress={takePicture}
          style={[
            styles.cardItemPadding,
            {
              paddingTop: 15,
              backgroundColor: "#F5F5F5",
              justifyContent: "center",
              backgroundColor: "#F5F5F5"
            }
          ]}
          disabled={this.props.disabled}
        >
          <Image
            source={imageSrc ? imageSrc : require("../assets/person-w.png")}
            style={{ width: 90, height: 90, borderRadius: 50 }}
          />
        </CardItem>

        <CardItem
          button
          onPress={takePicture}
          style={[
            styles.cardItemPadding,
            {
              paddingTop: 5,
              paddingBottom: 6,
              justifyContent: "center",
              backgroundColor: "#F5F5F5"
            }
          ]}
          disabled={this.props.disabled}
        >
          {imageSrc ? (
            <Text style={{ color: "#345C65A6" }}>
              {strings("editProfile.changePhoto")}
            </Text>
          ) : (
            <Text style={{ color: "#BBB" }}>
              {strings("editProfile.selectPhoto")}
            </Text>
          )}
        </CardItem>
      </Card>
    );
  }
}
export default Camera;
