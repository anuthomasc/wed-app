import { StyleSheet } from "react-native";
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from "../helpers/Responsive";
const styles = StyleSheet.create({
  
  container: {
    flex:1,
   // alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    position: "absolute",
    flex: 1,
    
   // opacity:0.6
  },
  contentContainer:{
    padding:responsiveWidth(8),
    
  }
});

export default styles;
