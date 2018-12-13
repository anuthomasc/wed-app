import { StyleSheet, StatusBar, Platform } from "react-native";
import { responsiveWidth, responsiveFontSize } from "../helpers/Responsive";
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "center",
    //borderColor: '#DD0000',borderWidth: 2,
    width: "100%",
    height: 50,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    flexDirection: "row",
    marginTop: Platform.OS === "ios" ? 30 : StatusBar.currentHeight,
    alignItems: "center",
    paddingLeft: 22.7,
    paddingRight: 22.7,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    //marginTop:
  },
  masonryStyle: {
    //borderColor: '#DD0000',borderWidth: 2,
  },
  contentContainer: {
    ...StyleSheet.absoluteFillObject,
    //marginTop:68,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 80 : StatusBar.currentHeight + 50,
    //borderColor: '#DD0000',borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  toolBarHeading: {
    color: "#fff",
    fontWeight: "400",
    fontSize: responsiveFontSize(2.3),
    padding: responsiveWidth(5),
    // height:40,
    // alignItems:'center',
    // justifyContent:'center'
  },
  backIcon: {
    width: responsiveWidth(3),
    height: responsiveWidth(5),
  },
  backIconContainer: {
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 30 : StatusBar.currentHeight,
    justifyContent: "center",
    position: "absolute",
    left: responsiveWidth(5),
  },
  contentContainer2: {
    ...StyleSheet.absoluteFillObject,
    //marginTop:68,
    alignItems: "center",
    justifyContent: "center",
    //marginTop: Platform.OS === "ios" ? 80 : StatusBar.currentHeight + 50,
    //borderColor: '#DD0000',borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"rgba(0, 0, 0, 0.8)"
  },
});

export default styles;
