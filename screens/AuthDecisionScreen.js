import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Image,ScrollView,LayoutAnimation,Animated} from 'react-native';
import colors from '../colors/colors';
export default class AuthDecisionScreen extends React.Component{
  
    State={
        Launching:'Launching',
        WillTransitionIn:'WillTransitionIn',

    }

    state={
        transitionState:this.State.Launching
    }
    toggleOpacity= new Animated.Value(0);
    translateViews=new Animated.Value(500)
    async componentDidMount(){
        Animated.timing(this.toggleOpacity,
            {toValue:1,duration:1000,useNativeDriver:true})
        .start();
        Animated.timing(this.translateViews,{
            duration:1000,
            toValue:0,
            useNativeDriver:true
        }).start()
    }


    handleSignUpPress=()=>{
        const {navigation:{navigate}}=this.props;
        navigate('SignUpScreen')
    }

    handleSignInPress=()=>{
        const {navigation:{navigate}}=this.props;
        navigate('SignInScreen')
    }
    render(){
        return(<View style={styles.container}>
    
            <Animated.Image style={[styles.logoStyle,{opacity:this.toggleOpacity,transform:[{translateY:this.translateViews}]}]} source={require('../assets/images/reso_learn_logo.png')}/>
            
            
           <Animated.View style={[styles.signUpButtonContainer,{transform:[{translateY:this.translateViews}]}]}>
                
                <TouchableOpacity style={styles.signInButton}
                    onPress={this.handleSignInPress}>
                    <Text style={styles.authButtonText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signInButton}
                        onPress={this.handleSignUpPress}>
                    <Text style={styles.authButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </Animated.View>
           
        </View>)
    }

}

const styles=StyleSheet.create({
    container:{
        alignItems:'stretch',
        justifyContent:'center',
        flex:1,
        backgroundColor:colors.colorWhite
        
    },
    logoStyle:{
       position:'relative',
        // borderWidth:2,
        // borderColor:colors.colorBlack,
        bottom:60,
    },

    signUpButtonContainer:{
        position:'absolute',
        alignItems:'center',
        left:0,
        right:0,
        height:150,
        bottom:10,
        justifyContent:'space-around'
    },
    signInButton:{
        borderRadius:12,
        backgroundColor:colors.primaryColor,
        height:52,
        width:'80%',
        alignItems:'center',
        justifyContent:'center'
    },
    authButtonText:{
        color:colors.colorWhite,
        fontSize:20,
    }




})