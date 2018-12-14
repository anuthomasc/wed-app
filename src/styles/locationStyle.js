import { StyleSheet, StatusBar, Platform } from "react-native";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from "../helpers/Responsive";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  toolbar: {
    justifyContent: "center",
    alignItems: "center",
    // borderColor: '#DD0000',borderWidth: 2,
    width: "100%",
    height: 68,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    flexDirection: "row",
    paddingTop: Platform.OS === "ios" ? 30 : StatusBar.currentHeight,
    alignItems: "center",
    paddingLeft: 22.7,
    paddingRight: 22.7,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  contentContainer: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    //justifyContent: 'center',
    alignItems: "center",
    //marginTop: StatusBar.currentHeight,
    position: "absolute",
  },
  engagementContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: responsiveWidth(100),
    marginTop:responsiveWidth(15),
  },
  engagementContentContainer: {
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "#DD0000", borderWidth: 2,
    width: responsiveWidth(90),
    height: responsiveHeight(35),
  },
  engagementContentTouch: {
    justifyContent: "center",
    alignItems: "center",
    width: responsiveWidth(90),
    height: responsiveHeight(35),
  },
  engagementMapTouch: {
    justifyContent: "center",
    alignItems: "center",
    width: responsiveWidth(90),
    height: responsiveHeight(35),
    backgroundColor:'#fff',
    flexDirection: "row",
   //borderColor: "#DD0000", borderWidth: 2,
  },
  marriageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: responsiveWidth(100),
    marginBottom:responsiveWidth(10)
  },
  marriageContentContainer: {
    //justifyContent: "center",
    //alignItems: "center",
    width: responsiveWidth(90),
    height: responsiveHeight(35),
   // borderColor: "#DD0000", borderWidth: 2,
  },
  marriageContentTouch: {
    justifyContent: "center",
    alignItems: "center",
    width: responsiveWidth(90),
    height: responsiveHeight(35),
  },
  marriageMapTouch: {
    //justifyContent: "center",
    //alignItems: "center",
    width: responsiveWidth(90),
    height: responsiveHeight(35),
  },
  linearGradient: {
    alignItems: "center",
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    justifyContent: "center",
  },
  engagementContentBackgroundImage: {
    justifyContent: "center",
    alignItems: "center",
    width: responsiveWidth(90),
    height: responsiveHeight(35),
    resizeMode:'contain'
  },
  engMapImage:{
    justifyContent: "center",
    alignItems: "center",
    width: responsiveWidth(90),
    height: responsiveHeight(35),
   // borderColor: "#DD0000", borderWidth: 2,
  },
  engChurchImage:{
    justifyContent: "center",
    alignItems: "center",
    width: responsiveWidth(20),
    height: responsiveHeight(20),
  },
  backgroundOverlay: {
    justifyContent: "center",
    alignItems: "center",
    width: responsiveWidth(90),
    height: responsiveHeight(35),
    position: "absolute",
  },
  textContainer: {},
  textInnerContainer: {
    flexDirection: "row",
    padding: responsiveWidth(2),
  },
  iconImage: {
    width: responsiveWidth(6),
    height: responsiveWidth(6),
  },
  textStyle: {
    color: "#fff",
    marginLeft: responsiveWidth(3),
    fontWeight: '400',
    fontSize:responsiveFontSize(2)
  },
  bg:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stThomasChurch:{
    width:responsiveWidth(90),
    height:responsiveHeight(25)
  },
  marriageCardBlueContainer:{
    backgroundColor:'#0E85FA',
    width:responsiveWidth(90),
    height:responsiveHeight(10),
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'row'
  },
  directionContainer:{
    width:responsiveWidth(10),
    height:responsiveWidth(10),
    borderRadius: 100,
    backgroundColor:'#fff',
    position:'absolute',
    right:responsiveWidth(5),
    top:responsiveWidth(-5),
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage:{
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    position: "absolute",
    flex: 1,
  },
  backIconContainer:{
    //borderColor: '#DD0000',borderWidth: 2,
    alignItems:'center',
    marginTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight+20,
     justifyContent:'center',
     position:'absolute',
     left:responsiveWidth(5),
     top:responsiveWidth(0)
     
  },

});

export default styles;
