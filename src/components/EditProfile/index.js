import React from "react";
import {
  Container,
  Content,
  Header,
  Left,
  Icon,
  Button,
  Body,
  Title,
  Right,
  Text
} from "native-base";
import ImagePicker from "react-native-image-picker";

import NameAndBio from "./NameAndBio";
import PhoneAndEmail from "./PhoneAndEmail";
import Camera from "./Camera";
import { strings, isRTL } from "../../locale";
import LoadingContainer from "../LoadingContainer";

const style = {
  headerColor: { color: "rgba(0,0,0,0.54)" },
  labelColor: { color: "#999999" },
  headerSize: { fontSize: 12 },
  labelSize: { fontSize: 12 },
  borderColor: { borderColor: "#999999" },
  placeholderTextColor: { color: "#999999" },
  backgroundColor: { backgroundColor: "rgba(0,0,0,0.3)" }
};

class EditProfile extends React.Component {
  state = {};

  changeField = name => value => {
    this.setState({
      [name]: value
    });
  };

  takePicture = () => {
    const options = {
      quality: 0.5,
      maxHeight: 600,
      mediaType: "photo",
      storageOptions: {
        path: "images"
      }
    };
    ImagePicker.showImagePicker(options, async response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const localImageUri = response.uri;
        this.setState({
          imageSrc: {
            uri: localImageUri
          }
        });
      }
    });
  };

  save = () => {
    if (Object.keys(this.state).length > 0) {
      this.props.onPressSave(this.state);
    }
  };

  changeCountry = callingCode => {
    this.setState({ callingCode: callingCode });
  };

  render() {
    const user = {
      ...this.props.user,
      ...this.state
    };

    return (
      <LoadingContainer loading={this.props.loading}>
        <Container>
          <Header
            androidStatusBarColor="#00000033"
            transparent
            style={{ backgroundColor: "#345c65" }}
          >
            <Left>
              <Button
                transparent
                onPress={
                  this.props.disabled ? undefined : this.props.onPressBack
                }
                //disabled={this.props.disabled}
              >
                <Icon
                  name="arrowleft"
                  type="AntDesign"
                  style={{
                    color: "#FFF",
                    transform: [{ rotateY: isRTL ? "180deg" : "0deg" }]
                  }}
                />
              </Button>
            </Left>
            <Body>
              <Title>{this.props.user.name} </Title>
            </Body>
            <Right>
              <Button transparent onPress={this.save}>
                <Text style={{ color: "#FFF" }}>
                  {strings("editProfile.save")}
                </Text>
              </Button>
            </Right>
          </Header>
          <Content
            style={{
              paddingLeft: 8,
              paddingRight: 8,
              backgroundColor: "#f5f5f5"
            }}
          >
            <Camera
              takePicture={this.takePicture}
              imageSrc={user.imageSrc}
              disabled={this.props.disabled}
              strings={strings}
              isRTL={isRTL}
            />

            <NameAndBio
              style={style}
              name={user.name}
              bio={user.bio}
              onChangeField={this.changeField}
              lang={this.props.lang}
              disabled={this.props.disabled}
              strings={strings}
              isRTL={isRTL}
            />

            <PhoneAndEmail
              style={style}
              callingCode={user.callingCode}
              phone={user.phone}
              email={user.email}
              changeCountry={this.changeCountry}
              onChangeField={this.changeField}
              disabled={this.props.disabled}
              strings={strings}
              isRTL={isRTL}
            />
          </Content>
        </Container>
      </LoadingContainer>
    );
  }
}

export default EditProfile;
