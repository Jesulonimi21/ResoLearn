import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import colors from '../colors/colors';
import SplashScreenView from '../components/splash_view_pager_views/view_i';
import ViewPagerIndicator from '../components/splash_view_pager_views/ViewPagerIndicator';
import {StatusBar} from 'expo-status-bar';
export default class SplashScreen extends React.Component{

    State={
        Launching:'Launching',
        WillTransitionIn:'WillTransitionIn',

    }
    state={
        viewPagerIndex:0,
        buttonText:'Skip',
        transitionState:this.State.Launching
    }


    componentDidMount(){

    }
    handlePageSelected=(e)=>{
        console.log(e.nativeEvent.position)
        this.setState({viewPagerIndex:e.nativeEvent.position})
        if(e.nativeEvent.position==2){
            this.setState({buttonText:'Continue'})
        }
    }

    handleActionButtonPress=()=>{
        const{navigation:{navigate}}=this.props;
        navigate('AuthScreen')
        
    }
    render(){

    

        return(
            <View style={styles.container}>
              <StatusBar style={"light"}/>
                <Image style={styles.header} 
                source={require('../assets/images/splash_screen_header.png')}></Image>
                <ViewPager style={styles.viewPager} initialPage={0} onPageSelected={this.handlePageSelected}>
                    <SplashScreenView uri={require(`../assets/images/splash_screen_i.png`)} descText="You are what you learn" key="1"/>
                    <SplashScreenView uri={require(`../assets/images/splash_screen_ii.png`)} descText="Learning is a product of your effort" key="2"/>
                    <SplashScreenView uri={require(`../assets/images/splash_screen_iii.png`)} descText="Learning is a product of your effort" key="3"/>
                </ViewPager>

                <ViewPagerIndicator index={this.state.viewPagerIndex}></ViewPagerIndicator>
                
                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={this.handleActionButtonPress}>
                    <Text style={styles.actionText}>{this.state.buttonText}</Text>
                </TouchableOpacity>
            </View>

        );
    }

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'stretch',
        backgroundColor:colors.colorWhite
    },

    viewPager:{
        height:500,
        position:'absolute',
    },

    actionButton:{
        borderRadius:12,
        height:52,
        left:'10%',
        right:'10%',
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:colors.primaryColor,
        position:'absolute',
        bottom:'5%'
    },
    actionText:{
        fontSize:18,
        fontWeight:'bold',
        color:colors.colorWhite
    },
    header:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        height:70
    }
})