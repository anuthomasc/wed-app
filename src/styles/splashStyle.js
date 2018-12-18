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
  },
  imageMainContainer:{
  marginTop:responsiveWidth(40),
  width:responsiveWidth(100),
  paddingLeft:responsiveWidth(15),
  flexDirection:'row',
  alignItems:'center'
  },
   imageMainContainer2:{
    //marginTop:responsiveWidth(3),
    width:responsiveWidth(100),
    paddingLeft:responsiveWidth(15),
    flexDirection:'row',
  alignItems:'center',
   marginLeft:responsiveWidth(30),

    },
    imageMainContainer3:{
      //  marginTop:responsiveWidth(3),
        width:responsiveWidth(100),
        paddingLeft:responsiveWidth(15),
        flexDirection:'row',
        alignItems:'center',
         marginLeft:responsiveWidth(50),
    },
  pic1:{
      width:responsiveWidth(24),
      height:responsiveWidth(24),
      borderRadius:100
  },
  pic2:{
    width:responsiveWidth(24),
    height:responsiveWidth(24),
    borderRadius:100
    },
    text:{
    color:'#555',
    fontSize:responsiveFontSize(3),
    padding:responsiveWidth(3)
    }
});

export default styles;
