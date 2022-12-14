import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Modafoca!</Text>
      <StatusBar style="auto" />
      <Button title="SENDDDDDDD"/>
      <Button title="THISSSSSS"/>
      <Button title="SHITTTTTTT"/>
    </View>
  );
}

interface ButtonProps{
  title: string;
}

function Button(props: ButtonProps){
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  title: {
    fontSize: 22,
  }
});
