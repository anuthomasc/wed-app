import React, { Component } from "react";
import {
  TouchableOpacity,
  TouchableHighlight,
  BackHandler,
  Image,
  View,
  Text,
  StatusBar,
  FlatList,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import Gallery from "react-native-image-gallery";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import { responsiveHeight, responsiveWidth } from "../helpers/Responsive";
import styles from "../styles/galleryStyle";
const imagesArray = [
  {
    source: require("../../assets/aj1.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/aj2.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/aj3.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/aj4.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/aj5.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/aj3.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/aj1.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/aj2.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/aj5.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/aj3.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/aj2.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/aj1.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
];
class GalleryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      showGalleryView: false,
    };
  }
  onBackPress = () => {
    this.props.navigation.goBack();
    return true;
  };
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
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
            {this.state.showGalleryView ? null : (
              <Image
                source={require("../../assets/back_icon.png")}
                style={styles.backIcon}
              />
            )}
          </TouchableOpacity>
          {this.state.showGalleryView ? null : (
            <Text style={styles.toolBarHeading}>Gallery</Text>
          )}
        </View>
        <View style={styles.contentContainer}>
          <FlatList
            data={imagesArray}
            numColumns={3}
            style={{
              width: responsiveWidth(100),
              //alignItems:'center',
              // justifyContent:'center',
              //borderColor: "#DD0000", borderWidth: 2,
            }}
            removeClippedSubviews={true}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      selectedIndex: index,
                      showGalleryView: true,
                    });
                  }}
                >
                  <View
                    style={{
                      padding: responsiveWidth(1),
                      //borderColor: "#DD0000",borderWidth: 2,
                      // width: responsiveWidth(31),
                      //   height: responsiveWidth(31),
                    }}
                  >
                    <Image
                      style={{
                        width: responsiveWidth(31),
                        height: responsiveWidth(31),
                      }}
                      source={item.source}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        {this.state.showGalleryView ? (
          <Gallery
            style={{
              // borderColor: '#DD0000',borderWidth: 2,
            }}
            images={imagesArray}
            initialPage={this.state.selectedIndex}
            imageComponent={item => {
              return (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    borderColor: "#DD0000", borderWidth: 2,
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    // position:'absolute',
                    //zIndex:999,
                    // height:responsiveHeight(100)
                  }}
                >
                  <TouchableHighlight
                    style={{
                      alignItems: "center",
                      marginTop:
                      Platform.OS === "ios" ? 30 : StatusBar.currentHeight,
                      justifyContent: "center",
                      //position: "absolute",
                      //right: responsiveWidth(10),
                      //top: responsiveWidth(20),
                      borderColor: "#DD0000", borderWidth: 2,
                    }}
                    onPress={() => {
                      alert("....")
                      console.log("fffa");
                      console.log("fffa");
                      console.log("fffa");
                      console.log("fffa");
                      this.setState({
                        showGalleryView: false,
                      });
                    }}
                  >
                    <Image
                      source={require("../../assets/back_icon.png")}
                      style={{
                        width: responsiveWidth(3),
                        height: responsiveWidth(5),
                        //borderColor: '#DD0000',borderWidth: 2,
                      }}
                    />
                  </TouchableHighlight>
                  <Image
                    source={item.image.source}
                    style={{
                      width: responsiveWidth(100),
                      height: responsiveHeight(50),
                      // borderColor: "#DD0000",borderWidth: 2,
                    }}
                  />
                </View>
              );
            }}
          />
        ) : null}
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
