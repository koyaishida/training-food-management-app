import React ,{useState, useEffect}from 'react';
import { StyleSheet, View, TextInput,Text,  } from 'react-native';
import CircleButton from "../elements/CircleButton"
import firebase from "firebase"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF6",
    width: "100%"
  },
  label : {
    fontSize: 32,
    padding : 20,
  },
  wightManagementLabel: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 24,
    margin: 10,
    backgroundColor: "#fff",
    textAlign: "center",
    width: "80%"
  },
  inputLocation :{
    flexDirection : "row",
  },
  unit : {
    fontSize : 30,
    marginTop :40,
  },
});


const TrainingAddScreen = (props) => {
  console.log(props)
  const [addMenu, setAddMenu] = useState("")
  const part = props.route.params.trainingMenu
  const id = props.route.params.id
  console.log(id)
  //体重の値が０の時エラーにある為、後日修正
  const handleSubmit = () => {
     const db = firebase.firestore();
     const {currentUser} = firebase.auth();
      db.collection(`users/${currentUser.uid}/trainingMenu`).doc(id).update({
        　[part] : firebase.firestore.FieldValue.arrayUnion(addMenu)
      })
     .then(()=> {
       props.navigation.navigate("TrainingMenu")
     })
     .catch((error)=>{
       console.error("Error adding document: ", error);
     });
  }
  
  return (
    <View style={styles.container}>
        <View  style={styles.inputLocation}>
          <TextInput multiline style={styles.wightManagementLabel} value={addMenu}
          onChangeText={text => setAddMenu(text)} placeholder="追加するメニュー名" />
        </View>
      <CircleButton name={"check"} onPress={handleSubmit} placeholder="body"/>
    </View>
  );
}

export default TrainingAddScreen