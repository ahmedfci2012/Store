import React from "react";
import { Text, List, ListItem, Icon } from "native-base";
import { View, TouchableOpacity } from "react-native";

class SecurityAndPrivacy extends React.Component {
  render() {
    const { strings } = this.props;
    return (
      <List style={{ backgroundColor: "#FFF", marginBottom: 10 }}>
        <ListItem noBorder>
          <Text style={{ color: "#00000061", fontSize: 14 }}>
            {strings("settings.securityPrivacy")}
          </Text>
        </ListItem>

        <View
          style={{
            flexDirection: "row",
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 17,
            paddingBottom: 20
          }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity
              style={{ flex: 1, flexDirection: "row" }}
              onPress={this.props.onPressSignOut}
            >
              <Icon
                name="power-settings-new"
                type="MaterialIcons"
                style={{ color: "#999999" }}
              />
              <Text
                style={{ color: "#C70039DE", fontSize: 16, marginLeft: 35 }}
              >
                {strings("settings.signOut")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </List>
    );
  }
}
export default SecurityAndPrivacy;
