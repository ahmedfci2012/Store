import React from "react";
import { View, Dimensions } from "react-native";
import { Content } from "native-base";

import TitleAndDescription from "../IncidentComponents/TitleAndDescription";
import CameraAndLocation from "../IncidentComponents/CameraAndLocation";
import CameraView from "../IncidentComponents/CameraView";
import MapView from "../IncidentComponents/MapView";
import CircleIncidentType from "../IncidentComponents/CircleIncidentType";

const { height } = Dimensions.get("window");

class Step3 extends React.Component {
  render() {
    const {
      toggleChooseLocationModal,
      takePicture,
      onChangeField,
      location,
      currentLocation,
      imageSrc,
      type,
      circle,
      style,
      title,
      description,
      lang,
      onFocus,
      onBlur,
      disabled,
      strings,
      isRTL,
      moment
    } = this.props;

    return (
      <View style={{ height: 0.73125 * height }}>
        <Content
          style={{
            paddingLeft: 8,
            paddingRight: 8,
            backgroundColor: "#f5f5f5"
          }}
        >
          <CameraAndLocation
            toggleChooseLocationModal={toggleChooseLocationModal}
            takePicture={takePicture}
            location={location}
            imageSrc={imageSrc}
            disabled={disabled}
            strings={strings}
          />

          <CircleIncidentType type={type} circle={circle} strings={strings} />

          <TitleAndDescription
            style={style}
            title={title}
            description={description}
            onChangeField={onChangeField}
            lang={lang}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            strings={strings}
            isRTL={isRTL}
          />

          <MapView
            imageSrc={require("../assets/MaskGroup5.png")}
            onPressChange={toggleChooseLocationModal}
            style={style}
            location={location}
            currentLocation={currentLocation}
            disabled={disabled}
            strings={strings}
            isRTL={isRTL}
          />

          <CameraView
            imageSrc={imageSrc}
            takePicture={takePicture}
            style={style}
            disabled={disabled}
            strings={strings}
            isRTL={isRTL}
          />
        </Content>
      </View>
    );
  }
}

export default Step3;
