import React from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity,TextInput,ScrollView} from 'react-native';
import colors from '../colors/colors';
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import { act } from 'react-test-renderer';
 class SignInScreen extends React.Component{
    state={
        emailValue:""
    }

    handleForgotPasswordClicked=()=>{
        const{navigation:{navigate}}=this.props;
        navigate('ForgotPassword');
    }

    handleSignUpPress=()=>{
        const{navigation:{navigate}}=this.props;
        navigate('SignUpScreen');
    }

    handleSignInPress=()=>{
        this.props.saveInfo(this.state.emailValue)
        const{navigation:{navigate}}=this.props;
        navigate('Primary Navigation');
    }

    handleInputChange=(event)=>{
        this.setState({emailValue:event.nativeEvent.text})
    }

    componentDidMount(){
        console.log(this.props.username);
    }
    render(){
        return(<View style={styles.container}>
        <ScrollView>
            <View style={styles.screenIdentifierContainer}>
                 <Text style={styles.screenIdentifier}>Sign In</Text>    
            </View>
            
            <View style={styles.screenIdentifierContainer}>
             <Image style={styles.designImage} source={require('../assets/images/signin_screen_image.png')}/>
            </View>
          
            <View style={styles.screenIdentifierContainer}>
                <Text style={styles.screenIdentifier}>Welcome to Resolearn</Text>
            </View>

            <View style={[styles.textInputContainer,{marginTop:30}]}>
                <Image source={require('../assets/images/start_email_icon.png')}/>
                <TextInput style={styles.textInput}
                    placeholder="Email" onChange={this.handleInputChange}/>
            </View>
            <View style={[styles.textInputContainer,{marginTop:30}]}>
            <Image source={require('../assets/images/start_password_icon.png')}/>
                <TextInput style={styles.textInput}
                    placeholder="Password"/>
            </View>

            <View style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordText} onPress={this.handleForgotPasswordClicked}>Forgot Password?</Text>
            </View>

            <View style={styles.centerHorizontal}>
            <TouchableOpacity style={styles.signInButton} onPress={this.handleSignInPress}>
                    <Text style={styles.authButtonText}>Sign In</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.centerHorizontal}>
                <View style={styles.dontHaveAccountContainer}  >
                    <Text style={styles.dontHaveAccountText} onPress={this.handleSignUpPress}>Dont have an account? </Text><Text style={styles.dontHaveAccountSignUp} onPress={this.handleSignUpPress}>Sign up</Text>
                </View>
            </View>

            <View style={styles.divider}/>
            <View style={styles.otherAuthContainer}>
                <Image source={require('../assets/images/facebook_sign_in_icon.png')}/>
                <Image source={require('../assets/images/google_sign_in_icon.png')}/>
            </View>
            
        </ScrollView>

              </View>)
    }
}

const mapStateToProps=(state)=>{
    return state;
}
const mapDispatchToProps=(dispatch)=>{
    return{
        saveInfo:(email)=>dispatch(actions.saveEmail(email))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignInScreen);
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
        flex:1
    },
    forgotPasswordContainer:{
        alignItems:'flex-end',
        marginLeft:20,
        marginRight:20,
        marginTop:10
    },
    forgotPasswordText:{
        color:colors.colorAccent,
        fontWeight:'bold',
        fontSize:18,
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
    dontHaveAccountContainer:{
        flexDirection:'row',
        marginTop:10
    },
    dontHaveAccountSignUp:{
        color:colors.colorPurple,
        fontSize:18
    },
    dontHaveAccountText:{
        fontSize:18
    },
    divider:{
        borderWidth:1, 
        borderColor:colors.colorPurple,
         marginTop:10
        },

    otherAuthContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        marginLeft:20,
        marginRight:20
    }
})