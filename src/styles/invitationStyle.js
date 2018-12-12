import {Platform,StatusBar, StyleSheet } from "react-native";
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from "../helpers/Responsive";
const styles = StyleSheet.create({
  
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    position: "absolute",
    flex: 1,
  },
  contentContainer:{
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: "center",
    // borderColor: '#DD0000',borderWidth: 2,
    // width:responsiveWidth(100),
    height: responsiveHeight(100),
    position: "absolute",
  },
  backIcon:{
    width:responsiveWidth(3),
    height:responsiveWidth(5),
  },
  backIconContainer:{
    //borderColor: '#DD0000',borderWidth: 2,
    alignItems:'center',
    marginTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight+20,
     justifyContent:'center',
     position:'absolute',
     left:responsiveWidth(5),
     top:responsiveWidth(6)
     
  }
});

export default styles;
