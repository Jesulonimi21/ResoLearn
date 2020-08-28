import React from 'react';
import {Image,StyleSheet,View,Text} from 'react-native';
import colors from '../../colors/colors';


export default function ViewPagerIndicator(props){
    return(
        <View style={styles.container}>
            <View style={styles.circlesContainer}>
                <View style={[styles.circleStyle,props.index>=0?styles.circlePainted:styles.circleUnPainted]}></View>
                <View style={[styles.circleStyle,props.index>=1?styles.circlePainted:styles.circleUnPainted]}></View>
                <View style={[styles.circleStyle,props.index>=2?styles.circlePainted:styles.circleUnPainted]}></View>
            </View>
            <View></View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:'30%',
        left:0,
        right:0
    },
    circleStyle:{
        height:30,
        width:30,
        borderRadius:15,
    },
    circlePainted:{
        backgroundColor:colors.primaryColor
    },
    circleUnPainted:{
        backgroundColor:colors.colorLightSkyBlue
    },
    circlesContainer:{
        justifyContent:'space-around',
        width:100,
        flexDirection:'row' 

    }
})