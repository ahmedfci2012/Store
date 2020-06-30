import React from "react";
import {
  Image,
  ImageBackground,
  Dimensions,
  View,
  StatusBar,
  TextInput
} from "react-native";
import {
  Container,
  Content,
  Icon,
  Text,
  Input,
  Card,
  CardItem
} from "native-base";
import { backgroundColor, opacity } from "./Variables";
import { strings, isRTL } from "../locale";

const { height } = Dimensions.get("window");
const styles = {
  imageBackground: {
    width: "100%",
    height: "100%"
  },
  containerStyle: {
    backgroundColor,
    opacity
  },
  logoCard: {
    justifyContent: "center",
    alignItems: "center"
  },
  validationErrorCard: {
    justifyContent: "center",
    alignItems: "center"
  },
  transparentCardItem: {
    backgroundColor: "transparent",
    paddingTop: 0.08 * height,
    paddingBottom: 0.08 * height
  },
  formCard: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "transparent"
  },
  formInputCardItem: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#E1E1E1B3",
    backgroundColor: "transparent",
    height: 42,
    flex: 1
  },
  formInput: {
    color: "#FFFFFF"
  },
  passwordInput: {
    color: "#FFFFFF",
    textAlign: isRTL ? "right" : undefined
  },

  icon: {
    color: "#FFFFFF80"
  },
  formButtonCardItem: {
    marginBottom: 12,
    borderRadius: 5,
    height: 42,
    flex: 1
  },
  textAlign: {
    alignSelf: "center"
  },
  forgetPasword: {
    fontSize: 12,
    color: "#FFFFFF"
  },
  register: {
    fontSize: 12,
    color: "#FFFFFF",
    paddingRight: 10
  },
  placeholder: {
    color: "#FFFFFF"
  }
};
class Login extends React.Component {
  state = {
    phone: "",
    password: ""
  };
  login = () => {
    const { phone, password } = this.state;
    this.props.onLogin({ phone, password });
  };
  render() {
    const { phone, password } = this.state;
    const { validationErrorMsg, disabled } = this.props;
    const validationCardStyle = validationErrorMsg
      ? styles.validationErrorCard
      : { display: "none" };
    return (
      <ImageBackground
        source={require("./assets/splash_bg.png")}
        style={styles.imageBackground}
      >
        <StatusBar backgroundColor="#345C65" />
        <Container style={styles.containerStyle}>
          <Content contentContainerStyle={{ flexGrow: 1 }}>
            <Card transparent style={styles.logoCard}>
              <CardItem style={styles.transparentCardItem}>
                <Image source={require("./assets/SplashLogo.png")} />
              </CardItem>
            </Card>
            <Card transparent style={validationCardStyle}>
              <Text style={{ color: "#FFFFFF" }}>{validationErrorMsg}</Text>
            </Card>
            <Card transparent style={styles.formCard}>
              <CardItem
                style={[
                  styles.formInputCardItem,
                  { backgroundColor: "#E1E1E133" }
                ]}
              >
                <Icon name="person" type="MaterialIcons" style={styles.icon} />
                <Input
                  placeholder={strings("login.placeholder1")}
                  placeholderTextColor="#E1E1E180"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    this.passwordInput._root.focus();
                  }}
                  onChangeText={phone => this.setState({ phone })}
                  value={phone}
                  keyboardType="email-address"
                  style={styles.formInput}
                  disabled={disabled}
                />
              </CardItem>
              <CardItem
                style={[
                  styles.formInputCardItem,
                  { marginBottom: 20, backgroundColor: "#E1E1E133" }
                ]}
              >
                <Icon
                  name="visibility-off"
                  type="MaterialIcons"
                  style={styles.icon}
                />
                <Input
                  placeholder={strings("login.placeholder2")}
                  placeholderTextColor="#E1E1E180"
                  secureTextEntry
                  onChangeText={password => this.setState({ password })}
                  value={password}
                  style={styles.passwordInput}
                  disabled={disabled}
                />
              </CardItem>
              <CardItem
                button
                style={styles.formButtonCardItem}
                onPress={this.login}
                disabled={disabled || !phone || !password}
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
                    {strings("login.login")}
                  </Text>
                </View>
              </CardItem>
              <CardItem
                style={{
                  backgroundColor: "transparent",
                  paddingTop: 0,
                  paddingLeft: 0,
                  paddingRight: 0
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-start"
                    }}
                  >
                    <Text
                      style={{ fontSize: 12, color: "#FFFFFFCC" }}
                      onPress={
                        disabled ? undefined : this.props.onPressForgetPasword
                      }
                    >
                      {strings("login.forgetPassword")}
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-end"
                    }}
                  >
                    <Text
                      style={{ fontSize: 12, color: "#FFFFFFCC" }}
                      onPress={
                        disabled ? undefined : this.props.onPressRegister
                      }
                    >
                      {strings("login.register")}
                    </Text>
                  </View>
                </View>
              </CardItem>
            </Card>
            <View
              style={{
                paddingBottom: 12,
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "auto"
              }}
            >
              <Text style={{ fontSize: 12, color: "#FFFFFFCC" }}>
                {strings("login.note1")}
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FFFFFFCC",
                    textDecorationLine: "underline"
                  }}
                  onPress={this.props.onPressTermsOfService}
                >
                  {strings("login.note2")}
                </Text>
                {strings("login.note3")}
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FFFFFFCC",
                    textDecorationLine: "underline"
                  }}
                  onPress={this.props.onPressPrivacyPolicy}
                >
                  {strings("login.note4")}
                </Text>
              </Text>
            </View>
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}

export default Login;
