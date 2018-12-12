import React, { Component } from "react";
import {
  TouchableOpacity,
  BackHandler,
  Image,
  View,
  Text,
  StatusBar,
} from "react-native";
import Masonry from "react-native-masonry-layout";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import { responsiveWidth, responsiveHeight } from "../helpers/Responsive";
import styles from "../styles/galleryStyle";
class GalleryView extends Component {
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
    this.refs.masonry.addItems([
      {
        key: 1,
        height: responsiveHeight(
          50 /
            (Image.resolveAssetSource(require("../../assets/aj1.jpg")).height /
              Image.resolveAssetSource(require("../../assets/aj1.jpg")).width)
        ),
        image: require("../../assets/aj1.jpg"),
      },
      {
        key: 2,
        height: responsiveHeight(
          50 /
            (Image.resolveAssetSource(require("../../assets/aj2.jpg")).height /
              Image.resolveAssetSource(require("../../assets/aj2.jpg")).width)
        ),
        image: require("../../assets/aj2.jpg"),
      },
      {
        key: 3,
        height: responsiveHeight(
          Image.resolveAssetSource(require("../../assets/aj3.jpg")).height /
            Image.resolveAssetSource(require("../../assets/aj3.jpg")).width -
            responsiveHeight(100) / responsiveWidth(100)
        ),
        image: require("../../assets/aj3.jpg"),
      },
      {
        key: 4,
        height: responsiveHeight(
          50 /
            (Image.resolveAssetSource(require("../../assets/aj4.jpg")).height /
              Image.resolveAssetSource(require("../../assets/aj4.jpg")).width)
        ),
        image: require("../../assets/aj4.jpg"),
      },
      {
        key: 5,
        height: responsiveHeight(
          50 /
            (Image.resolveAssetSource(require("../../assets/aj1.jpg")).height /
              Image.resolveAssetSource(require("../../assets/aj1.jpg")).width)
        ),
        image: require("../../assets/aj1.jpg"),
      },
      {
        key: 6,
        height: responsiveHeight(
          50 /
            (Image.resolveAssetSource(require("../../assets/aj5.jpg")).height /
              Image.resolveAssetSource(require("../../assets/aj5.jpg")).width)
        ),
        image: require("../../assets/aj5.jpg"),
      },
      {
        key: 7,
        height: responsiveHeight(
          50 /
            (Image.resolveAssetSource(require("../../assets/bg.jpg")).height /
              Image.resolveAssetSource(require("../../assets/bg.jpg")).width)
        ),
        image: require("../../assets/bg.jpg"),
      },
      {
        key: 8,
        height: responsiveHeight(
          50 /
            (Image.resolveAssetSource(require("../../assets/theme1.jpg"))
              .height /
              Image.resolveAssetSource(require("../../assets/theme1.jpg"))
                .width)
        ),
        image: require("../../assets/theme1.jpg"),
      },
    ]);
  }

  getHeight(imageHeight, imageWidth) {
    imageRatio = imageHeight / imageWidth;
    availableRatio = responsiveHeight(100);
    return a;
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          // translucent={true}
          backgroundColor={"rgba(52, 52, 52, 0.8)"}
          barStyle={"light-content"}
        />
        <View style={styles.toolbar}>
          <TouchableOpacity
            style={styles.backIconContainer}
            onPress={() => {
              this.onBackPress();
            }}
          >
            <Image
              source={require("../../assets/back_icon.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <Text style={styles.toolBarHeading}>Gallery</Text>
        </View>
        <View style={styles.contentContainer}>
          <Masonry
            ref="masonry"
            columns={2} // optional - Default: 2
            containerStyle={{
              flex: 1,
              width: responsiveWidth(100),
              //height: responsiveHeight(100),
            }}
            renderItem={item => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  //  borderColor: "#DD0000", borderWidth: 2,
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    width: responsiveWidth(49),
                    height: item.height,
                    resizeMode: "cover",
                    margin: 1,
                  }}
                />
              </View>
            )}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(GalleryView);
