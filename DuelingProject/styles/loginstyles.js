import {StyleSheet} from 'react-native';

const LoginStyles = StyleSheet.create({
  pageHolder: {
    alignItems: 'center',
    backgroundColor: '#CFCCD6',
    height: '100%',
  },
  loginHolder: {
    marginTop : '20%',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius:10,
  },
  loginScreenButton:{
      width: '100%',
      marginRight:40,
      marginLeft:40,
      marginTop:10,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#6CAE75',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff',
      width : '40%'
    },
    loginText:{
        color:'white',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    },
    label:{
        paddingBottom : '2%'
    },
});

export default LoginStyles;