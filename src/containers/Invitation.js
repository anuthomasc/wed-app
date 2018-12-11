import React, { Component } from "react";
import { View,Text, StatusBar,Image } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import styles from "../styles/invitationStyle";


class Invitation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
            source={require("../../assets/save.jpg")}
            style={styles.backgroundImage}
          />
        <View style={styles.contentContainer}>
          <Text>ghhhhh</Text>
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
