import React from "react";
import { View } from "react-native";
import { Container, Content } from "native-base";

import HeaderSection from "./HeaderSection";
import Members from "./Members";
import MediaSection from "./MediaSection";
import { strings, isRTL } from "../../locale";

class UserProfile extends React.Component {
  render() {
    const { user, owner } = this.props;
    return (
      <Container>
        <Content style={{ backgroundColor: "#f5f5f5" }}>
          <HeaderSection
            user={user}
            back={this.props.onPressBack}
            edit={this.props.onPressEdit}
            owner={owner}
            isRTL={isRTL}
          />

          <View
            style={{
              paddingLeft: 8,
              paddingRight: 8,
              backgroundColor: "#f5f5f5",
              paddingBottom: 10
            }}
          >
            <Members user={user} strings={strings} />

            {owner ? null : (
              <MediaSection
                user={user}
                share={this.props.onPressShare}
                report={this.props.onPressReport}
                follow={this.props.onPressFollow}
                strings={strings}
              />
            )}
          </View>
        </Content>
      </Container>
    );
  }
}

export default UserProfile;
