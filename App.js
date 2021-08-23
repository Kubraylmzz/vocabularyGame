import React, { Component } from 'react';
import { View, Text,StyleSheet, Button,Image, FlatList} from 'react-native';
import data from './data';

export default class App extends Component {


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.images}>
        <Image source={require('./src/assets/false.jpg')} 
        style={{width:60,height:60,right:130 ,resizeMode:'contain'}}></Image>
         <Image source={require('./src/assets/true.jpg')} 
        style={{width:60,height:60,left:130 ,resizeMode:'contain'}}></Image>
        </View>
         <View style={styles.alan}>
           <Text>{data[0].tr}</Text>
         </View>
         <View style={styles.buttons}>
        <Button 
        title= {data[2].en} 
        color='#D9728C'
        onPress={this.onPressDecrease}/>
        <Button 
        title= {data[1].en}
        color='#D9728C' 
        onPress={this.onPressDecrease}/>
        <Button 
        title= {data[0].en} 
        color='#D9728C' 
        onPress={this.onPressDecrease}/>
        </View> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FCEEF9',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alan:{
    width: '55%',
    //  marginHorizontal: 100,
    //  marginVertical: 200,
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 2,
    shadowRadius: 5,
    shadowOffset:{
      width: 0,
      height: 10,
    },
    elevation: 10
  },
  buttons: {
    flex:3,
     width: '50%',
    //  height: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'column'
  },
  images:{
    flex:1,
    flexDirection:'row',
    // justifyContent: 'space-evenly',
  }
})
