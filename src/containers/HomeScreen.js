import React, { Component } from "react";
import {
  BackHandler,
  ScrollView,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";
import { FloatingAction } from "react-native-floating-action";
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions/index";
import { responsiveWidth, responsiveFontSize } from "../helpers/Responsive";
import styles from "../styles/homeStyle";
const actions = [
  {
    color: "transparent",
    text: "Location",
    icon: require("../../assets/rmap.png"),
    name: "location",
    position: 1,
    textBackground: "transparent",
    textElevation: 0,
    margin: responsiveWidth(35),
    //size: 100
  },
  {
    text: "Invitation",
    icon: require("../../assets/rinvitation.png"),
    name: "invitation",
    position: 2,
    textBackground: "transparent",
    textElevation: 0,
    margin: responsiveWidth(27),
    color: "transparent",
    //size:100
  },
  {
    text: "Gallery",
    icon: require("../../assets/rgallery.png"),
    name: "gallery",
    position: 3,
    textBackground: "transparent",
    textElevation: 0,
    margin: responsiveWidth(15),
    color: "transparent",
    //size:100
  },
];
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.timerID;
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      date: new Date(),
      fadeBG: false,
    };
  }
  onBackPress = () => {
    BackHandler.exitApp();
    return true;
  };
  calcDate(date) {
    var diff = Math.floor(1546666200000 - date.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff / day);
    var hours = Math.floor(diff / (1000 * 60 * 60) - days * 24);
    var minutes = Math.floor(
      diff / (1000 * 60) - (days * 24 * 60 + hours * 60)
    );
    var seconds = Math.floor(
      diff / 1000 - (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60)
    );

    var message = "";
    message += " was ";
    message += days + " days ";
    message += hours + "hours";
    message += minutes + " minutes";
    message += seconds + "seconds \n";
    this.setState({
      days: days,
      minutes: minutes,
      hours: hours,
      seconds: seconds,
    });
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    this.timerID = setInterval(() => this.calcDate(new Date()), 1000);
    // setInterval(() => this.floatingAction.animateButton(), 4000);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <View style={styles.container}>
      
        {(false) ? (
          <View style={styles.contentContainer}>
            <Image
              source={require("../../assets/justmarried.jpg")}
              style={styles.backgroundImage}
            />
            <StatusBar
              translucent={true}
              backgroundColor="transparent"
              barStyle={"light-content"}
            />
            <View style={styles.countDownContainer}>
              {/* <Text
                style={{
                  color: "#ff3377",
                  fontSize: responsiveFontSize(5),
                }}>
                Thank you !
              </Text> */}
            </View>
          </View>
        ) : (
          <View style={styles.contentContainer}>
            {/* <LinearGradient
            colors={["#ff3377", "#ff80aa", "#ffe6ee", "#fff"]}
            // colors={["#800080", "#ffc0cb"]}
            style={styles.linearGradient}
          > */}
            {this.state.fadeBG ? (
              <View
                style={{
                  width: responsiveWidth(100),
                }}
              >
                <Image
                  source={require("../../assets/bg.jpg")}
                  style={styles.backgroundImage}
                />
                <Image
                  source={require("../../assets/background.png")}
                  style={styles.backgroundImage2}
                />
              </View>
            ) : (
              <Image
                source={require("../../assets/bg.jpg")}
                style={styles.backgroundImage}
              />
            )}
            {/* <Image
            source={require("../../assets/background.png")}
            style={styles.backgroundImage}
          /> */}
            <StatusBar
              translucent={true}
              backgroundColor="transparent"
              barStyle={"light-content"}
            />
            <ScrollView>
              <View style={styles.countDownContainer}>
                <View style={styles.circleContainer}>
                  <View style={styles.innerCircleContainer}>
                    <View style={styles.circle}>
                      <LinearGradient
                        colors={["#A8A3C3", "#FFD3FD", "#D1E1FD"]}
                        // colors={["#800080", "#ffc0cb"]}
                        style={styles.linearGradient}
                      >
                        <Text style={styles.counterTextStyle}>
                          {this.state.days}
                        </Text>
                      </LinearGradient>
                    </View>
                    <Text style={styles.counterText}>Days</Text>
                  </View>
                  <View style={styles.innerCircleContainer}>
                    <View style={styles.circle}>
                      <LinearGradient
                        colors={["#A8A3C3", "#FFD3FD", "#D1E1FD"]}
                        // colors={["#800080", "#ffc0cb"]}
                        style={styles.linearGradient}
                      >
                        <Text style={styles.counterTextStyle}>
                          {this.state.hours}
                        </Text>
                      </LinearGradient>
                    </View>
                    <Text style={styles.counterText}>Hours</Text>
                  </View>
                  <View style={styles.innerCircleContainer}>
                    <View style={styles.circle}>
                      <LinearGradient
                        colors={["#A8A3C3", "#FFD3FD", "#D1E1FD"]}
                        // colors={["#800080", "#ffc0cb"]}
                        style={styles.linearGradient}
                      >
                        <Text style={styles.counterTextStyle}>
                          {this.state.minutes}
                        </Text>
                      </LinearGradient>
                    </View>
                    <Text style={styles.counterText}>Minutes</Text>
                  </View>
                  <View style={styles.innerCircleContainer}>
                    <View style={styles.circle}>
                      <LinearGradient
                        colors={["#A8A3C3", "#FFD3FD", "#D1E1FD"]}
                        // colors={["#800080", "#ffc0cb"]}
                        style={styles.linearGradient}
                      >
                        <Text style={styles.counterTextStyle}>
                          {this.state.seconds}
                        </Text>
                      </LinearGradient>
                    </View>

                    <Text style={styles.counterText}>Seconds</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
            <FloatingAction
              ref={ref => {
                this.floatingAction = ref;
              }}
              actions={actions}
              onPressItem={name => {
                this.setState({
                  fadeBG: false,
                });
                if (name == "gallery") {
                  this.props.navigation.navigate("Gallery");
                } else if (name == "location") {
                  this.props.navigation.navigate("Location");
                } else if (name == "invitation") {
                  this.props.navigation.navigate("Invitation");
                }
              }}
              onPressMain={() => {
                if (this.state.fadeBG) {
                  this.setState({
                    fadeBG: false,
                  });
                } else {
                  this.setState({
                    fadeBG: true,
                  });
                }
              }}
              floatingIcon={require("../../assets/ring.png")}
              color={"#bb33ff"}
              iconWidth={responsiveWidth(15)}
              iconHeight={responsiveWidth(15)}
              showBackground={false}
              position="left"
            />
            {/* </LinearGradient> */}
          </View>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
