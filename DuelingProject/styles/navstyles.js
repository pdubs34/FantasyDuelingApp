
import { StyleSheet, Dimensions, Platform  } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NavStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    flexDirection: "row",
    backgroundColor: '#CFCCD6',
  },
  navbox: {
    display: "flex",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "20%",
    backgroundColor: '#6CAE75',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom : 10,
    ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.5,
            shadowRadius: 6,
          },
          android: {
            elevation: 7,
          },
     }),
  },
  topNavigationItem:{
      borderTopRightRadius: 10,
      flexDirection: "row",
      display: "flex",
      width: "100%",
      paddingLeft: "2.5%",
      paddingRight: "2.5%",
      flex: 1,
      backgroundColor: "#6CAE75",
      justifyContent : "space-between",
      alignItems: "center",
    },
  navigationItem:{
    flexDirection: "row",
    display: "flex",
    paddingLeft: "2.5%",
    paddingRight: "2.5%",
    flex: 1,
    backgroundColor: "#6CAE75",
    justifyContent : "space-between",
    alignItems: "center",
  },
  navigationItemText:{
      fontSize : 30,
      marginLeft : "2%",

  },
  content:{
  flex: 10,
  }
});

export default NavStyles;