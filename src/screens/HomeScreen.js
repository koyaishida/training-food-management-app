import React from 'react';
import { StyleSheet, View, Text,TouchableHighlight } from 'react-native';
import firebase from "firebase"
import {LineChart} from "react-native-chart-kit"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF6",
    width: "100%"
  },
  upperContainer :{
    flexDirection: "row",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center"
  },
  upperContainerTitle : {
    fontSize: 30,
  },
  upperContainerText : {
    fontSize: 24,
    alignSelf: "flex-end"
  },
  lineChart: {
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "green",
    height: 48,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    marginTop: 10,
  },
  buttonTitle: {
    fontSize:20,
    color: "#fff",
  },
});

const chartConfig = {
  backgroundColor: '#fff',
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 0.5) => `rgba(0, 0, 0,0.5)`,
}


const decimalPoint  = (y)=>{
 return parseFloat(y).toFixed(1)
}

const toInteger = (y)=>{
  return parseFloat(y).toFixed()
 }


class HomeScreen extends React.Component {

  
  state = {
    weightData : [],
    weightLabels : [],
    weightList :[1],
    kcalList:[1],
    kcalLabels:[1],
    currentKcal: "",
  }

  dateToString = (date)=>{
    const str = date.toDate().toISOString();
    return str.split("T")[0] 
  }

  componentWillMount(){
    console.log(this.props)
  
  //   const {currentUser} = firebase.auth();
  //   const db =firebase.firestore()

    
  //   db.collection(`users/${currentUser.uid}/weight`)
  //   .onSnapshot((querySnapshot)=>{
      
  //     const weightData =[];
  //     //firebaseから体重データを取得
  //      querySnapshot.forEach((doc)=>{
  //        weightData.push({...doc.data(),key: doc.id})
  //       })
  //      this.setState({weightData})

  //     //日付の取得
  //     const weightLabels = [];
  //     const sortedWeightData = [...weightData].sort((a,b)=>(a.date.seconds - b.date.seconds))

  //     sortedWeightData.forEach((item)=>{
  //       weightLabels.push(this.dateToString(item.date).slice(5))
  //     })
  //     this.setState({weightLabels})

  //     //体重の値の取得
  //     const weightList =[]
  //     sortedWeightData.forEach((item)=>{
  //       weightList.push(parseFloat(item.weight).toFixed())
  //     })
  //     this.setState({weightList:weightList})
  //   })
    

  //   db.collection(`users/${currentUser.uid}/food`)
  //   .onSnapshot((querySnapshot)=>{
  //     const foodData =[];
  //     //firebaseから食事データを取得
  //      querySnapshot.forEach((doc)=>{
  //        foodData.push({...doc.data(),key: doc.id})
  //       })
  //      this.setState({foodData})
       
  //     //kcalの加工
  //     const kcalList =[]
  //     const sortedKcalData = [...foodData].sort((a,b)=>(a.date.seconds - b.date.seconds))
      
  //     for(let i = 0; i < sortedKcalData.length ; i++){
  //       if(i === 0){
  //         kcalList.push(parseFloat(sortedKcalData[i].kcal))
  //       }else{
  //         if(this.dateToString(sortedKcalData[i].date) === this.dateToString(sortedKcalData[i -1].date)){
  //           kcalList[kcalList.length-1] += parseFloat(sortedKcalData[i].kcal)
  //         }else{
  //             kcalList.push(parseFloat(sortedKcalData[i].kcal))
  //           }
  //       }
  //     }
  //     this.setState({kcalList})
  //     this.setState({currentKcal :kcalList[kcalList.length-1] }) 


  //     //kcalLabelの加工
  //     const kcalLabels = [];

  //     for (let i = 0; i < sortedKcalData.length; i++){
  //       if(i === 0){
  //         kcalLabels.push(this.dateToString(sortedKcalData[i].date).slice(5))
  //       }else {
  //         if(this.dateToString(sortedKcalData[i].date) === this.dateToString(sortedKcalData[i -1].date)){
  //         }else{
  //             kcalLabels.push(this.dateToString(sortedKcalData[i].date).slice(5))
  //           }
  //       }
  //     }
  //     this.setState({kcalLabels})
  //   })
  }
  
  

  render(){
    return (
      <View style={styles.container}>
        <View  style={styles.upperContainer}>
          <View>
            <Text style={styles.upperContainerTitle}>摂取カロリー</Text>
            <Text style={styles.upperContainerText}>{`${this.state.currentKcal}kcal`}</Text>
          </View>

          <View>
            <Text style={styles.upperContainerTitle}>目標体重まで</Text>
            <Text style={styles.upperContainerText}>5kg</Text>
          </View>
        </View>
        <LineChart 
            data = {{
                  labels: [1,2,3],
                  datasets:[{data:[1,2,3,4,]}]
              // labels: this.state.weightLabels,
              // datasets: [{data:this.state.weightList
              // },
              // ] 
            }}
            formatYLabel={decimalPoint}
            yAxisSuffix=" kg"
            style={styles.lineChart} 
            width={400} height={200} 
            chartConfig={chartConfig}
            withInnerLines={false}
            withOuterLines={false}
        />
        {/* <LineChart 
            data = {{
              labels: this.state.kcalLabels,
              datasets: [{data: this.state.kcalList},
            ]}}
            formatYLabel={toInteger}
            yAxisSuffix="kcal"
            style={styles.lineChart} 
            width={400} height={200} 
            chartConfig={chartConfig}
            withInnerLines={false}
            withOuterLines={false}
            /> */}

        <TouchableHighlight style={styles.button} underlayColor="#C70F66"
        onPress={()=>this.props.navigation.navigate("Login")}
        >
        <Text style={styles.buttonTitle}>今日のトレーニング
        </Text>
        </TouchableHighlight>

        {/* <TouchableHighlight style={styles.button} underlayColor="#C70F66"
        onPress={()=>{this.props.navigation.navigate("FoodManagement")}}
        >
          <Text style={styles.buttonTitle}>今日の食事</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} underlayColor="#C70F66"
        onPress={()=>{this.props.navigation.navigate("WeightManagement")}}
        >
        <Text style={styles.buttonTitle} >今日の体重</Text>
        </TouchableHighlight> */}

      </View>
    ); 
  } 
}

export default HomeScreen