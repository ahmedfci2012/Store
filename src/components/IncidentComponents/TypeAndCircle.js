import React from "react";
import { View } from "react-native";
import { Icon, Text, Card, CardItem, Picker } from "native-base";

const styles = {
  cardItemPadding: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8
  }
};
class TypeAndCircle extends React.Component {
  render() {
    const selectedCircle = this.props.circles.find(
      c => c.id === this.props.circleId
    );

    return (
      <Card transparent>
        <CardItem style={[styles.cardItemPadding, { paddingLeft: 5 }]}>
          <Icon
            name="apps"
            type="MaterialIcons"
            style={{ fontSize: 16, color: "#999999", width: 20 }}
          />
          <Text
            style={[this.props.style.headerColor, this.props.style.headerSize]}
          >
            Type & Circle
          </Text>
        </CardItem>

        <CardItem
          style={[styles.cardItemPadding, { paddingBottom: 5, paddingTop: 0 }]}
        >
          <Text
            style={[this.props.style.labelColor, this.props.style.labelSize]}
          >
            Circle
          </Text>
        </CardItem>

        <CardItem style={[styles.cardItemPadding, { paddingTop: 0 }]}>
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.03)",
              borderWidth: 1,
              borderColor: "#999999",
              borderRadius: 5,
              paddingRight: 10
            }}
          >
            <Picker
              note
              mode="dropdown"
              style={{ width: undefined, height: 40 }}
              selectedValue={this.props.circleId}
              onValueChange={this.props.changeCircleId}
            >
              <Picker.Item label="" value="" />
              {this.props.circles.map(circle => {
                return (
                  <Picker.Item
                    key={circle.id}
                    label={circle.name}
                    value={circle.id}
                  />
                );
              })}
            </Picker>
          </View>
        </CardItem>

        {selectedCircle ? (
          <View>
            <CardItem
              style={[
                styles.cardItemPadding,
                { paddingBottom: 5, paddingTop: 0 }
              ]}
            >
              <Text
                style={[
                  this.props.style.labelColor,
                  this.props.style.labelSize
                ]}
              >
                Type (type of circle)
              </Text>
            </CardItem>
            <CardItem style={[styles.cardItemPadding, { paddingTop: 0 }]}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "rgba(0,0,0,0.03)",
                  borderWidth: 1,
                  borderColor: "#999999",
                  borderRadius: 5,
                  paddingRight: 10
                }}
              >
                <Picker
                  note
                  mode="dropdown"
                  style={{ width: undefined, height: 40 }}
                  selectedValue={this.props.typeId}
                  onValueChange={this.props.changeTypeId}
                >
                  <Picker.Item label="" value="" />
                  {selectedCircle.incidentTypes.map(type => {
                    return (
                      <Picker.Item
                        key={type.id}
                        label={type.name}
                        value={type.id}
                      />
                    );
                  })}
                </Picker>
              </View>
            </CardItem>
          </View>
        ) : null}
      </Card>
    );
  }
}
export default TypeAndCircle;
