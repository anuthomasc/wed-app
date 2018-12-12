import React, { Component } from "react";
import {
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
  Text,
  StatusBar,
  BackHandler
} from "react-native";
import CardFlip from "react-native-card-flip";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { ActionCreators } from "../actions";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../helpers/Responsive";
import styles from "../styles/locationStyle";
class LocationScreen extends Component {
  constructor(props) {
    super(props);
    this.flip1;
    this.flip2;
    this.state = {};
  }
  onBackPress = () => {
    this.props.navigation.goBack();
    return true;
  };
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    this.flip1 = setInterval(() => {
      this.card1.flip();
    }, 2000);
    setTimeout(() => {
      this.flip2 = setInterval(() => {
        this.card2.flip();
      }, 2000);
    }, 1000);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    clearInterval(this.flip1);
    clearInterval(this.flip2);
  }

  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            source={require("../../assets/theme1.jpg")}
            style={styles.backgroundImage}
          />
          <TouchableOpacity
            style={styles.backIconContainer}
            onPress={() => {
              this.onBackPress();
            }}>
             <Icon name={"chevron-left"} size={24} color="#000" />
          </TouchableOpacity>
          <StatusBar
            // translucent={true}
            backgroundColor={"rgba(0,0,0,0.4)"}
            barStyle={"light-content"}
          />
          <View style={styles.engagementContainer}>
            <CardFlip
              style={styles.engagementContentContainer}
              ref={card1 => (this.card1 = card1)}
              flipDirection={"y"}
            >
              <TouchableOpacity
                style={styles.engagementContentTouch}
                onPress={() => {
                  this.props.navigation.navigate("MapView");
                }}
              >
                <ImageBackground
                  source={require("../../assets/st_thomas.png")}
                  style={styles.engagementContentBackgroundImage}
                >
                  <Image
                    source={require("../../assets/background.png")}
                    style={styles.backgroundOverlay}
                  />
                  <View style={styles.textContainer}>
                    <View style={styles.textInnerContainer}>
                      <Icon name={"calendar"} size={24} color="#fff" />
                      <Text style={styles.textStyle}>
                        Sunday 30th December 2018
                      </Text>
                    </View>
                    <View style={styles.textInnerContainer}>
                      <Icon name={"thumb-tack"} size={24} color="#fff" />
                      <Text style={styles.textStyle}>
                        St.Thomas Church , Kolakkad
                      </Text>
                    </View>
                    <View style={styles.textInnerContainer}>
                      <Icon name={"clock-o"} size={24} color="#fff" />
                      <Text style={styles.textStyle}>5.00 pm </Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.engagementMapTouch}
                onPress={() => this.props.navigation.navigate("MapView")}
              >
                <Image
                  source={require("../../assets/map1.png")}
                  style={styles.engMapImage}
                />
              </TouchableOpacity>
            </CardFlip>
          </View>
          <View style={styles.marriageContainer}>
            <CardFlip
              style={styles.marriageContentContainer}
              ref={card2 => (this.card2 = card2)}
              flipDirection={"y"}
            >
              <TouchableOpacity
                style={styles.marriageMapTouch}
                onPress={() =>
                  this.props.navigation.navigate("MarriageMapView")}
              >
                <Image
                  source={require("../../assets/st_mary.png")}
                  style={styles.stThomasChurch}
                />
                <View style={styles.marriageCardBlueContainer}>
                  <Text style={styles.textStyle}>
                    St. Mary's Church Kannanallor
                  </Text>
                  <View style={styles.directionContainer}>
                    <Image
                      source={require("../../assets/right.png")}
                      style={styles.iconImage}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.marriageContentTouch}
                onPress={() =>
                  this.props.navigation.navigate("MarriageMapView")}
              >
                <ImageBackground
                  source={require("../../assets/wedding.jpg")}
                  style={styles.engagementContentBackgroundImage}
                >
                  <Image
                    source={require("../../assets/background.png")}
                    style={styles.backgroundOverlay}
                  />
                  <View style={styles.textContainer}>
                    <View style={styles.textInnerContainer}>
                      <Icon name={"calendar"} size={24} color="#fff" />
                      <Text style={styles.textStyle}>
                        Saturday 5th January 2019
                      </Text>
                    </View>
                    <View style={styles.textInnerContainer}>
                      <Icon name={"thumb-tack"} size={24} color="#fff" />
                      <Text style={styles.textStyle}>
                        St.Mary's Church Kannanalloor, Kollam
                      </Text>
                    </View>
                    <View style={styles.textInnerContainer}>
                      <Icon name={"clock-o"} size={24} color="#fff" />
                      <Text style={styles.textStyle}>11.00 am </Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </CardFlip>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationScreen);
