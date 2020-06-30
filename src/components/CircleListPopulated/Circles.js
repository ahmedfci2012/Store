import React, { Component } from "react";
import { View, Image, FlatList } from "react-native";
import {
  Content,
  Left,
  Body,
  Icon,
  Text,
  Thumbnail,
  List,
  ListItem
} from "native-base";

class Circles extends Component {
  render() {
    const { circles, circleItem, strings, isRTL } = this.props;
    return (
      <Content>
        <List>
          <ListItem noBorder>
            <Text style={{ color: "#0000008A" }}>
              {strings("circles.circlesjoined")}
            </Text>
          </ListItem>

          <FlatList
            data={circles}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <ListItem avatar onPress={() => circleItem(item)}>
                <Left>
                  {!item.imageSrc ? (
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#CCC",
                        borderRadius: 50,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Icon
                        name="map-marker"
                        type="MaterialCommunityIcons"
                        style={{
                          width: 30,
                          height: 30,
                          fontSize: 30,
                          color: "#999"
                        }}
                      />
                    </View>
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
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    style={{ fontSize: 14, color: "#00000061" }}
                  >
                    {item.description}
                  </Text>

                  <View style={{ flexDirection: "row", paddingTop: 5 }}>
                    {item.users.length ? (
                      <View
                        style={{
                          flexDirection: "row",
                          flex: 1,
                          justifyContent: "flex-start",
                          alignItems: "center"
                        }}
                      >
                        <Icon
                          name="users"
                          type="FontAwesome"
                          style={{
                            width: 14,
                            height: 11,
                            color: "#999999DE",
                            fontSize: 12
                          }}
                        />
                        <Text
                          style={{
                            color: "#999999DE",
                            fontSize: 12,
                            paddingLeft: isRTL ? undefined : 5,
                            paddingRight: isRTL ? 5 : undefined
                          }}
                          ellipsizeMode="tail"
                          numberOfLines={1}
                        >
                          {item.users.length} {strings("circles.members")}
                        </Text>
                      </View>
                    ) : null}

                    {item.incidents.length ? (
                      <View
                        style={{
                          flexDirection: "row",
                          flex: 1,
                          justifyContent: "flex-start",
                          alignItems: "center"
                        }}
                      >
                        <Icon
                          name="location-pin"
                          type="Entypo"
                          style={{ color: "#999999DE", fontSize: 12 }}
                        />
                        <Text
                          style={{
                            color: "#999999DE",
                            fontSize: 12,
                            paddingLeft: 5
                          }}
                          ellipsizeMode="tail"
                          numberOfLines={1}
                        >
                          {item.incidents.length}
                          {strings("circles.incidents")}
                        </Text>
                      </View>
                    ) : null}
                  </View>
                </Body>
              </ListItem>
            )}
          />
        </List>
      </Content>
    );
  }
}

export default Circles;
