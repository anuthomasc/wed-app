import React, { Component } from "react";
import { Image, StatusBar, View, BackHandler } from "react-native";
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
    }, 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            source={require("../../assets/wed1.jpg")}
            style={styles.backgroundImage}
          />
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle={"light-content"}
          />
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
