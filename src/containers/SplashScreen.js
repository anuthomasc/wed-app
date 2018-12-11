import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    AsyncStorage, Image, StatusBar, View,
    BackHandler,
    Text
} from "react-native";
import { ActionCreators } from "../actions/index";

class SplashScreen extends Component {
    static navigationOptions = {
        gesturesEnabled: false,
        header: null
    }

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
            <View style={{}}>
                <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,0.4)'} barStyle={'light-content'} />
                <Text>splashhh</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav,
    session: state.session
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
