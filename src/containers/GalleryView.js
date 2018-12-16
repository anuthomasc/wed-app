import React, { Component } from "react";
import {
  TouchableOpacity,
  BackHandler,
  Image,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import { responsiveHeight, responsiveWidth } from "../helpers/Responsive";
import styles from "../styles/galleryStyle";
const imagesArray = [
  {
    source: require("../../assets/a0.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/a2.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/a3.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/a5.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/a6.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/a7.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/a8.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/a9.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/a10.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/a11.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/a12.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },
  {
    source: require("../../assets/a13.jpg"),
    dimensions: {
      width: responsiveWidth(31),
      height: responsiveWidth(31),
    },
  },

    {
      source: require("../../assets/a16.jpg"),
      dimensions: {
        width: responsiveWidth(31),
        height: responsiveWidth(31),
      },
    },
    {
      source: require("../../assets/a17.jpg"),
      dimensions: {
        width: responsiveWidth(31),
        height: responsiveWidth(31),
      },
    },
    {
      source: require("../../assets/a18.jpg"),
      dimensions: {
        width: responsiveWidth(31),
        height: responsiveWidth(31),
      },
    },
    {
      source: require("../../assets/a20.jpg"),
      dimensions: {
        width: responsiveWidth(31),
        height: responsiveWidth(31),
      },
    },
    {
      source: require("../../assets/a21.jpg"),
      dimensions: {
        width: responsiveWidth(31),
        height: responsiveWidth(31),
      },
    },
    {
      source: require("../../assets/a22.jpg"),
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
      source: require("../../assets/j1.jpg"),
      dimensions: {
        width: responsiveWidth(31),
        height: responsiveWidth(31),
      },
    },
    {
      source: require("../../assets/j2.jpg"),
      dimensions: {
        width: responsiveWidth(31),
        height: responsiveWidth(31),
      },
    },
    {
          source: require("../../assets/j3.jpg"),
          dimensions: {
            width: responsiveWidth(31),
            height: responsiveWidth(31),
          },
          },
    {
          source: require("../../assets/j4.jpg"),
          dimensions: {
            width: responsiveWidth(31),
            height: responsiveWidth(31),
          },
        },
    {
      source: require("../../assets/j5.jpg"),
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
      selectedImage: null,
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
              //console.log(item)
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      selectedIndex: index,
                      showGalleryView: true,
                      selectedImage: item.source,
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
          <View style={styles.contentContainer2}>
            <TouchableWithoutFeedback
              onPress={() => {
                this.setState({
                  showGalleryView: false,
                });
              }}
            >
              <View
                style={{
                  //position: "absolute",
                  width: responsiveWidth(90),
                  height:responsiveWidth(10),
                  //left: responsiveWidth(5),
                  marginBottom: responsiveWidth(10),
                }}
              >
                <Image
                  style={{
                    width: responsiveWidth(6),
                    height: responsiveWidth(6),
                    position: "absolute",
                    right: responsiveWidth(5)
                  }}
                  source={require("../../assets/close_image_icon.png")}
                />
              </View>
            </TouchableWithoutFeedback>
            <Image
              style={{
                width: responsiveWidth(90),
               height: responsiveHeight(55),
               
              }}
              source={this.state.selectedImage}
            />
          </View>
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
