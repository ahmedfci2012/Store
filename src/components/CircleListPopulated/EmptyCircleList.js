import React, { Component } from "react";
import {
  View,
  Image,
  Modal,
  TouchableHighlight,
  Alert,
  Dimensions,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  PanResponder
} from "react-native";
import {
  Content,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Card,
  CardItem,
  DeckSwiper,
  Container
} from "native-base";

const { width, height } = Dimensions.get("window");
const styles = {
  Header: {
    backgroundColor: "#345C65"
  },
  logoCard: {
    justifyContent: "center",
    alignItems: "center"
  },
  transparentCardItem: {
    backgroundColor: "transparent",
    paddingTop: 0.1671875 * height
  },
  icon: {
    color: "#FFFFFF"
  },
  dontHaveIncident: {
    alignSelf: "center",
    fontSize: 20,
    justifyContent: "center",
    color: "#666666"
  },
  whatAreCircle: {
    justifyContent: "center"
  }
};

class EmptyCircleList extends Component {
  state = {
    modalCircleVisible: false
  };
  setModalCircleVisible(visible) {
    this.setState({ modalCircleVisible: visible });
  }

  render() {
    const { circles, strings, isRTL } = this.props;
    return (
      <Container>
        <Content>
          <Card transparent style={styles.logoCard}>
            <CardItem style={styles.transparentCardItem}>
              <Image source={require("../assets/Group27.png")} />
            </CardItem>
          </Card>
          <Card transparent>
            <CardItem style={{ paddingTop: 0, paddingBottom: 0 }}>
              <Body>
                <Text style={styles.dontHaveIncident}>
                  {strings("circles.empty.note1")}
                </Text>
                <Text style={styles.dontHaveIncident}>
                  {strings("circles.empty.note2")}
                </Text>
              </Body>
            </CardItem>

            <CardItem style={styles.whatAreCircle}>
              <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.modalCircleVisible}
                onRequestClose={() => this.setModalCircleVisible(false)}
              >
                <TouchableWithoutFeedback
                  onPress={() => this.setModalCircleVisible(false)}
                >
                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: "rgba(0,0,0,0.38)"
                    }}
                  />
                </TouchableWithoutFeedback>

                <View
                  style={{
                    top: 0.165625 * height,
                    paddingLeft: 16,
                    paddingRight: 16,
                    flex: 1
                  }}
                >
                  <DeckSwiper
                    ref={d => (this._deckSwiper = d)}
                    dataSource={circles}
                    renderItem={item => (
                      <TouchableWithoutFeedback>
                        <Card>
                          <CardItem>
                            <Text
                              style={{
                                fontSize: 20,
                                color: "rgba(0,0,0,0.87)"
                              }}
                            >
                              {item.name}
                            </Text>
                          </CardItem>
                          <CardItem
                            style={{
                              justifyContent: "center",
                              paddingTop: 0
                            }}
                          >
                            <Image source={item.image} />
                          </CardItem>
                          <CardItem style={{ paddingBottom: 0 }}>
                            <Text
                              style={{
                                fontSize: 16,
                                color: "rgba(0,0,0,0.54)"
                              }}
                            >
                              {item.text}
                            </Text>
                          </CardItem>

                          {item.name == "Circle" || item.name == "الدائرة" ? (
                            <CardItem
                              style={{
                                justifyContent: "center",
                                paddingBottom: 0
                              }}
                            >
                              <Icon
                                name="dot-single"
                                type="Entypo"
                                style={{
                                  color: "rgba(52,92,101, 0.80)",
                                  width: 20
                                }}
                                onPress={() =>
                                  this._deckSwiper._root.swipeLeft()
                                }
                              />
                              <Icon
                                name="dot-single"
                                type="Entypo"
                                style={{ color: "#CCCCCC" }}
                                onPress={() =>
                                  this._deckSwiper._root.swipeRight()
                                }
                              />
                            </CardItem>
                          ) : (
                            <CardItem
                              style={{
                                justifyContent: "center",
                                paddingBottom: 0
                              }}
                            >
                              <Icon
                                name="dot-single"
                                type="Entypo"
                                style={{ color: "#CCCCCC", width: 20 }}
                                onPress={() =>
                                  this._deckSwiper._root.swipeLeft()
                                }
                              />
                              <Icon
                                name="dot-single"
                                type="Entypo"
                                style={{ color: "rgba(52,92,101, 0.80)" }}
                                onPress={() =>
                                  this._deckSwiper._root.swipeRight()
                                }
                              />
                            </CardItem>
                          )}
                          <CardItem style={{ paddingTop: 0 }}>
                            <Right style={{ flex: 1 }}>
                              <TouchableHighlight
                                onPress={() => {
                                  this.setModalCircleVisible(false);
                                }}
                              >
                                <Text style={{ color: "#673AB7" }}>
                                  {strings("circles.empty.cancel")}
                                </Text>
                              </TouchableHighlight>
                            </Right>
                          </CardItem>
                        </Card>
                      </TouchableWithoutFeedback>
                    )}
                  />
                </View>
              </Modal>
              <TouchableHighlight
                onPress={() => {
                  this.setModalCircleVisible(true);
                }}
              >
                <Body>
                  <Text style={{ color: "#666666" }}>
                    {strings("circles.empty.whatAreCircles")}
                  </Text>
                </Body>
              </TouchableHighlight>
            </CardItem>
          </Card>
        </Content>

        <View
          style={{
            width: "100%",
            justifyContent: "center",
            position: "absolute",
            bottom: 0.0859375 * height
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: "#666666" }}>
              {strings("circles.empty.joinACircle")}
            </Text>
          </View>
          <View style={{ marginLeft: 0.602777778 * width }}>
            <Image
              source={require("../assets/Path19.png")}
              style={{
                width: 0.1555 * width,
                transform: [{ rotateY: isRTL ? "180deg" : "0deg" }]
              }}
            />
          </View>
        </View>
      </Container>
    );
  }
}

export default EmptyCircleList;
