import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback,
  FlatList
} from "react-native";
import {
  Icon,
  Text,
  Card,
  CardItem,
  Input,
  Item,
  ListItem,
  Left,
  Body,
  Right,
  List
} from "native-base";
const R = require("ramda");
import countryFlag from "../countryFlags";

const styles = {
  cardItemPadding: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8
  },
  formInputCardItem: {
    height: 42,
    flex: 1,

    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: 8,
    marginRight: 8,

    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#999999",
    backgroundColor: "#00000007",
    alignItems: "center",
    alignSelf: "center"
  }
};
import countries from "../countries";

/*
 
const getCounryCode = cca2 => {
  const country = countries.find(country => country.cca2 === cca2);
  return R.path(["callingCode", 0], country) || "";
};

*/

class PhoneAndEmail extends React.Component {
  state = {
    modalVisible: false,
    searchText: "",
    disabled: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  selectCountry(item) {
    this.setModalVisible(false);
    const { callingCode } = item;
    this.props.changeCountry(callingCode[0]);
  }

  render() {
    const {
      email,
      phone,
      onChangeField,
      callingCode,
      strings,
      isRTL
    } = this.props;
    const { searchText, disabled } = this.state;
    return (
      <Card transparent style={{ backgroundColor: "#FFF", marginBottom: 10 }}>
        <CardItem style={[styles.cardItemPadding, { paddingLeft: 5 }]}>
          <Icon
            name="mail"
            style={{ fontSize: 16, color: "#999999", width: 20 }}
          />
          <Text
            style={[
              this.props.style.headerColor,
              this.props.style.headerSize,
              { paddingRight: isRTL ? 5 : undefined }
            ]}
          >
            {strings("editProfile.contactInformation")}
          </Text>
        </CardItem>

        <CardItem
          style={[styles.cardItemPadding, { paddingBottom: 5, paddingTop: 0 }]}
        >
          <Text
            style={[this.props.style.labelColor, this.props.style.labelSize]}
          >
            {strings("editProfile.phoneNumber")}
          </Text>
        </CardItem>
        <CardItem
          style={styles.formInputCardItem}
          pointerEvents={!this.props.disabled ? "auto" : "none"}
        >
          <View style={{ flexDirection: "row", marginLeft: -10 }}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => this.setModalVisible(true)}
            >
              <Text
                style={{
                  color: "#333333",
                  fontSize: 16,
                  paddingLeft: 5,
                  paddingRight: 5
                }}
              >
                +{callingCode}
              </Text>
              <Icon
                name="md-arrow-dropdown"
                type="Ionicons"
                style={{ fontSize: 14, color: "#333333", paddingTop: 5 }}
              />
            </TouchableOpacity>
          </View>

          <Input
            placeholder={strings("editProfile.placeholder3")}
            value={phone}
            onChangeText={onChangeField("phone")}
            placeholderTextColor="#999999"
            autoCorrect={false}
            keyboardType="phone-pad"
            style={{
              marginLeft: -21,
              color: "#333333",
              fontSize: 16
            }}
            disabled={this.props.disabled}
          />
        </CardItem>
        <CardItem
          style={{
            justifyContent: "flex-end",
            paddingBottom: 0,
            paddingTop: 0,
            paddingRight: 8,
            paddingLeft: 8
          }}
        >
          <Text
            style={[this.props.style.labelColor, this.props.style.labelSize]}
          >
            0 / 50
          </Text>
        </CardItem>

        <CardItem
          style={[styles.cardItemPadding, { paddingBottom: 5, paddingTop: 0 }]}
        >
          <Text
            style={[this.props.style.labelColor, this.props.style.labelSize]}
          >
            {strings("editProfile.emailAddress")}
          </Text>
        </CardItem>
        <CardItem
          style={[styles.cardItemPadding, { paddingTop: 0, paddingBottom: 0 }]}
        >
          <Input
            placeholder={strings("editProfile.placeholder4")}
            value={email}
            onChangeText={onChangeField("email")}
            placeholderTextColor="#999999"
            autoCorrect={false}
            keyboardType="email-address"
            style={{
              backgroundColor: "rgba(0,0,0,0.03)",
              borderWidth: 1,
              borderColor: "#999999",
              borderRadius: 5,
              height: 40,
              color: "#333333",
              fontSize: 16,
              paddingLeft: 14
            }}
            disabled={this.props.disabled}
          />
        </CardItem>
        <CardItem
          style={{
            justifyContent: "flex-end",
            paddingBottom: 5,
            paddingTop: 0,
            paddingRight: 8,
            paddingLeft: 8
          }}
        >
          <Text
            style={[this.props.style.labelColor, this.props.style.labelSize]}
          >
            0 / 50
          </Text>
        </CardItem>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => this.setModalVisible(false)}>
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
                />
                <Input
                  placeholder="Search"
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
      </Card>
    );
  }
}
export default PhoneAndEmail;
