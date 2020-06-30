import React from "react";
import { Text, Switch, List, ListItem } from "native-base";
import { View, TouchableOpacity } from "react-native";

class TermsAndConditions extends React.Component {
  render() {
    const { strings } = this.props;
    return (
      <List style={{ backgroundColor: "#FFF", marginBottom: 10 }}>
        <ListItem noBorder>
          <Text style={{ color: "#00000061", fontSize: 14 }}>
            {strings("settings.termsCondition")}
          </Text>
        </ListItem>

        <View
          style={{
            flexDirection: "row",
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 17,
            paddingBottom: 20,
            borderBottomWidth: 1,
            borderColor: "#0000001E"
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={this.props.onPressTermsOfService}
            >
              <Text style={{ color: "#000000DE", fontSize: 16 }}>
                {strings("settings.termsOfService")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 17,
            paddingBottom: 20,
            borderBottomWidth: 1,
            borderColor: "#0000001E"
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={this.props.onPressPrivacyPolicy}
            >
              <Text style={{ color: "#000000DE", fontSize: 16 }}>
                {strings("settings.privacyPolicy")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 17,
            paddingBottom: 20
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={this.props.onPressCopyRightPolicy}
            >
              <Text style={{ color: "#000000DE", fontSize: 16 }}>
                {strings("settings.copyrightPolicy")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </List>
    );
  }
}
export default TermsAndConditions;
