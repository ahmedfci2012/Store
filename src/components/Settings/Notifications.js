import React from "react";
import { Text, Switch, List, ListItem } from "native-base";
import { View } from "react-native";

class Notifications extends React.Component {
  render() {
    const {
      notificationStatus,
      emailStatus,
      onPressSwitchNotifications,
      onPressSwitchEmails,
      strings
    } = this.props;

    return (
      <List style={{ backgroundColor: "#FFF", marginBottom: 10 }}>
        <ListItem noBorder>
          <Text style={{ color: "#00000061", fontSize: 14 }}>
            {strings("settings.general")}
          </Text>
        </ListItem>

        <View
          style={{
            flexDirection: "row",
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 17,
            paddingBottom: 20,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#0000001E"
          }}
        >
          <View style={{ flex: 6 }}>
            <Text style={{ color: "#000000DE", fontSize: 16 }}>
              {strings("settings.notificationTitle1")}
            </Text>
            <Text style={{ color: "#0000008A", fontSize: 14 }}>
              {strings("settings.notificationSubTitle1")}
            </Text>
          </View>

          <View style={{ flex: 1, justifyContent: "center" }}>
            <Switch
              trackColor={{ true: "#FF572280", false: "#221F1F42" }}
              thumbColor={notificationStatus ? "#FF5722" : "#F1F1F1"}
              style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
              onValueChange={onPressSwitchNotifications}
              value={notificationStatus}
            />
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
          <View style={{ flex: 6 }}>
            <Text style={{ color: "#000000DE", fontSize: 16 }}>
              {strings("settings.emailTitle")}
            </Text>
            <Text style={{ color: "#0000008A", fontSize: 14 }}>
              {strings("settings.emailSubTitle")}
            </Text>
          </View>

          <View style={{ flex: 1, justifyContent: "center" }}>
            <Switch
              trackColor={{ true: "#FF572280", false: "#221F1F42" }}
              thumbColor={emailStatus ? "#FF5722" : "#F1F1F1"}
              style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
              onValueChange={onPressSwitchEmails}
              value={emailStatus}
            />
          </View>
        </View>
      </List>
    );
  }
}
export default Notifications;
