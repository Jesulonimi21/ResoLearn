import React from 'react';
import {Image,StyleSheet,View,Text} from 'react-native';
import colors from '../../colors/colors';
// import PropTypes from 'prop-types';
export default function view_i(props){
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                    <Image style={styles.image} source={props.uri}/>
            </View>
            <Text style={styles.descText}>{props.descText}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        height:300,
        justifyContent:'space-around',
        width:'100%',
        borderWidth:2,
        borderColor:colors.colorWhite

    },

    imageContainer:{
        flexDirection:'row',
        justifyContent:'center'
    },
    descText:{
        color:colors.colorBlack,
        fontSize:25,
        marginLeft:10,
        marginRight:10,
        textAlign:'center'
    },
    // image:{
    //    width:200,
    //    height:200,
    // }

})