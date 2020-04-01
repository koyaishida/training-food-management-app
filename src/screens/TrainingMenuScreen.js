import React ,{useState,useEffect}from 'react';
import { StyleSheet, View,} from 'react-native';
import TrainingMenuList from "../components/TrainingMenuList"
import CircleButton from "../elements/CircleButton"
import firebase from "firebase"



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFDF6",
    width: "100%"
  },
  
});


const TrainingMenuScreen = (props)=> {
   const [trainingMenu,setTrainingMenu] = useState([])
  // const [foodList,setFoodList] = useState([])
  // const [currentDay,setCurrentDay] = useState(new Date().toISOString().split("T")[0],)

  useEffect(()=>{
    const {currentUser} = firebase.auth();
    const db =firebase.firestore()
    
     db.collection(`users/${currentUser.uid}/trainingMenu`)
     .onSnapshot((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
          const menu = doc.data()
          const trainingMenu = Object.entries(menu).map(([title,data])=>(
            {title,data}
          ))
          setTrainingMenu(trainingMenu)
        })
     })
     console.log(trainingMenu)
  },[])
    
  
  

 
    return (
      <View style={styles.container}>
           <TrainingMenuList 
            trainingMenu={trainingMenu}
            navigation={props.navigation}/> 
        <CircleButton name={"plus"} onPress={()=>props.navigation.navigate("FoodAdd")}/>
      </View>
    ); 
  
}
export default TrainingMenuScreen