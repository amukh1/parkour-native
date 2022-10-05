import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './styles.js';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient  colors={['#fc9003', '#fc3903']} style={styles.container}>

    {/* <View style={styles.container}> */}

      <View style={styles.nav}>
        <Image source={require('./assets/icon.png')} style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          color: 'white',
        }}/>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Home</Text>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Leaderboard</Text>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Stats</Text>  
      </View>

      <View style={styles.userData}> 
        <Text style={styles.userName}>Amukh1</Text>
        <Text style={styles.rank}>Rank: Diamond II</Text>
        <Text style={styles.userLevel}>Level: 250</Text>
      </View>

      <View style={styles.recentMatches}>
<Text style={styles.mtitle}>
  Last 10 Matches
</Text>

<Text style={styles.avg}>
  4.2 Avg
</Text>
      </View>

      <View style={styles.smthn}>

      <Text style={styles.mtitle}>
  Next Level:
</Text>

<Text style={styles.avg}>
  6.4m XP
</Text>

      </View>


      <View style={styles.footer}>
      <Text style={styles.ftitle}>
  Programmed and designed by amukh1.
</Text>
        </View>

      <StatusBar style="auto" />
    {/* </View> */}
    </LinearGradient>
  );
}