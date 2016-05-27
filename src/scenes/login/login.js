'use strict';

import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBarAndroid from 'react-native-android-statusbar';
import {AppRegistry, Image, Alert, ListView, StyleSheet, Text, View, DrawerLayoutAndroid, ToolbarAndroid, Navigator, TouchableHighlight, BackAndroid, ItemCheckbox, AsyncStorage} from 'react-native';

import lbFetch from '../../components/lb-fetch-methods';
import t from '../../components/forms';

var Form = t.form.Form;

let options = {
  auto: 'placeholders',
  fields: {
  }
};

let username = {
  label: 'Username',
  maxLength: 12,
  error: 'Must have 6-12 characters and/or numbers'
};

let email = {
  label: 'Email',
  keyboardType: 'email-address',
  error: 'Please enter a valid email'
};

let password = {
  label: 'Password',
  maxLength: 12,
  secureTextEntry: true,
  error: 'Must have 6-12 characters with at least 1 number and 1 special character'
};

let passwordAgain= {
  label: 'Please enter password again',
  secureTextEntry: true,
  maxLength: 12,
  error: 'Passwords must match'
};

export class RegisterForm extends Component {
  render() {

    let form = t.struct({
      username: t.String,
      email: t.String,
      password: t.String,
      passwordAgain: t.String
    });
    options.fields['username'] = username;
    options.fields['email'] = email;
    options.fields['password'] = password;
    options.fields['passwordAgain'] = passwordAgain;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Form ref="form"
            type={form}
            options={options}
            value={this.props.value}
            onChange={this.props.onChange}
            />
          <TouchableHighlight
            style={styles.button}
            onPress={this.onPress}
            underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={Actions.loginModal}>
            <Text>Already have an account?</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export class LoginForm extends Component {
  onPress() {
    var value = this.refs.form.getValue();
    if (value) {
      lbFetch.Doctor.login({
        params: {
          include: 'user'
        },
        data: value
      }).then(function(response) {
        console.log(response);
        if(!response.error) {
          Actions.pop();
          AsyncStorage.setItem("apiToken", response.id);
        } else {
          Alert.alert(
            'Login Failed',
            'Please check your credentials and try again.',
          );
        }
      });
    }
  }

  render() {

    let form = t.struct({
      email: t.String,
      password: t.String
    });
    options.fields['email'] = email;
    options.fields['password'] = password;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Form ref="form"
            type={form}
            options={options}
            value={this.props.value}
            onChange={this.props.onChange}
            />
          <TouchableHighlight
            style={styles.button}
            onPress={this.onPress.bind(this)}
            underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={Actions.forgotModal}>
            <Text>Forgot Password?</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={Actions.registerModal}>
            <Text>Register</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export class ForgotForm extends Component {
  render() {
    let form = t.struct({
      email: t.String
    });
    options.fields['email'] = email;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Form ref="form"
            type={form}
            options={options}
            value={this.props.value}
            onChange={this.props.onChange}
            />
          <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Reset password</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
};
