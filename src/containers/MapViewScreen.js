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
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../helpers/Responsive";
import styles from "../styles/mapViewStyle";
class MapViewScreen extends Component {
  constructor(props) {
    super(props);
   
    this.state = {};
  }
    componentDidMount() {
      
      
    }
    componentWillUnmount() {
      
    }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
         // translucent={true}
          backgroundColor={"transparent"}
          barStyle={"light-content"}
        />
        <View style={styles.toolbar}>
          <Text style={styles.toolBarHeading}>aa</Text>
        </View>
        <View style={styles.contentContainer}>

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

export default connect(mapStateToProps, mapDispatchToProps)(MapViewScreen);
