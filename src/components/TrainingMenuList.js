import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight,SectionList,SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  header: {
    backgroundColor: 'green',
    fontSize: 20,
    color: "#fff",
    padding: 12,
    fontWeight: "bold",
  },
  item: {
    padding: 12,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: '#fff',
  },
})

 const  TrainingMenuList =(props)=> {
   console.log(props.trainingMenu)
   const DATA = props.trainingMenu
   const Item = ({ title }) => (
    <TouchableHighlight style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
  );
   return(
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
  </SafeAreaView>
   )
 }


export default TrainingMenuList ;