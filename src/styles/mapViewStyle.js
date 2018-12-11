import { StyleSheet,StatusBar,Platform } from "react-native";
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from "../helpers/Responsive";
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  toolbar:{
    justifyContent: "center",
    alignItems: "center",
   // borderColor: '#DD0000',borderWidth: 2,
    width: '100%',
    height: 68,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    flexDirection: 'row',
    paddingTop: Platform.OS === 'ios' ? 30 : StatusBar.currentHeight,
    alignItems: 'center',
    paddingLeft: 22.7,
    paddingRight: 22.7,
    backgroundColor:'rgba(52, 52, 52, 0.8)',
  },
  contentContainer:{
    marginTop:68,
    alignItems:'center',
    justifyContent:'center',
    borderColor: '#DD0000',borderWidth: 2,
  },
  toolBarHeading:{
    color:'#fff',
    fontWeight: '400',
    fontSize:responsiveFontSize(2.3),
    padding:responsiveWidth(4)
  }
});

export default styles;
