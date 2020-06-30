import React from "react";
import { View } from "react-native";
import { Icon, Text, Card, CardItem } from "native-base";
import { strings } from "../../locale";

class MediaSection extends React.Component {
  render() {
    const { strings } = this.props;
    return (
      <Card transparent style={{ marginBottom: 10 }}>
        <CardItem style={{ justifyContent: "space-around" }}>
          <View>
            <Icon
              name="share"
              type="MaterialIcons"
              style={{
                fontSize: 30,
                color: "#004555",
                alignSelf: "center"
              }}
              onPress={this.props.share}
            />
            <Text style={{ fontSize: 12, color: "#999999" }}>
              {strings("userProfile.share")}
            </Text>
          </View>
          <View>
            <Icon
              name="notifications-active"
              type="MaterialIcons"
              style={{
                fontSize: 30,
                color: "#FF5722",
                alignSelf: "center"
              }}
              onPress={this.props.follow}
            />
            <Text style={{ fontSize: 12, color: "#999999" }}>
              {strings("userProfile.follow")}
            </Text>
          </View>
          <View>
            <Icon
              name="sentiment-dissatisfied"
              type="MaterialIcons"
              style={{
                fontSize: 30,
                color: "#C70039DE",
                alignSelf: "center"
              }}
              onPress={this.props.report}
            />
            <Text style={{ fontSize: 12, color: "#999999" }}>
              {strings("userProfile.report")}
            </Text>
          </View>
        </CardItem>
      </Card>
    );
  }
}
export default MediaSection;
