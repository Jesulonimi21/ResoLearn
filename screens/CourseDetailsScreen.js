import React from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity,TextInput,FlatList,ScrollView} from 'react-native';
import colors from '../colors/colors';
import {StatusBar} from 'expo-status-bar';

export default class CourseDetailsScreen extends React.Component{
    
        state={
            coursesArr:[
                {
                    title:'Introduction',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    title:'The Language of Color',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    title:'The Psychology of Color',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    title:'The Psychology of Color',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    title:'Introduction',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    title:'Introduction',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    title:'Introduction',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
            ]
        }

    renderListItem=({item,index})=>{
        return(
            <View style={styles.itemContainer}>

            <View style={[styles.playImageContainer, index>=1?{backgroundColor:colors.colorLightPurple}:{}]}>
                <Image source={index>=1? require('../assets/images/purple_play.png'): require('../assets/images/light_play.png')}></Image>
            </View>
            <View style={styles.itemTextContainer}>
                <Text style={styles.itemTitleText}>{item.title}</Text>
                <Text>{item.description}</Text>
            </View>
        </View>
        );
    }   
    render(){
        return(
            <View style={styles.container}>
            
                

                <FlatList
                    ListHeaderComponent={<>
                    <Text style={styles.screenTitle}>Graphic Design</Text>
                        <Text style={styles.courseTitle}>Learn Graphic Design With Adobe Illustrator in less than 4 hours</Text>
                        <View style={styles.videoBg}>
                            <Image source={require('../assets/images/video_design_i.png')}/>
                            <Image source={require('../assets/images/video_design_ii.png')}/>
                            <Image source={require('../assets/images/video_design_iii.png')}/>
                        </View>
                        <View style={styles.horizontal}>
                            <Text style={{fontSize:18,color:colors.colorBlack,fontWeight:'bold'}}>Course Details</Text>
                            <View style={styles.timeBg}>
                                <Text style={styles.timeText}>3 hours 17 minutes</Text>
                    </View>
                </View>
                    </>}
                    data={this.state.coursesArr}
                    renderItem={this.renderListItem}
                    keyExtractor={(item,index)=>index.toString()}    
                    />


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
    screenTitle:{
        color:colors.colorPurple,
        fontSize:18,
        marginTop:40,
        fontWeight:'bold',
        marginLeft:20
    },
    courseTitle:{
        fontSize:23,
        fontWeight:'bold',
        marginLeft:20,
        marginRight:30,
        marginTop:20
    },
    videoBg:{
        backgroundColor:colors.primaryColor,
        width:'80%',
        borderRadius:20,
        height:150,
        marginTop:20,
        marginLeft:'10%',
        marginRight:'10%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    timeBg:{
        backgroundColor:colors.colorLightPurple,
        justifyContent:'center',
        height:26,
        borderRadius:6,
        paddingLeft:10,
        paddingRight:10

    },
    horizontal:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:20,
        marginRight:20,
        marginTop:20
    },
    timeText:{
        color:colors.colorPurple
    },
    itemContainer:{
        flexDirection:'row',
        marginLeft:20,
        marginRight:20,
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10
    },
    playImageContainer:{
        backgroundColor:colors.primaryColor,
        height:40,
        width:40,
        borderRadius:11,
        justifyContent:'center',
        alignItems:'center'
        
    },
    itemTextContainer:{
        width:'80%',
    },
    itemTitleText:{
        fontWeight:'bold',
        fontSize:16,
    }
});