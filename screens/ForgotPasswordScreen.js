import React from 'react';
import {StyleSheet,View,Text,Image,ScrollView,TextInput,TouchableOpacity} from 'react-native';
import colors from '../colors/colors';
export default class ForgotPasswordScreen extends React.Component{
    render(){
            return(
            <View style={styles.container}>
                        {/* <View style={styles.screenIdentifierContainer}>
                            <Text  Text style={styles.screenIdentifier}>Forgot Password</Text>    
                        </View> */}

                         
                <View style={styles.screenIdentifierContainer}>
                         <Image style={styles.designImage} source={require('../assets/images/signup_design_image.png')}/>
                </View>

                <View style={[styles.screenIdentifierContainer,{marginLeft:20,marginRight:20}]}>
                     <Text style={[styles.screenIdentifier],{fontSize:18, marginTop:20,fontWeight:'500',textAlign:'center'}}>Enter the email address associated with your account and we’ll send you an instructions to reset your password.</Text>
                </View>

                <View style={[styles.textInputContainer,{marginTop:30}]}>
                    <Image source={require('../assets/images/start_email_icon.png')}/>
                    <TextInput style={styles.textInput}
                        placeholder="Email"/>
                </View>

                <View style={styles.centerHorizontal}>
                  <TouchableOpacity style={styles.signInButton}>
                    <Text style={styles.authButtonText}>Send Password Reset Email</Text>
                     </TouchableOpacity>
                </View>
            </View>
            )
    }
}

const styles=StyleSheet.create({
   container:{
    flex:1,
    alignItems:'stretch',
    justifyContent:'flex-start'
   },
   screenIdentifier:{
    color: colors.colorBlack,
    fontSize:24,
    marginTop:40,
    fontWeight:'bold'
},
screenIdentifierContainer:{
    justifyContent:'center',
    flexDirection:'row'      
},
designImage:{
    marginTop:20,
},
textInputContainer:{
    borderWidth:1,
    borderRadius:7,
    borderColor:colors.colorBlack,
    marginLeft:20,
    marginRight:20,
    height:45,
    alignItems:'center',
    paddingLeft:20,
    flexDirection:'row',
},
textInput:{
    paddingLeft:20,
},

signInButton:{
    borderRadius:12,
    backgroundColor:colors.primaryColor,
    height:52,
    width:'80%',
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
},
authButtonText:{
    color:colors.colorWhite,
    fontSize:20,
},
centerHorizontal:{
    alignItems:'center'
},


})