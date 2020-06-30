import React from "react";
import { Modal, View, Dimensions } from "react-native";
import {
  Container,
  Header,
  Left,
  Icon,
  Button,
  Body,
  Title,
  Right,
  Text,
  Subtitle,
  Footer
} from "native-base";
import ImagePicker from "react-native-image-picker";
import StepIndicator from "react-native-step-indicator";

import ChooseLocation from "../IncidentComponents/ChooseLocation";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import LoadingContainer from "../LoadingContainer";
import { strings, isRTL, moment } from "../../locale";

const { height } = Dimensions.get("window");
const style = {
  headerColor: { color: "rgba(0,0,0,0.54)" },
  labelColor: { color: "#999999" },
  headerSize: { fontSize: 12 },
  labelSize: { fontSize: 12 },
  borderColor: { borderColor: "#999999" },
  placeholderTextColor: { color: "#999999" },
  backgroundColor: { backgroundColor: "rgba(0,0,0,0.3)" }
};
const labels = [
  strings("createIncident.step1"),
  strings("createIncident.step2"),
  strings("createIncident.step3")
];

HeaderComponent = props => (
  <Header
    androidStatusBarColor="#00000033"
    transparent
    style={{ backgroundColor: "#345c65" }}
  >
    <Left style={{ flex: 1 }}>
      <Button
        transparent
        onPress={!props.disabled ? props.onPressBack : undefined}
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
    <Body style={{ flex: 4 }}>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Body>
    <Right style={{ flex: !props.create ? 0.5 : undefined }}>
      {props.create ? (
        <Button transparent onPress={props.create}>
          <Text style={{ color: "#FFF" }}>
            {strings("createIncident.create")}
          </Text>
        </Button>
      ) : null}
    </Right>
  </Header>
);

const stepIndicatorStyles = {
  stepIndicatorSize: 40,
  currentStepIndicatorSize: 40,

  currentStepStrokeWidth: 0,
  stepStrokeWidth: 0,

  stepStrokeFinishedColor: "#FF5722",
  stepStrokeUnFinishedColor: "#DDDDDD",

  separatorStrokeWidth: 8,
  separatorFinishedColor: "#FF5722",
  separatorUnFinishedColor: "#DDDDDD",

  stepStrokeCurrentColor: "#FF5722", // circle color
  stepIndicatorFinishedColor: "#FF5722",
  stepIndicatorUnFinishedColor: "#DDDDDD",
  stepIndicatorCurrentColor: "#FF5722",

  stepIndicatorLabelFontSize: 16,
  currentStepIndicatorLabelFontSize: 16,

  stepIndicatorLabelCurrentColor: "#FFF",
  stepIndicatorLabelFinishedColor: "#FFF",
  stepIndicatorLabelUnFinishedColor: "#FFF",

  labelColor: "#AAAAAA",
  labelSize: 12,
  currentStepLabelColor: "#AAAAAA"
};

class IncidentCreate extends React.Component {
  state = {
    title: "",
    description: "",
    selectedCircle: {}, // the circle you selected
    selectedType: {}, // the type you selected
    location: this.props.location,
    imageSrc: null,
    chooseLocatioinModalIsVisible: false,
    currentPosition: 0,
    show: true
  };

  changeField = name => value => {
    this.setState({
      [name]: value
    });
  };

  changeCircleId = circleId => {
    this.setState({ circleId });
  };

  changeTypeId = typeId => {
    this.setState({ typeId });
  };

  backIndicator = () => {
    this.setState({ currentPosition: this.state.currentPosition - 1 });
  };

  toggleChooseLocationModal = () => {
    this.setState({
      chooseLocatioinModalIsVisible: !this.state.chooseLocatioinModalIsVisible
    });
  };

  onSaveLocation = location => {
    this.setState({
      location,
      chooseLocatioinModalIsVisible: false
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

  create = () => {
    const {
      title,
      description,
      selectedCircle,
      selectedType,
      location,
      imageSrc
    } = this.state;

    const circleId = selectedCircle.id;
    const typeId = selectedType.id;
    this.props.onPressCreate({
      title,
      description,
      circleId,
      typeId,
      location,
      imageSrc
    });
  };

  selectCircle = item => {
    this.setState({
      currentPosition: 1,
      selectedCircle: item
    });
  };

  selectCircleType = item => {
    this.setState({
      currentPosition: 2,
      selectedType: item
    });
  };

  onFocus = () => {
    this.setState({
      show: false
    });
  };

  onBlur = () => {
    this.setState({
      show: true
    });
  };

  render() {
    const { circles } = this.props;
    const { selectedCircle, selectedType } = this.state;
    const {
      title,
      description,
      location,
      imageSrc,
      chooseLocatioinModalIsVisible
    } = this.state;
    return (
      <LoadingContainer loading={this.props.loading}>
        <Container style={{ backgroundColor: "#f5f5f5" }}>
          {this.state.currentPosition === 0 ? (
            <View>
              <HeaderComponent
                title={strings("createIncident.title1")}
                subtitle={strings("createIncident.subTitle1")}
                onPressBack={this.props.onPressBack}
                disabled={this.props.disabled}
              />
              <Step1
                circles={circles}
                stepIndicatorStyles={stepIndicatorStyles}
                selectCircle={this.selectCircle} // function
                backIndicator={this.backIndicator}
                onPressBack={this.props.onPressBack}
                onStepPress={this.onStepPress}
                strings={strings}
              />
            </View>
          ) : null}

          {this.state.currentPosition === 1 ? (
            <View>
              <HeaderComponent
                title={strings("createIncident.title2")}
                subtitle={strings("createIncident.subTitle2")}
                onPressBack={this.backIndicator}
                disabled={this.props.disabled}
              />
              <Step2
                selectedCircle={selectedCircle}
                stepIndicatorStyles={stepIndicatorStyles}
                selectCircleType={this.selectCircleType} // function
                backIndicator={this.backIndicator}
                onStepPress={this.onStepPress}
                strings={strings}
              />
            </View>
          ) : null}

          {this.state.currentPosition == 2 ? (
            <View>
              <HeaderComponent
                title={strings("createIncident.title3")}
                subtitle={strings("createIncident.subTitle3")}
                onPressBack={this.backIndicator}
                disabled={this.props.disabled}
                create={this.create}
              />
              <Step3
                toggleChooseLocationModal={this.toggleChooseLocationModal}
                takePicture={this.takePicture}
                location={location}
                imageSrc={imageSrc}
                type={selectedType}
                circle={selectedCircle}
                style={style}
                title={title}
                description={description}
                onChangeField={this.changeField}
                lang={this.props.lang}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onPressChange={this.toggleChooseLocationModal}
                currentLocation={this.props.currentLocation}
                disabled={this.props.disabled}
                strings={strings}
                isRTL={isRTL}
                moment={moment}
              />
            </View>
          ) : null}

          <Footer
            style={{
              flexDirection: "column",
              height: 0.14375 * height,
              backgroundColor: "#f5f5f5"
            }}
          >
            <StepIndicator
              customStyles={stepIndicatorStyles}
              currentPosition={this.state.currentPosition}
              stepCount={3}
              labels={labels}
            />
          </Footer>

          <Modal
            animationType="fade"
            transparent={false}
            visible={chooseLocatioinModalIsVisible}
            onRequestClose={this.toggleChooseLocationModal}
          >
            <ChooseLocation
              location={location}
              onSubmit={this.onSaveLocation}
              onCancel={this.toggleChooseLocationModal}
            />
          </Modal>
        </Container>
      </LoadingContainer>
    );
  }
}

export default IncidentCreate;
