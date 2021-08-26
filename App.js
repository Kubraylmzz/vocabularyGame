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
    loading :true,
    trueAnswer: 0,
    falseAnswer: 0
  };
  }


componentDidMount(){
  let newData = data

  const randomMainQuestion = random_item(newData)

  newData=newData.filter(x => x._id !==randomMainQuestion._id )

  const wrong = random_item(newData)
  const filteredData=newData.filter(item => item._id !==wrong._id )


  const wrongTwo = random_item(filteredData)
  this.setState({mainQuestion:randomMainQuestion, wrong,wrongTwo, loading:false})

}


fetchNewData(){
  let newData = data

  const randomMainQuestion = random_item(newData)

  newData=newData.filter(x => x._id !== randomMainQuestion._id )

  const wrong = random_item(newData)
  const filteredData=newData.filter(item => item._id !== wrong._id )


  const wrongTwo = random_item(filteredData)
  this.setState({mainQuestion:randomMainQuestion, wrong,wrongTwo})

}


 onPressDecrease(e){
   if (e === this.state.mainQuestion.tr) {
     let count = this.state.trueAnswer;
     count++
     console.log(count);
     this.setState({trueAnswer:count}) 
     console.log("Doğru cevap");
   } else {
    let falseCount = this.state.falseAnswer;
    falseCount++ 
    console.log(falseCount);
    this.setState({falseAnswer:falseCount}) 
    console.log("Yanlış cevap");    
   }
   this.fetchNewData()
 }


 shuffle(main, wrongOne, wrongTwo) {

 
  comp =  [
    <Button 
     title= {main} 
     color='#D9728C'
     onPress={()=>{this.onPressDecrease(main)}}/>,
    
     <Button
     title= {wrongOne}
     color='#D9728C' 
     onPress={()=>this.onPressDecrease(wrongOne)}/>,
     
     <Button 
     title= {wrongTwo} 
     color='#D9728C' 
     onPress={()=>this.onPressDecrease(wrongTwo)}/>
   ]

  let currentIndex = comp.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [comp[currentIndex], comp[randomIndex]] = [
    comp[randomIndex], comp[currentIndex]];
  }

  return comp
}
   
  render() {
    return this.state.loading ? <Text>Loading</Text>: (
      <View style={styles.container}>
        <View style={styles.images}>
        <Image source={require('./src/assets/false.jpg')} 
        style={{width:60,height:60,right:120,resizeMode:'contain'}}></Image>
         <Text style={styles.text}>{this.state.falseAnswer}</Text>
         <Image source={require('./src/assets/true.jpg')} 
        style={{width:60,height:60,left:130 ,resizeMode:'contain'}}></Image>
         <Text style={styles.text1}>{this.state.trueAnswer}</Text>
        </View>
         <View style={styles.alan}>
           <Text>{this.state.mainQuestion.en}</Text>
         </View>
         <View style={styles.buttons}>
        {/* <Button 
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
        onPress={this.onPressDecrease}/> */}

        {this.shuffle(this.state.mainQuestion.tr, this.state.wrong.tr, this.state.wrongTwo.tr).map((x, index) => 
        <View key={index} >
          {x}
        </View> )}
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
  },
  text:{
      right:100,
      top: 15,
      fontSize: 25
  },
  text1:{
    left:40,
    top: 15,
    fontSize: 25

  }
})
