import React from "react";
import {
  Image,
  ImageBackground,
  Dimensions,
  View,
  StatusBar,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  FlatList
} from "react-native";
import {
  Container,
  Content,
  Body,
  Icon,
  Text,
  Input,
  Card,
  CardItem,
  Item,
  List,
  ListItem,
  Left,
  Right
} from "native-base";

import _countries from "./countries.js";
import countryFlag from "./countryFlags";
import { backgroundColor, opacity } from "./Variables";
import { strings, isRTL } from "../locale";

const { width, height } = Dimensions.get("window");

const R = require("ramda");

const countries = R.sortBy(c => c.name.common, _countries);

//countries.forEach(c => console.log(c.name.common));

const getCounryCode = cca2 => {
  const country = countries.find(country => country.cca2 === cca2);
  return R.path(["callingCode", 0], country) || "";
};

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
    paddingRight: 10
  },
  formInputCardItem: {
    height: 42,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#E1E1E1B3",
    backgroundColor: "transparent",
    alignItems: "center",
    alignSelf: "center"
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
    flex: 1,
    height: 42
  },
  textAlign: {
    alignSelf: "center"
  },
  hasAccount: {
    fontSize: 12,
    color: "#FFFFFF",
    alignSelf: "center"
  },
  placeholder: {
    color: "#FFFFFF"
  }
};

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    password: "",
    cca2: this.props.initialDeviceCountry,
    callingCode: getCounryCode(this.props.initialDeviceCountry),
    modalVisible: false,
    searchText: ""
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  selectCountry(item) {
    this.setModalVisible(false);
    const { callingCode, cca2 } = item;
    this.setState({ callingCode: callingCode[0], cca2 });
  }

  register = () => {
    const { name, email, phone, password, callingCode, cca2 } = this.state;
    this.props.onRegister({ name, email, phone, password, callingCode, cca2 });
  };

  render() {
    // alert(countries.length)
    const { name, email, phone, password, searchText } = this.state;
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
                <Icon name="person" style={styles.icon} />

                <Input
                  placeholder={strings("signup.placeholder2")}
                  placeholderTextColor="#E1E1E180"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    this.emailInput._root.focus();
                  }}
                  onChangeText={name => this.setState({ name })}
                  value={name}
                  style={styles.formInput}
                  disabled={disabled}
                />
              </CardItem>
              <CardItem
                style={[
                  styles.formInputCardItem,
                  { backgroundColor: "#E1E1E133" }
                ]}
              >
                <Icon name="mail" style={styles.icon} />
                <Input
                  ref={input => (this.emailInput = input)}
                  placeholder={strings("signup.placeholder1")}
                  placeholderTextColor="#E1E1E180"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    this.phoneInput._root.focus();
                  }}
                  onChangeText={email => this.setState({ email })}
                  value={email}
                  keyboardType="email-address"
                  style={styles.formInput}
                  disabled={disabled}
                />
              </CardItem>
              <CardItem
                style={[
                  styles.formInputCardItem,
                  { backgroundColor: "#E1E1E133" }
                ]}
              >
                <Icon
                  type="MaterialIcons"
                  name="smartphone"
                  style={styles.icon}
                />

                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    style={{ flexDirection: "row" }}
                    onPress={() => this.setModalVisible(true)}
                  >
                    <Image
                      style={{ width: 18, height: 15, marginTop: 5 }}
                      source={{ uri: countryFlag[this.state.cca2] }}
                    />
                    <Text
                      style={{
                        color: "#FFF",
                        fontSize: 16,
                        paddingLeft: 5,
                        paddingRight: 5
                      }}
                    >
                      +{this.state.callingCode}
                    </Text>
                    <Icon
                      name="md-arrow-dropdown"
                      type="Ionicons"
                      style={{
                        fontSize: 14,
                        color: "#FFF",
                        paddingTop: 5,
                        width: 14
                      }}
                    />
                  </TouchableOpacity>
                </View>

                <Input
                  ref={input => (this.phoneInput = input)}
                  placeholder={strings("signup.placeholder3")}
                  placeholderTextColor="#E1E1E180"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    this.passwordInput._root.focus();
                  }}
                  onChangeText={phone => this.setState({ phone })}
                  value={phone}
                  keyboardType="phone-pad"
                  style={[styles.passwordInput]}
                  disabled={disabled}
                />
              </CardItem>
              <CardItem
                style={[
                  styles.formInputCardItem,
                  { backgroundColor: "#E1E1E133" }
                ]}
              >
                <Icon
                  name="visibility-off"
                  type="MaterialIcons"
                  style={styles.icon}
                />
                <Input
                  ref={input => (this.passwordInput = input)}
                  placeholder={strings("signup.placeholder4")}
                  secureTextEntry
                  placeholderTextColor="#E1E1E180"
                  onChangeText={password => this.setState({ password })}
                  value={password}
                  style={styles.passwordInput}
                  disabled={disabled}
                />
              </CardItem>

              <CardItem
                button
                style={[
                  styles.formButtonCardItem,
                  { marginTop: 10, paddingTop: 0, paddingBottom: 0 }
                ]}
                onPress={this.register}
                disabled={disabled || !name || !phone || !password}
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
                    {strings("signup.register")}
                  </Text>
                </View>
              </CardItem>
              <CardItem
                style={{ backgroundColor: "transparent", paddingTop: 0 }}
              >
                <Body>
                  <Text
                    style={[
                      styles.hasAccount,
                      { fontSize: 12, color: "#FFFFFFCC" }
                    ]}
                    onPress={disabled ? undefined : this.props.onPressLogin}
                  >
                    {strings("signup.hasAccount")}
                  </Text>
                </Body>
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

            <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => this.setModalVisible(false)}
            >
              <TouchableWithoutFeedback
                onPress={() => this.setModalVisible(false)}
              >
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "#FFF"
                  }}
                />
              </TouchableWithoutFeedback>

              <View
                style={{
                  flex: 1
                }}
              >
                <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                  <Item style={{ borderColor: "transparent" }}>
                    <Icon
                      name="arrow-back"
                      type="MaterialIcons"
                      onPress={() => this.setModalVisible(false)}
                      style={{
                        transform: [{ rotateY: isRTL ? "180deg" : "0deg" }]
                      }}
                    />
                    <Input
                      placeholder={strings("signup.search")}
                      value={searchText}
                      onChangeText={searchText => this.setState({ searchText })}
                      placeholderTextColor="#00000061"
                      style={{ fontSize: 16 }}
                    />
                    <Icon
                      name="close"
                      type="MaterialIcons"
                      onPress={() => this.setState({ searchText: "" })}
                    />
                  </Item>
                </View>
                <List>
                  <FlatList
                    data={
                      searchText
                        ? countries.filter(c =>
                            c.name.common
                              .toLowerCase()
                              .includes(searchText.toLowerCase())
                          )
                        : countries
                    }
                    keyExtractor={item => item.cca2}
                    renderItem={({ item }) => (
                      <ListItem avatar>
                        <TouchableOpacity
                          style={{ flexDirection: "row" }}
                          onPress={() => this.selectCountry(item)}
                        >
                          <Left>
                            <Image
                              style={{ width: 32, height: 20 }}
                              source={{ uri: countryFlag[item.cca2] }}
                            />
                          </Left>

                          <Body>
                            <Text style={{ fontSize: 16, color: "#000000DE" }}>
                              {item.name.common}
                            </Text>
                          </Body>

                          <Right>
                            <Text style={{ fontSize: 14, color: "#666666DE" }}>
                              +{item.callingCode}
                            </Text>
                          </Right>
                        </TouchableOpacity>
                      </ListItem>
                    )}
                  />
                </List>
              </View>
            </Modal>
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}
export default Register;
