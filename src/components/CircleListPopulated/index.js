import React, { Component } from "react";
import { View, Image, FlatList } from "react-native";
import {
  Container,
  Header,
  Fab,
  Title,
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
import EmptyCircleList from "./EmptyCircleList";
import Circles from "./Circles";
import { strings, isRTL } from "../../locale";

const styles = {
  Header: {
    backgroundColor: "#345C65"
  }
};

const modalcircles = [
  {
    text: strings("circles.empty.circleDes"),
    name: strings("circles.empty.circles"),
    image: require("../assets/Group27.png")
  },
  {
    text: strings("circles.empty.incidentsDes"),
    name: strings("circles.empty.incidents"),
    image: require("../assets/route.png")
  }
];

class CircleListPopulated extends Component {
  circleItem = circle => {
    this.props.onPressCircle(circle);
  };
  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor="#00000033"
          transparent
          style={styles.Header}
        >
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{strings("circles.title")}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="filter" type="FontAwesome" />
            </Button>
            <Button transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="more-vert" type="MaterialIcons" />
            </Button>
          </Right>
        </Header>
        {this.props.circles.length ? (
          <Circles
            circles={this.props.circles} // data
            circleItem={this.circleItem}
            strings={strings}
            isRTL={isRTL}
          />
        ) : (
          <EmptyCircleList
            circles={modalcircles} // model
            strings={strings}
            isRTL={isRTL}
          />
        )}

        <Fab
          active={true}
          direction="up"
          style={{ backgroundColor: "#FF5722" }}
          position="bottomRight"
          onPress={this.props.onPressJoinCircle}
        >
          <Icon style={{ paddingBottom: 8 }}>
            <Image source={require("../assets/Group30.png")} />
          </Icon>
        </Fab>
      </Container>
    );
  }
}

export default CircleListPopulated;
