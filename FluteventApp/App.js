import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View ,SafeAreaViewBase} from 'react-native';

const App =()=> {
  return ( 
<SafeAreaView style={{backgroundColor: "#0DCDAA",flex:1}}>
<View style={{marginTop:290,marginLeft:120}} > 
      <Text style={{color:"#FFFFFF", fontWeight:"bold", fontSize:95}}> Flut</Text>
</View>
</SafeAreaView>
   
    
  );
}

export default App;