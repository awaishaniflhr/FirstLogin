import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'


// For Hold Email and Password Value
state={
  email:"",
  password:""
}

const Login = () => {
  return (
    <View style = {styles.Container}>
      <Text style = {styles.logoText}>HeyApp</Text>
      <View style={styles.inputView} >
        <TextInput style={styles.inputText}
          placeholder="Email..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({email:text})}/>
      </View>

      <View style={styles.inputView} >
        <TextInput style={styles.inputText}
          placeholder="Password..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({password:text})}/>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password ?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
      
    </View>
    
  )
}

export default Login

const styles = StyleSheet.create({
  titleText: {
    fontSize: 40,
    color: '#f85b5d',
    fontWeight: 'bold',
    textAlign: 'center',
    alignContent: 'center',
  },
  Container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:14,
    fontWeight: '600',
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:15
  },
  loginText: {
    color:"white",
    fontSize:14,
    fontWeight: '800',
  }
})