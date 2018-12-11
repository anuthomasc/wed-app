import React, { Component } from "react";
import {
  PermissionsAndroid,
  View,
  Platform,
  BackHandler,
  Text,
  StatusBar,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import styles from "../styles/mapViewStyle";
const GOOGLE_MAPS_APIKEY = "AIzaSyAu-jIbmN5HxuKoOgjFDS68lWAVfywfYgk";
class MarriageMapView extends Component {
  constructor(props) {
    super(props);
    this.searchTimeOutId = null;
    this.state = {
      isShowingDirections: false,
      currentRegion: {
        latitude: 8.8891845,
        longitude: 76.682741,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      locationError: "null",
      currentLatitude: null,
      currentLongitude: null,
      selectedPointOfInterest: null,
      locationError: null,
      locationTimeOut: 1000 * 60 * 60,
      distance: "",
    };
  }
  checkLocationPermission() {
    if (Platform.OS === "android") {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ).then(hasLocationPermission => {
        if (hasLocationPermission) {
          return true;
        } else {
          this.requestLocationPermission().then(locationPermission => {
            if (locationPermission) {
              return true;
            } else {
              return false;
            }
          });
        }
      });
    } else {
      return false;
    }
  }

  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Access",
          message:
            "Need to access your location to function properly. Please click allow in the next prompt",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    this.checkLocationPermission();
    this.setState({
      currentRegion: {
        latitude: 8.8891845,
        longitude: 76.682741,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
    });
    this.watchId = navigator.geolocation.getCurrentPosition(
      position => {
        console.log("locationnn");
        this.setState({
          currentLatitude: position.coords.latitude,
          currentLongitude: position.coords.longitude,
          locationError: null,
        });
        this.renderDirections();
      },
      error => {
        this.setState({ locationError: error.message });
      },
      {
        enableHighAccuracy: false,
        timeout: this.state.locationTimeOut,
        maximumAge: 600000,
        distanceFilter: 10,
      }
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    navigator.geolocation.clearWatch(this.watchId);
  }
  renderMarkers = () => {
    this.setState({ isShowingDirections: true });
    return (
      <Marker
        key={"poi"}
        title={"St Thomas Church"}
        image={require("../../assets/church-map-icon-marker.png")}
        coordinate={{ latitude: 8.8891845, longitude: 76.682741 }}
        onPress={() => {}}
      />
    );
  };
  onBackPress = () => {
    this.props.navigation.goBack();
    if (this.state.isShowingDirections) {
      this.setState({ isShowingDirections: false });
    } else {
    }
    return true;
  };
  renderDirections=()=> {
    console.log("inside render directions");
    console.log(this.state.currentLatitude);
    console.log(this.state.currentLongitude);
    if (this.state.currentLatitude !== null) {
      let renderedDirection = [];
      renderedDirection = renderedDirection.concat(
        <MapViewDirections
          key={"directions"}
          origin={{
            latitude: this.state.currentLatitude,
            longitude: this.state.currentLongitude,
          }}
          destination={{
            latitude: 8.8891845,
            longitude: 76.682741,
          }}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="#4286f4"
          onReady={result => {
            console.log(result);
            this.mapView.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: 20,
                bottom: 50,
                left: 20,
                top: 150,
              },
            });
          }}
          onError={errorMessage => {}}
        />
      );
      renderedDirection = renderedDirection.concat(
        <Marker
          image={require("../../assets/church_marker.png")}
          key={"selected_poi"}
          title={"St Thomas Church"}
          coordinate={{
            latitude: 8.8891845,
            longitude: 76.682741,
          }}
        />
      );
      console.log(renderedDirection);
      return renderedDirection;
    } else {
      return [];
    }
  }

  renderMapContent() {
    if (this.state.isShowingDirections) {
      return this.renderDirections();
    } else {
      return this.renderMarkers();
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          // translucent={true}
          backgroundColor={'rgba(0,0,0,0.4)'}
          barStyle={"light-content"}
        />
        {/* <View style={styles.toolbar}>
          <Text style={styles.toolBarHeading}>aa</Text>
        </View> */}
        <View style={styles.contentContainer}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            loadingBackgroundColor={"transparent"}
            cacheEnabled={true}
            loadingEnabled={true}
            showsUserLocation={true}
            followsUserLocation={false}
            region={{
              latitude: 8.8891845,
              longitude: 76.682741,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
            minZoomLevel={6}
            showsMyLocationButton={false}
            moveOnMarkerPress={false}
            ref={ref => (this.mapView = ref)}
          >
            {/* <Marker
              key={"poi"}
              title={"St Thomas Church"}
              image={require("../../assets/church_marker.png")}
              coordinate={{ latitude: 11.8799197, longitude: 75.7677182 }}
              onPress={() => {}}
            /> */}
            {this.renderMapContent()}
          </MapView>
          
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

export default connect(mapStateToProps, mapDispatchToProps)(MarriageMapView);
