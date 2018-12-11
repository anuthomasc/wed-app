import React, { Component } from "react";
import {
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";
import CardFlip from "react-native-card-flip";
import LinearGradient from "react-native-linear-gradient";
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
    componentDidMount() {
      this.flip1=setInterval(()=>{
        this.card1.flip();
      },2000)
      setTimeout(()=>{
        this.flip2=setInterval(()=>{
          this.card2.flip();
        },2000)
      },1000)
      
    }
    componentWillUnmount() {
      clearInterval(this.flip1);
      clearInterval(this.flip2);
    }
  
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#A8A3C3", "#FFD3FD", "#D1E1FD"]}
          // colors={["#800080", "#ffc0cb"]}
          style={styles.linearGradient}
        >
          <StatusBar
            // translucent={true}
            backgroundColor={"transparent"}
            barStyle={"light-content"}
          />
          <View style={styles.contentContainer}>
            <View style={styles.engagementContainer}>
              <CardFlip
                style={styles.engagementContentContainer}
                ref={card1 => (this.card1 = card1)}
                flipDirection={"y"}
              >
                <TouchableOpacity
                  style={styles.engagementContentTouch}
                  onPress={() =>{
                    this.props.navigation.navigate('MapView');
                  }}
                >
                  <ImageBackground
                    source={require("../../assets/hands.jpg")}
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
                 // onPress={() => this.card1.flip()}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View>
                      <Image
                        source={require("../../assets/church01.png")}
                        style={styles.engChurchImage}
                      />
                      <TouchableWithoutFeedback
                        onPress={() => {
                          //this.props.navigation.navigate(Types.NEARBY_DIRECTION_SCREEN, selectedRestaurant);
                        }}
                      >
                        <View
                          style={{
                            borderRadius: 5,
                            borderColor: "#fff",
                            borderWidth: 0.7,
                            padding: responsiveHeight(1),
                            position: "absolute",
                            right: responsiveHeight(4),
                            flexDirection: "row",
                            bottom: responsiveHeight(4),
                            backgroundColor:'#dd0000'
                          }}
                        >
                          <Image
                            style={{
                              height: responsiveHeight(2),
                              width: responsiveHeight(2),
                              resizeMode: "cover",
                            }}
                            source={require("../../assets/right_arrow.png")}
                          />
                          <Text
                            style={{
                              fontFamily: "",
                              fontSize: responsiveFontSize(1.3),
                              color: "#fff",
                              paddingLeft: responsiveWidth(2),
                            }}
                          >
                            Directions
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>
                    </View>

                    <Image
                      source={require("../../assets/map1.png")}
                      style={styles.engMapImage}
                    />
                  </View>
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
                //  onPress={() => this.card2.flip()}
                >
                 <Image
                      source={require("../../assets/st_thomas.png")}
                      style={styles.stThomasChurch}
                    />
                    <View style={styles.marriageCardBlueContainer}>

                    <Text style={styles.textStyle}>St. Mary's Church Kannanallor</Text>
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
        </LinearGradient>
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
