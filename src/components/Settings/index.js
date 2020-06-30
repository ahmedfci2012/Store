import React from "react";
import {
  Container,
  Content,
  Header,
  Left,
  Icon,
  Button,
  Body,
  Title,
  Right,
  Text
} from "native-base";
import { View, Image } from "react-native";
import { strings, isRTL, moment } from "../../locale";

import Profile from "./Profile";
import Notifications from "./Notifications";
import TermsAndConditions from "./TermsAndConditions";
import SecurityAndPrivacy from "./SecurityAndPrivacy";

class Settings extends React.Component {
  render() {
    const {
      user,
      notificationStatus,
      emailStatus,
      onPressSwitchNotifications,
      onPressSwitchEmails,
      appVersion
    } = this.props;

    return (
      <Container>
        <Header
          transparent
          androidStatusBarColor="#00000033"
          style={{ backgroundColor: "#345c65" }}
        >
          <Left>
            <Button transparent onPress={this.props.onPressBack}>
              <Icon
                name="arrowleft"
                type="AntDesign"
                style={{
                  color: "#FFF",
                  transform: [{ rotateY: isRTL ? "180deg" : "0deg" }]
                }}
              />
            </Button>
          </Left>
          <Body>
            <Title>{strings("settings.title")}</Title>
          </Body>
          <Right />
        </Header>
        <Content
          style={{
            backgroundColor: "#f5f5f5"
          }}
        >
          <Profile
            user={user}
            onPressUpdateProfile={this.props.onPressUpdateProfile}
            onPressViewProfile={this.props.onPressViewProfile}
            strings={strings}
            isRTL={isRTL}
          />

          <Notifications
            notificationStatus={notificationStatus}
            emailStatus={emailStatus}
            onPressSwitchNotifications={onPressSwitchNotifications}
            onPressSwitchEmails={onPressSwitchEmails}
            strings={strings}
            isRTL={isRTL}
          />

          <TermsAndConditions
            onPressTermsOfService={this.props.onPressTermsOfService}
            onPressPrivacyPolicy={this.props.onPressPrivacyPolicy}
            onPressCopyRightPolicy={this.props.onPressCopyRightPolicy}
            strings={strings}
            isRTL={isRTL}
          />

          <SecurityAndPrivacy
            onPressSignOut={this.props.onPressSignOut}
            strings={strings}
            isRTL={isRTL}
          />

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              paddingLeft: 42,
              paddingRight: 40,
              marginBottom: 10
            }}
          >
            <View style={{ flex: 0.5 }}>
              <Image source={require("../assets/logosetting.png")} />
            </View>
            <View
              style={{
                flex: 3,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "#999999", fontSize: 14 }}>
                {appVersion}
              </Text>
              <Text style={{ color: "#999999", fontSize: 14 }}>
                {strings("settings.rights")}
              </Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Settings;
