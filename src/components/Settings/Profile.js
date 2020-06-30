import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Left, Thumbnail, Body, List, ListItem } from "native-base";

class Profile extends React.Component {
  render() {
    const { user, strings } = this.props;
    return (
      <List style={{ backgroundColor: "#FFF", marginBottom: 10 }}>
        <ListItem noBorder>
          <Text style={{ color: "#00000061", fontSize: 14 }}>
            {strings("settings.userProfile")}
          </Text>
        </ListItem>

        <ListItem avatar noBorder style={{ paddingBottom: 20 }}>
          <Left>
            <Thumbnail
              source={user.imageSrc || require("../assets/person.png")}
              style={{ width: 60, height: 60 }}
            />
          </Left>

          <Body
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 20
            }}
          >
            <Text
              style={{ fontSize: 16, color: "#000000DE", paddingBottom: 8 }}
            >
              {user.name}
            </Text>
            <Text
              style={{ fontSize: 16, color: "#00000061" }}
              numberOfLines={1}
            >
              {user.email}
            </Text>
          </Body>
        </ListItem>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            paddingBottom: 15,
            paddingTop: 14.5,
            borderColor: "#0000001E"
          }}
        >
          <TouchableOpacity
            onPress={() => alert("13212132")}
            style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
            onPress={this.props.onPressViewProfile}
          >
            <Text style={{ color: "#FF5722", fontSize: 14, fontWeight: "500" }}>
              {strings("settings.viewProfile")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => alert("13212132")}
            style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
            onPress={this.props.onPressUpdateProfile}
          >
            <Text style={{ color: "#FF5722", fontSize: 14, fontWeight: "500" }}>
              {strings("settings.updateProfoile")}
            </Text>
          </TouchableOpacity>
        </View>
      </List>
    );
  }
}
export default Profile;
