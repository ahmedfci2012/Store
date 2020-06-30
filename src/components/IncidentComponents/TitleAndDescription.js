import React from "react";
import { Icon, Text, Card, CardItem, Textarea, Input, Item } from "native-base";

const styles = {
  cardItemPadding: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8
  }
};
class TitleAndDescription extends React.Component {
  render() {
    const {
      title,
      description,
      onChangeField,
      disabled,
      strings,
      isRTL
    } = this.props;
    return (
      <Card transparent>
        <CardItem style={[styles.cardItemPadding, { paddingLeft: 5 }]}>
          <Icon
            name="mode-edit"
            type="MaterialIcons"
            style={{ fontSize: 16, color: "#999999", width: 20 }}
          />
          <Text
            style={[
              this.props.style.headerColor,
              this.props.style.headerSize,
              { paddingRight: isRTL ? 5 : undefined }
            ]}
          >
            {strings("createIncident.summaryandDesc")}
          </Text>
        </CardItem>

        <CardItem
          style={[styles.cardItemPadding, { paddingBottom: 5, paddingTop: 0 }]}
        >
          <Text
            style={[this.props.style.labelColor, this.props.style.labelSize]}
          >
            {strings("createIncident.titleSummary")}
          </Text>
        </CardItem>

        <CardItem
          style={[styles.cardItemPadding, { paddingTop: 0, paddingBottom: 0 }]}
        >
          <Input
            placeholder={strings("createIncident.placeholder1")}
            value={title}
            onChangeText={onChangeField("title")}
            placeholderTextColor="#999999"
            autoCorrect={false}
            style={{
              backgroundColor: "rgba(0,0,0,0.03)",
              borderWidth: 1,
              borderColor: "#999999",
              borderRadius: 5,
              height: 40,
              color: "#999999",
              fontSize: 14,
              paddingLeft: 8
            }}
            // onFocus={this.props.onFocus }
            // onBlur={this.props.onBlur}
            disabled={disabled}
          />
        </CardItem>

        <CardItem
          style={{
            justifyContent: "flex-end",
            paddingBottom: 0,
            paddingTop: 0,
            paddingRight: 8,
            paddingLeft: 8
          }}
        >
          <Text
            style={[this.props.style.labelColor, this.props.style.labelSize]}
          >
            0 / 50
          </Text>
        </CardItem>

        <CardItem
          style={[styles.cardItemPadding, { paddingBottom: 5, paddingTop: 0 }]}
        >
          <Text
            style={[this.props.style.labelColor, this.props.style.labelSize]}
          >
            {strings("createIncident.detailsDescription")}
          </Text>
        </CardItem>

        <CardItem
          style={[styles.cardItemPadding, { paddingTop: 0, paddingBottom: 0 }]}
        >
          <Textarea
            rowSpan={5}
            value={description}
            onChangeText={onChangeField("description")}
            placeholderTextColor="#999999"
            placeholder={strings("createIncident.placeholder2")}
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "#999999",
              backgroundColor: "rgba(0,0,0,0.03)",
              borderRadius: 5,
              color: "#999999",
              fontSize: 14
            }}
            // onFocus={this.props.onFocus }
            // onBlur={this.props.onBlur}
            disabled={disabled}
          />
        </CardItem>
        <CardItem
          style={{
            justifyContent: "flex-end",
            paddingTop: 0,
            paddingRight: 8,
            paddingLeft: 8
          }}
        >
          <Text
            style={[this.props.style.labelColor, this.props.style.labelSize]}
          >
            0 / 500
          </Text>
        </CardItem>
      </Card>
    );
  }
}
export default TitleAndDescription;
