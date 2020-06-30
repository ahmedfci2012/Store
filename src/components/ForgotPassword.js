import React from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import {
  Container,
  Content,
  Body,
  Icon,
  Text,
  Input,
  Card,
  CardItem
} from "native-base";
import { backgroundColor, opacity } from "./Variables";
import { strings } from "../locale";

const styles = {
  imageBackground: {
    width: "100%",
    height: "100%"
  },
  Container: {
    backgroundColor,
    opacity
  },

  formInputCardItem: {
    paddingLeft: 14,
    paddingRight: 20,
    marginBottom: 19,
    marginLeft: 16,
    marginRight: 16,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#E1E1E1B3",
    backgroundColor: "transparent",
    height: 42,
    flex: 1
  },

  formButtonCardItem: {
    marginBottom: 12,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 5,
    height: 42,
    flex: 1
  }
};
class ForgotPassword extends React.Component {
  state = {
    emailOrPhone: ""
  };

  continue = () => {
    const { emailOrPhone } = this.state;
    this.props.continueForgetPassord({ emailOrPhone });
  };

  render() {
    const { emailOrPhone } = this.state;
    const { validationErrorMsg, disabled } = this.props;

    return (
      <ImageBackground
        source={require("./assets/splash_bg.png")}
        style={styles.imageBackground}
      >
        <StatusBar backgroundColor="#345C65" />
        <Container style={styles.Container}>
          <Content style={{ paddingTop: 53 }}>
            <Card transparent>
              <CardItem
                style={{ backgroundColor: "transparent", paddingBottom: 0 }}
              >
                <Body>
                  <Text style={{ fontSize: 24, color: "#FFF" }}>
                    {strings("forgetPassword1.note1")}
                  </Text>
                </Body>
              </CardItem>

              <CardItem
                style={{ backgroundColor: "transparent", paddingBottom: 19 }}
              >
                <Body>
                  <Text style={{ color: "#FFFFFFCC", fontSize: 14 }}>
                    {strings("forgetPassword1.note2")}
                  </Text>
                </Body>
              </CardItem>

              <CardItem
                style={[
                  styles.formInputCardItem,
                  { backgroundColor: "#E1E1E133" }
                ]}
              >
                <Input
                  placeholder={strings("forgetPassword1.placeholder1")}
                  placeholderTextColor="#E1E1E180"
                  returnKeyType="next"
                  onChangeText={emailOrPhone => this.setState({ emailOrPhone })}
                  value={emailOrPhone}
                  keyboardType="email-address"
                  style={{ color: "#FFFFFF" }}
                  disabled={disabled}
                />
              </CardItem>

              <CardItem
                button
                style={styles.formButtonCardItem}
                onPress={this.continue}
                disabled={disabled || !emailOrPhone}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{ color: "#345C65CC" }}>
                    {strings("forgetPassword1.continue")}
                  </Text>
                </View>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}

export default ForgotPassword;
