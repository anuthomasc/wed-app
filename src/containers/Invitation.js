import React, { Component } from "react";
import {TouchableOpacity, BackHandler, View, Text, Image, ImageBackground } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import styles from "../styles/invitationStyle";
import Icon from "react-native-vector-icons/FontAwesome";
class Invitation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onBackPress = () => {
    this.props.navigation.goBack();
    return true;
  };
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
           <Image
          source={require("../../assets/save.png")}
          style={styles.backgroundImage}
        />
          <TouchableOpacity
            style={styles.backIconContainer}
            onPress={() => {
              this.onBackPress();
            }}>
             <Icon name={"chevron-left"} size={24} color="#000" />
            {/* <Image
              source={require("../../assets/back_icon.png")}
              style={styles.backIcon}
            /> */}
          </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Invitation);
