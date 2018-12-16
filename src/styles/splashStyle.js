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
  imageMainContainer:{
  marginTop:responsiveWidth(50),
  width:responsiveWidth(100),
  paddingLeft:responsiveWidth(15),
  flexDirection:'row',
  alignItems:'center'
  },
   imageMainContainer2:{
    marginTop:responsiveWidth(8),
    width:responsiveWidth(100),
    paddingLeft:responsiveWidth(15),
    flexDirection:'row',
  alignItems:'center'

    },
  pic1:{
  width:responsiveWidth(20),
  height:responsiveWidth(20),
  borderRadius:100
  },
  pic2:{
    width:responsiveWidth(20),
    height:responsiveWidth(20),
    borderRadius:100
    },
    text:{
    color:'#555',
    fontSize:responsiveFontSize(3),
    padding:responsiveWidth(3)
    }
});

export default styles;
