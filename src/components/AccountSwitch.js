import React, { Component } from "react";
import { View, FlatList } from "react-native";
import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Left,
  Right,
  Body,
  Text,
  Button,
  Icon,
  Thumbnail,
  List,
  ListItem
} from "native-base";
import { strings, isRTL } from "../locale";

const styles = {
  Header: {
    backgroundColor: "#345C65"
  }
};

class AccountSwitch extends Component {
  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor="#00000033"
          transparent
          style={styles.Header}
        >
          <Left>
            <Button transparent onPress={this.props.onPressCancel}>
              <Icon
                name="close"
                type="MaterialCommunityIcons"
                style={{
                  color: "#FFF",
                  transform: [{ rotateY: isRTL ? "180deg" : "0deg" }]
                }}
              />
            </Button>
          </Left>
          <Body>
            <Title>{strings("accountSwitch.title")}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem noBorder>
              <Text style={{ color: "#0000008A", fontWeight: "500" }}>
                {strings("accountSwitch.personalAccount")}
              </Text>
            </ListItem>
            <ListItem
              avatar
              noBorder
              onPress={() => this.props.onSwitchAccount(this.props.user)}
            >
              <Left>
                <Thumbnail
                  source={this.props.user.imageSrc}
                  style={{ width: 40, height: 40 }}
                />
              </Left>
              <Body>
                <Text style={{ fontSize: 16, color: "#000000DE" }}>
                  {this.props.user.name}
                </Text>
                <Text style={{ fontSize: 14, color: "#00000061" }}>
                  {this.props.user.email}
                </Text>
              </Body>
              <Right style={{ justifyContent: "center" }}>
                {this.props.user.isActive ? (
                  <Icon
                    name="check"
                    type="MaterialIcons"
                    style={{
                      color: "#ff5722",
                      width: 20,
                      height: 20
                    }}
                  />
                ) : null}
              </Right>
            </ListItem>
          </List>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#0000001E"
            }}
          />
          <List>
            <ListItem noBorder>
              <Text style={{ color: "#0000008A", fontWeight: "500" }}>
                {strings("accountSwitch.organizationAccount")}
              </Text>
            </ListItem>

            <FlatList
              data={this.props.orgs}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <ListItem
                  noBorder
                  avatar
                  onPress={() => this.props.onSwitchAccount(item)}
                >
                  <Left>
                    {!item.imageSrc ? (
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: "#1C0BAE19",
                          borderRadius: 50,
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      />
                    ) : (
                      <Thumbnail
                        source={item.imageSrc}
                        style={{ width: 40, height: 40 }}
                      />
                    )}
                  </Left>

                  <Body>
                    <Text style={{ fontSize: 16, color: "#000000DE" }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{ fontSize: 14, color: "#00000061" }}
                      ellipsizeMode="tail"
                      numberOfLines={1}
                    >
                      {item.description}
                    </Text>
                  </Body>
                  <Right style={{ justifyContent: "center" }}>
                    {item.isActive ? (
                      <Icon
                        name="check"
                        type="MaterialIcons"
                        style={{
                          color: "#ff5722",
                          width: 20,
                          height: 20
                        }}
                      />
                    ) : null}
                  </Right>
                </ListItem>
              )}
            />
          </List>
        </Content>
      </Container>
    );
  }
}

export default AccountSwitch;
