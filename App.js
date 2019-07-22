import * as React from 'react';
import { Text, View, StyleSheet,ListView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor(props){
    super(props);
     
     const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2});
     this.state = {
        dataSource: ds.cloneWithRows(['row10','row2']),
        };
  }
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.paragraph}>
      //    Hello world
      //   </Text>
      // </View>,
      
      <ListView style = {styles.vtable}
      dataSource = {this.state.dataSource}
      renderRow = {(data)=> <View><Text style = {styles.paragraph}>{data}</Text></View>}
      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
     backgroundColor: '#ecf0f1',
  },
    vtable: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#94b8b8',
  }
});
