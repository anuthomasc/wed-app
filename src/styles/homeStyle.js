import { StyleSheet } from "react-native";
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from "../helpers/Responsive";
const styles = StyleSheet.create({
  contentContainercontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // borderColor: '#DD0000',borderWidth: 2,
  },
  contentContainer: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    //justifyContent: 'center',
    alignItems: "center",
    // borderColor: '#DD0000',borderWidth: 2,
    // width:responsiveWidth(100),
    height: responsiveHeight(100),
    // marginTop: StatusBar.currentHeight,
    position: "absolute",
  },
  cardContainer: {
    // width:responsiveWidth(80),
    //height:responsiveHeight(30),
    // borderColor: '#DD0000',borderWidth: 2,
  },
  linearGradient: {
    alignItems: "center",
    width: responsiveWidth(16),
    height: responsiveWidth(18),
    justifyContent: "center",
  },
  countDownContainer: {
    width: responsiveWidth(80),
    height: responsiveHeight(27),
    marginTop: responsiveWidth(42),
    // borderColor: '#fff',borderWidth: 2,
    backgroundColor: "transparent",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    //marginLeft: responsiveWidth(8),
  },
  circleContainer: {
    flexDirection: "row",
    //flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    //backgroundColor:'#ff80aa',
    borderRadius: 5,
    width: responsiveWidth(16),
    height: responsiveWidth(18),
    alignItems: "center",
    justifyContent: "center",
    margin: responsiveWidth(2),
  },
  innerCircleContainer: {
    //borderColor: '#DD0000',borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    position: "absolute",
    flex: 1,
    
   // opacity:0.6
  },
  counterTextStyle: {
    color: "#6E6E73",
    fontWeight: "600",
    fontSize: responsiveFontSize(5),
    //fontFamily:'Catamaran-Light'
  },
  counterText: {
    color: "#6E6E73",
    fontWeight: "400",
    fontSize: responsiveFontSize(3),
   // fontFamily: 'Catamaran-Regular',
  },
});

export default styles;
