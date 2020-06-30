import React from "react";
import { View, Image } from "react-native";
import { Icon, Text, Card, CardItem } from "native-base";

const styles = {
  cardItemPadding: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 0
  }
};
class CircleIncidentType extends React.Component {
  render() {
    const { type, circle, strings } = this.props;
    return (
      <Card transparent>
        <CardItem style={styles.cardItemPadding}>
          <Card transparent style={{ flex: 1 }}>
            <CardItem
              style={{
                paddingTop: 0,
                paddingLeft: 12,
                justifyContent: "flex-start"
              }}
            >
              <Icon
                name="apps"
                type="MaterialIcons"
                style={{ fontSize: 16, width: 15, color: "#0000008A" }}
              />
              <Text style={{ fontSize: 12, color: "#0000008A", marginLeft: 5 }}>
                {strings("createIncident.incidentType")}
              </Text>
            </CardItem>

            <CardItem style={{ paddingBottom: 5, justifyContent: "center" }}>
              {type.imageSrc ? (
                <Image
                  source={type.imageSrc}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 50
                  }}
                />
              ) : (
                <View
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#CCC",
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Icon
                    name="map-marker"
                    type="MaterialCommunityIcons"
                    style={{
                      width: 30,
                      height: 30,
                      fontSize: 30,
                      color: "#999"
                    }}
                  />
                </View>
              )}
            </CardItem>

            <CardItem
              style={[styles.cardItemPadding, { justifyContent: "center" }]}
            >
              <Text style={{ fontSize: 12, color: "#0000008A" }}>
                {type.name}
              </Text>
            </CardItem>
          </Card>

          <View
            style={{
              height: 100,
              width: 1,
              backgroundColor: "#70707080"
            }}
          />

          <Card transparent style={{ flex: 1 }}>
            <CardItem
              style={{
                paddingTop: 0,
                paddingLeft: 12,
                justifyContent: "flex-start"
              }}
            >
              <Image
                style={{ width: 14, height: 14 }}
                source={require("../assets/circle.png")}
              />
              <Text style={{ fontSize: 12, color: "#0000008A", marginLeft: 5 }}>
                {strings("createIncident.circle")}
              </Text>
            </CardItem>
            <CardItem style={{ paddingBottom: 5, justifyContent: "center" }}>
              {circle.imageSrc ? (
                <Image
                  source={circle.imageSrc}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 50
                  }}
                />
              ) : (
                <View
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#CCC",
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/circle2.png")}
                  />
                </View>
              )}
            </CardItem>
            <CardItem
              style={[styles.cardItemPadding, { justifyContent: "center" }]}
            >
              <Text style={{ fontSize: 12, color: "#0000008A" }}>
                {circle.name}
              </Text>
            </CardItem>
          </Card>
        </CardItem>
      </Card>
    );
  }
}

export default CircleIncidentType;
