'use strict';

import React, {Component, PropTypes} from 'react';
import {AppRegistry, Image, Alert, ListView, StyleSheet, Text, View, DrawerLayoutAndroid, ToolbarAndroid, Navigator, TouchableHighlight, BackAndroid, ItemCheckbox, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBarAndroid from 'react-native-android-statusbar';
import { Card } from 'react-native-material-design';
import t from '../../components/forms';
import moment from 'moment';
import _ from 'lodash';

var Form = t.form.Form;

export default class PatientForm extends Component {

    static contextTypes = {
        navigator: PropTypes.object.isRequired,
        toolbar: PropTypes.object.isRequired
    };

    componentDidMount() {
        const { navigator, toolbar } = this.context;
        toolbar.setActions([{
            icon: 'done',
            onPress: navigator.back
        }]);
    }

    render() {

        var Gender = t.enums({
            M: 'Male',
            F: 'Female'
        });

        var Positive = t.refinement(t.Number, function (n) {
            return n >= 0;
        });

        let form = t.struct({
            name: t.String,
            surname: t.String,
            email: t.maybe(t.String),
            age: Positive,
            rememberMe: t.Boolean,
            gender: Gender,
            dob: t.Date,
        });

        return (
            <View>
                <Card>
                    <Card.Body>
                        <Form ref="form"
                            type={form}
                            value={this.props.value}
                            onChange={this.props.onChange}
                            options={{
                                isHorizontal: false,
                                fields: {
                                    name: {
                                        icon: 'ios-person-outline'
                                    },
                                    surname: {
                                        icon: 'ios-person-outline'
                                    },
                                    email: {
                                        icon: 'ios-email-outline'
                                    },
                                    dob: {
                                        mode: 'date',
                                        config: { format: (date) => moment(date).format("dddd, MMMM Do YYYY") }
                                    }
                                }
                            }}
                            />
                    </Card.Body>
                </Card>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.onPress}
                    underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={console.log() }>
                    <Text>Already have an account?</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = {
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
