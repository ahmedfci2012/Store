import React from "react";
import {
  Modal,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions
} from "react-native";
import {
  Left,
  Icon,
  Body,
  Right,
  Text,
  List,
  ListItem,
  Thumbnail
} from "native-base";

const { height } = Dimensions.get("window");

class Step2 extends React.Component {
  render() {
    const { selectedCircle, selectCircleType, strings } = this.props;

    return (
      <View
        style={{
          paddingLeft: 8,
          paddingRight: 8,
          backgroundColor: "#FFF"
        }}
      >
        <List style={{ height: 0.73125 * height }}>
          <ListItem noBorder>
            <Text style={{ color: "#0000008A", fontWeight: "500" }}>
              {strings("createIncident.note2")} "{selectedCircle.name}"
            </Text>
          </ListItem>
          <FlatList
            data={selectedCircle.incidentTypes}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <ListItem avatar>
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                  onPress={() => selectCircleType(item)}
                >
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
                  </Body>
                  <Right />
                </TouchableOpacity>
              </ListItem>
            )}
          />
        </List>
      </View>
    );
  }
}

export default Step2;
