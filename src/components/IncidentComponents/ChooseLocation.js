import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Text, CardItem, Card, Icon } from "native-base";

import WebViewMap from "../WebViewMap";

export default class ChooseLocation extends Component {
  state = {
    region: {
      latitude: this.props.location.latitude,
      longitude: this.props.location.longitude
    },
    dragging: false
  };
  changeRegion = e => {
    this.state.dragging ||
      this.setState({
        dragging: true
      });
  };
  setRegion = e => {
    this.setState({
      region: e.region,
      dragging: false
    });
  };

  longPress = e => {
    this.setState({
      region: e.region
    });
  };

  submit = () => {
    const { region } = this.state;
    this.props.onSubmit({
      latitude: region.latitude,
      longitude: region.longitude
    });
  };
  render() {
    const { region, dragging } = this.state;
    return (
      <Container>
        <View style={styles.map}>
          <WebViewMap
            region={region}
            markers={[
              {
                id: 1,
                coordinate: this.props.location
              }
            ]}
            onRegionChange={this.changeRegion}
            onRegionChangeComplete={this.setRegion}
            onLongPress={this.longPress}
          />
        </View>
        <ChooseLocationIcon dragging={dragging} />
        <Card
          transparent
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            flexDirection: "row",
            flex: 1
          }}
        >
          <CardItem
            button
            onPress={this.props.onCancel}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <Text>Cancel</Text>
          </CardItem>
          <CardItem
            button
            onPress={this.submit}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <Text>Save</Text>
          </CardItem>
        </Card>
      </Container>
    );
  }
}

const ChooseLocationIcon = ({ dragging }) => {
  if (dragging) {
    return (
      <Icon
        type="FontAwesome"
        name="circle"
        style={{
          color: "#FF5722",
          fontSize: 10,
          position: "absolute",
          left: "50%",
          top: "50%",
          marginLeft: -5,
          marginTop: -5
        }}
      />
    );
  } else {
    return (
      <Icon
        type="FontAwesome"
        name="circle"
        style={{
          color: "#FF5722",
          fontSize: 20,
          position: "absolute",
          left: "50%",
          top: "50%",
          marginLeft: -10,
          marginTop: -10
        }}
      />
    );
  }
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
