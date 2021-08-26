import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';
import data from './data';

function random_item(items){
return items[Math.floor(Math.random()*items.length)];    
}
console.log(random_item(data));

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    mainQuestion: null,
    wrong: null,
    wrongTwo: null,
    loading :true

    // _id : () => getRandomid(0,2)
   
  };
  }

componentDidMount(){
  let newData = data
  console.log(newData,"1. new data");
  const randomMainQuestion = random_item(newData)

  console.log(randomMainQuestion,"RANDOM");
  newData=newData.filter(x => x._id !==randomMainQuestion._id )

  console.log(newData,"2 new data");

  
  const wrong = random_item(newData)
  const filteredData=newData.filter(item => item._id !==wrong._id )

  console.log(filteredData,"FFFFFF");


  const wrongTwo = random_item(filteredData)

  

  


  this.setState({mainQuestion:randomMainQuestion, wrong,wrongTwo, loading:false})

}

  render() {
    return this.state.loading ? <Text>Loading</Text>: (
      <View style={styles.container}>
        <View style={styles.images}>
        <Image source={require('./src/assets/false.jpg')} 
        style={{width:60,height:60,right:130 ,resizeMode:'contain'}}></Image>
         <Image source={require('./src/assets/true.jpg')} 
        style={{width:60,height:60,left:130 ,resizeMode:'contain'}}></Image>
        </View>
         <View style={styles.alan}>
           <Text>{this.state.mainQuestion.en}</Text>
         </View>
         <View style={styles.buttons}>
        <Button 
        title= {this.state.mainQuestion.tr} 
        color='#D9728C'
        onPress={this.onPressDecrease}/>
        <Button
        title= {this.state.wrong.tr}
        color='#D9728C' 
        onPress={this.onPressDecrease}/>
        <Button 
        title= {this.state.wrongTwo.tr} 
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
