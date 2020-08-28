import React from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity,TextInput,FlatList,ScrollView} from 'react-native';
import colors from '../colors/colors';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';
class DashBoard extends React.Component{

state={
    sectionsArr:[
        {sectionName:'Programming',image:'',numberOfCourses:12},
        {sectionName:'Graphic Design',image:'',numberOfCourses:12},
        {sectionName:'Home Automation',image:'',numberOfCourses:12},
        {sectionName:'Marketing',image:'',numberOfCourses:12},
        {sectionName:'Programming',image:'',numberOfCourses:12},
        {sectionName:'Programming',image:'',numberOfCourses:12},
        {sectionName:'Programming',image:'',numberOfCourses:12},
    ]
}
    renderListItem=({item})=>{
        return(
            <View style={styles.cardContainer}>
                <Image  source={require('../assets/images/programming_courses_icon.png')}/>
                <View>
                    <Text style={{fontWeight:'bold'}}>{item.sectionName}</Text>
                    <Text style={{color:colors.colorPurple,fontWeight:'bold'}}>{`${item.numberOfCourses} courses`}</Text>
                </View>
            </View>
        )
    }

    render(){
        return(<View style={styles.container}>
          
                
                <View style={{alignItems:'center'}}>
                <FlatList
                    ListHeaderComponent={<>
                        <StatusBar style={"light"}/>
                <View style={styles.headerBg}>
                    <Text style={styles.welcomeIdentifier}>{this.props.email}</Text>
                    <Image style={styles.headerImage} source={require('../assets/images/dashboard_header_image.png')}/>
                    <Text style={[styles.welcomeIdentifier,{fontSize:24,width:'70%',marginTop:5}]}>Hey, What would you like to learn?</Text>
                    <View style={styles.searchInputContainer}>
                            <TextInput style={styles.searchInput} placeholder="Enter your search"></TextInput>
                            <TouchableOpacity style={styles.searchButton}>
                                <Image  source={require('../assets/images/search_white.png')}/>
                            </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.queryContainer}>
                        <Text style={styles.queryText}>Trending</Text>
                        <Text>Popular Courses</Text>
                </View>
                    </>}
                style={{backgroundColor:colors.colorWhite}}
                 data={this.state.sectionsArr}
                 numColumns={2}
                 keyExtractor={(item,index)=>index.toString()}
                 renderItem={this.renderListItem}
                 contentContainerStyle={{backgroundColor:colors.colorWhite}}
                 />
                </View>
                
                  
        </View>)
    }

}
const mapStateToProps=(state)=>{
        return state
}

export default connect(mapStateToProps)(DashBoard)

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'stretch',
        backgroundColor:colors.colorWhite
    },
    headerBg:{
        backgroundColor:colors.primaryColor,
        width:'100%',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        height:220,
    },
    welcomeIdentifier:{
        marginTop:30,
        marginLeft:20,
        fontSize:18,
        color:colors.colorWhite,
        fontWeight:'bold'
    },
    headerImage:{
        position:'absolute',
        top:30,
        width:'25%',
        right:10,
        height:100
    },
    searchInputContainer:{
        height:50,
        backgroundColor:colors.colorWhite,
        borderRadius:24,
        marginTop:20,
        marginLeft:'5%',
        marginRight:'5%',
        position:'relative',
        alignItems:'stretch',
        justifyContent:'center'

    },
    searchInput:{
            flex:1,
            paddingLeft:20,
    },
    searchButton:{
        backgroundColor:colors.colorBlack,
        height:50,
        borderRadius:24,
        width:70,
        position:'absolute',
        right:0,
        alignItems:'center',
        justifyContent:'center'
    },
    queryContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:20,
        marginRight:20,
        marginTop:10
    },
    queryText:{
        color:colors.colorPurple
    },
    cardContainer:{
        height:200,
        width:150,
        elevation:20,
        borderRadius:25,
        alignItems:'center',
        backgroundColor:colors.colorWhite,
        justifyContent:'space-evenly',
        marginLeft:10,
        marginRight:10,
        marginTop:10
    }   
})