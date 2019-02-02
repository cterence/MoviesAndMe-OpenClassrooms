import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class FilmItem extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Image style={styles.image}/>
        <View style={styles.prop_container}>
          <View style={styles.view_header}>
            <Text style={styles.title_text}>Titre du film</Text>
            <Text style={styles.vote}>Vote</Text>
          </View>
          <View style={styles.view_description}>
            <Text style={styles.description}>Description</Text>
          </View>
          <View style={styles.view_date}>
            <Text style={styles.date}>Sorti le 00/00/0000</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    paddingBottom: 5
  },
  image: {
    flex: 1,
    backgroundColor: 'grey'
  },
  prop_container:{
    marginLeft: 5,
    marginRight: 5,
    flex: 3,
    flexDirection: 'column',
  },
  view_header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30
  },
  title_text: {
    flex: 2,
    fontWeight: 'bold',
    fontSize: 15
  },
  vote :{
    flex: 1,
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'grey'
  },
  view_description: {
    flex: 3,
  },
  description: {
    fontStyle: 'italic',
    color: 'grey'
  },
  view_date: {
    flex: 1,
    justifyContent: 'center'
  },
  date: {
    textAlign: 'right'
  }
})

export default FilmItem
