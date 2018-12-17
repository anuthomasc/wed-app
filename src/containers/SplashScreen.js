import React, { Component } from "react";
import { Text,Image, StatusBar, View, BackHandler } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions/index";
import styles from "../styles/splashStyle";
class SplashScreen extends Component {
  static navigationOptions = {
    gesturesEnabled: false,
    header: null,
  };

  constructor(props) {
    super(props);
  }
  onBackPress = () => {
    BackHandler.exitApp();
  };
  componentDidMount() {
    setTimeout(() => {
        this.props.navigation.navigate('Home');
    }, 4000);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            source={require("../../assets/splash_screen.jpg")}
            style={styles.backgroundImage}
          />
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle={"light-content"}
          />
          <View style={styles.imageMainContainer}>
             <Image
                        source={require("../../assets/jobii1.jpg")}
                        style={styles.pic1}
                      />
                      <Text style={styles.text}>Jobin</Text>
            </View>
             <View style={styles.imageMainContainer2}>
             <Text style={styles.text}>Aleena</Text>
                         <Image
                                    source={require("../../assets/chunni1.jpg")}
                                    style={styles.pic2}
                                  />
                        </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  session: state.session,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
