import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  const data = [
    { id: '1', title: 'Mobile App Development' },
    { id: '2', title: 'Web Development' },
    { id: '3', title: 'Push Ups' },
    { id: '4', title: 'Cooking' },
    { id: '5', title: 'Bathing' },
    { id: '6', title: 'Washing' },
    { id: '7', title: 'Coding' },
    { id: '8', title: 'Learning' },
    { id: '9', title: 'Sleeping' },
    { id: '11', title: 'Soccer' },
    { id: '11', title: 'Hicking' },
    { id: '12', title: 'Lectures' },
    { id: '13', title: 'Assignments' },
    { id: '14', title: 'Desktop app development' },
    { id: '15', title: 'Texting' },
  ];

  const renderItem = ({ item }) => (
    <View style={{ padding: 11 }}>
      <Text style={{height: '6rem', paddingTop: '2rem',
    width: '21rem', fontWeight: 'bold', paddingLeft: '1rem',
    backgroundColor: 'white', fontSize: '1rem',}}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
    <View>
      <Text style={styles.first}>Hello, Devs</Text>
      <Image source={require('./images/Profile Image.png')} style={styles.seventh}></Image>
      <Text style={styles.sixth}>14 tasks today</Text>
      </View>
      <View>
      <TextInput placeholder="Search" style={styles.second}></TextInput>
      <Ionicons name="search" style={styles.fifth}></Ionicons>
      <View>
      <Image source={require('./images/Filter.png')} style={styles.ninth}></Image>
      </View>
      </View>
      <View>
      <Text style={styles.third}>Categories</Text>
      </View>
      <ScrollView horizontal={true}>
      <View>
      <Image source={require('./images/rectangle.png')} style={styles.tenth}></Image>
      <Image source={require('./images/young woman working online.png')} style={styles.fourth}></Image>
      </View>
      <View>
      <Image source={require('./images/rectangle2.png')} style={styles.eleventh}></Image>
      <Image source={require('./images/young woman working at desk.png')} style={styles.eight}></Image>
      </View>
      <View>
      <Image source={require('./images/rectangle3.png')} style={styles.twelvth}></Image>
      <Image source={require('./images/bath.png')} style={styles.eighteenth}></Image>
      </View>
      <View>
      <Image source={require('./images/rectangle4.png')} style={styles.thirteenth}></Image>
      <Image source={require('./images/clean.png')} style={styles.nineteenth}></Image>
      </View>
      <View>
      <Image source={require('./images/rectangle5.png')} style={styles.fourteenth}></Image>
      <Image source={require('./images/cook.png')} style={styles.twenteeth}></Image>
      </View>
      <View>
      <Image source={require('./images/rectangle6.png')} style={styles.fifteenth}></Image>
      <Image source={require('./images/meditate.png')} style={styles.twentyfirst}></Image>
      </View>
      <View>
      <Image source={require('./images/rectangle7.png')} style={styles.sixteenth}></Image>
      <Image source={require('./images/wash.png')} style={styles.twentysecond}></Image>
      </View>
      <View>
      <Image source={require('./images/rectangle8.png')} style={styles.seventeenth}></Image>
      <Image source={require('./images/code.png')} style={styles.twentythird}></Image>
      </View>
      </ScrollView>
      <View>
      <Text style={styles.twentyfourth}>Ongoing Task</Text>
      </View>
      <ScrollView vertical={true}>
      <View>
      <FlatList style={styles.twentyfifth} data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}/>
      </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
  },
  first: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginLeft: '1rem',
    marginTop: '2rem',
  },
  second: {
    width: '18rem',
    backgroundColor: 'white',
    height: '2rem',
    borderRadius: '0.5rem',
    marginTop: '2rem',
    marginLeft: '1rem',
    paddingLeft: '1.5rem',
  },
  third: {
    marginLeft: '1rem',
    fontWeight: 'bold',
    marginTop: '2rem',
    fontSize: '1.3rem',
  },
  fourth: {
  height: '6rem',
  width: '6rem',
  marginLeft: '3rem',
  marginTop: '-7rem',
  },
  fifth: {
  marginTop: '-1.4rem',
  marginLeft: '1.5rem',
  },
  sixth: {
    marginLeft: '1rem',
    fontWeight: 'bold',
  },
  seventh: {
    marginLeft: '87vw',
    height: '2rem',
    marginTop: '-1.8rem',
    width: '2rem',
  },
  eight: {
    height: '6rem',
    width: '6rem',
    marginTop: '-7rem',
    marginLeft: '6rem',
    },
  ninth: {
      marginLeft: '87vw',
      height: '2rem',
      marginTop: '-1.5rem',
      width: '2rem',
  },
  tenth: {
  height: '11rem',
  width: '11rem',
  marginLeft: '1rem',
  marginTop: '1rem',
  },
  eleventh: {
  height: '11rem',
  width: '11rem',
  marginLeft: '2rem',
  marginTop: '1rem',
  },
  twelvth: {
    height: '11rem',
    width: '11rem',
    marginLeft: '2rem',
    marginTop: '1rem',
  },
  thirteenth: {
    height: '11rem',
    width: '11rem',
    marginLeft: '2rem',
    marginTop: '1rem',
  },
  fourteenth: {
    height: '11rem',
    width: '11rem',
    marginLeft: '2rem',
    marginTop: '1rem',
  },
  fifteenth: {
    height: '11rem',
    width: '11rem',
    marginLeft: '2rem',
    marginTop: '1rem',
  },
  sixteenth: {
    height: '11rem',
    width: '11rem',
    marginLeft: '2rem',
    marginTop: '1rem',
  },
  seventeenth: {
    height: '11rem',
    width: '11rem',
    marginLeft: '2rem',
    marginTop: '1rem',
  },
  eighteenth: {
    height: '6rem',
    width: '6rem',
    marginTop: '-7rem',
    marginLeft: '5rem',
  },
  nineteenth: {
    height: '6rem',
    width: '6rem',
    marginTop: '-7rem',
    marginLeft: '5rem',
  },
  twenteeth: {
    height: '6rem',
    width: '6rem',
    marginTop: '-7rem',
    marginLeft: '5rem',
  },
  twentyfirst: {
    height: '6rem',
    width: '6rem',
    marginTop: '-7rem',
    marginLeft: '5rem',
  },
  twentysecond: {
    height: '6rem',
    width: '6rem',
    marginTop: '-7rem',
    marginLeft: '5rem',
  },
  twentythird: {
    height: '6rem',
    width: '6rem',
    marginTop: '-7rem',
    marginLeft: '5rem',
  },
  twentyfourth: {
    marginLeft: '1rem',
    marginTop: '2rem',
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
  twentyfifth: {
    height: '20rem',
    marginTop: '0rem',
    marginLeft: '1rem',
  },
});
