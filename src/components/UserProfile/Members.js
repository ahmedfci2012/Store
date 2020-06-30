import React from "react";
import { View, Image } from "react-native";
import { Icon, Text, Card, CardItem } from "native-base";
import moment from "moment";

class Members extends React.Component {
  render() {
    const { updates, incidents, joinedAt } = this.props.user;
    const { strings } = this.props;
    return (
      <Card transparent style={{ backgroundColor: "#FFF" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#FFF",
            paddingBottom: 10
          }}
        >
          <View
            style={{
              flex: 1,
              paddingTop: 5,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon
                name="map-marker"
                type="MaterialCommunityIcons"
                style={{ fontSize: 16, width: 13, color: "#666666DE" }}
              />
              <Text style={{ fontSize: 12, color: "#666666DE", marginLeft: 5 }}>
                {strings("userProfile.incidents")}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: "#000000DE",
                  marginLeft: 5,
                  paddingTop: 5,
                  fontWeight: "bold"
                }}
              >
                {incidents}
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              height: 65,
              width: 1,
              backgroundColor: "#70707080"
            }}
          />

          <View
            style={{
              flex: 1,
              paddingTop: 5,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon
                name="insert-comment"
                type="MaterialIcons"
                style={{ fontSize: 16, width: 15, color: "#666666DE" }}
              />
              <Text style={{ fontSize: 12, color: "#666666DE", marginLeft: 5 }}>
                {strings("userProfile.updates")}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: "#000000DE",
                  marginLeft: 5,
                  paddingTop: 5,
                  fontWeight: "bold"
                }}
              >
                {updates}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginLeft: 10,
            height: 1,
            width: "94%",
            backgroundColor: "#0000001E"
          }}
        />

        <CardItem style={{ borderBottomWidth: 1, borderColor: "#0000001E" }}>
          <View style={{ flex: 0.7 }}>
            <Text style={{ fontSize: 14, color: "#666666DE" }}>
              {strings("userProfile.joined")}
            </Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={{ fontSize: 14, color: "#666666DE" }}>
              {moment(Number(joinedAt)).format("dddd, MMMM Do YYYY")}
            </Text>
          </View>
        </CardItem>
      </Card>
    );
  }
}

export default Members;
