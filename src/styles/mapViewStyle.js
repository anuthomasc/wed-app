import { StyleSheet,StatusBar,Platform } from "react-native";
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from "../helpers/Responsive";
const styles = StyleSheet.create({
  
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  toolbar:{
    alignItems: 'center',
    justifyContent: 'center',
    //borderColor: '#DD0000',borderWidth: 2,
    width: '100%',
    height: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 30 : StatusBar.currentHeight,
    alignItems: 'center',
    paddingLeft: 22.7,
    paddingRight: 22.7,
    backgroundColor:'rgba(52, 52, 52, 0.8)',
  },
  contentContainer:{
    ...StyleSheet.absoluteFillObject,
    //marginTop:68,
    alignItems:'center',
    justifyContent:'center',
    //borderColor: '#DD0000',borderWidth: 2,
  },
  toolBarHeading:{
    color:'#fff',
    fontWeight: '400',
    fontSize:responsiveFontSize(2.3),
    padding:responsiveWidth(5)
  },
  map:{
    width: responsiveWidth(100),
    height: responsiveHeight(100),
   // marginTop:68
  },
  backIcon:{
    width:responsiveWidth(3),
    height:responsiveWidth(5),
  },
  backIconContainer:{
    alignItems:'center',
    marginTop: Platform.OS === 'ios' ? 30 : StatusBar.currentHeight,
     justifyContent:'center',
     position:'absolute',
     left:responsiveWidth(5),
     //borderColor: '#DD0000',borderWidth: 2,
     
  },
});

export default styles;
