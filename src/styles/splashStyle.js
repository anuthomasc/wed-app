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
    alignItems: "center",
    // borderColor: '#DD0000',borderWidth: 2,
    height: responsiveHeight(100),
    position: "absolute",
  },
  backgroundImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    position: "absolute",
    flex: 1,
    
   // opacity:0.6
  },
});

export default styles;
