import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { Button, Text, CardItem, Card, Body, Icon } from "native-base";

const styles = {
  cardItemPadding: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8
  }
};
export default class CameraView extends Component {
  render() {
    const { disabled, strings, isRTL } = this.props;

    if (this.props.imageSrc) {
      return (
        <Card transparent>
          <CardItem style={styles.cardItemPadding}>
            <Icon
              name="camera-alt"
              type="MaterialIcons"
              style={{ fontSize: 16, color: "#999999", width: 20 }}
            />
            <Text
              style={[
                this.props.style.headerColor,
                this.props.style.headerSize,
                { paddingRight: isRTL ? 5 : undefined }
              ]}
            >
              {strings("createIncident.photo")}
            </Text>
          </CardItem>

          <CardItem style={styles.cardItemPadding}>
            <ImageBackground
              source={this.props.imageSrc}
              style={{
                height: 195,
                width: null,
                flex: 1,
                backgroundColor: "black",
                justifyContent: "flex-start"
              }}
              resizeMode={"contain"}
            >
              <Body style={{ marginLeft: 8, marginTop: 152 }}>
                <Button
                  style={{ backgroundColor: "#FF5722", height: 36 }}
                  onPress={disabled ? undefined : this.props.takePicture}
                  //disabled={disabled}
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
