import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    let valid = true;

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      // Proceed with login logic
      console.log('Logging in with', { email, password });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <Text style={styles.subHeader}>
        Welcome back, login to continue enjoying 
        professional services at a lower cost.
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter email'
          placeholderTextColor="black"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          onBlur={() => !email && setEmailError('Email is required')}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <TextInput
          placeholder='Enter password'
          placeholderTextColor="black"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
          onBlur={() => !password && setPasswordError('Password is required')}
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      </View>
      <Pressable style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgotten Password?</Text>
      </Pressable>
      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>
      <View style={styles.orContainer}>
        <View style={styles.separator} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.separator} />
      </View>
      <Pressable style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>
          <Link href='../registerPage/registerPage'>
          Sign Up 
        </Link>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    gap:6
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  forgotPassword: {
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: 'blue',
  },
  loginButton: {
    width:"95%",
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    alignSelf:"center",
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: 'rgb(229,255,270)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width:"95%"
  },
  signUpButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    padding:6,
    alignSelf:"center"
  },
});

export default Login;
