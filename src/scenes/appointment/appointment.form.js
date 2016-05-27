'use strict';

import React, {Component, PropTypes} from 'react';
import {AppRegistry, Image, Alert, ListView, StyleSheet, Text, View, 
    DrawerLayoutAndroid, ToolbarAndroid, Navigator, TouchableHighlight, 
    BackAndroid, ItemCheckbox, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBarAndroid from 'react-native-android-statusbar';
import { Card } from 'react-native-material-design';
import t from '../../components/forms';
import moment from 'moment';
import _ from 'lodash';
import lbFetch from '../../components/lb-fetch-methods';

var Form = t.form.Form;

export default class AppointmentForm extends Component {

    static contextTypes = {
        navigator: PropTypes.object.isRequired,
        toolbar: PropTypes.object.isRequired
    };

    componentDidMount() {
        const { navigator, toolbar } = this.context;
        toolbar.setActions([{
            icon: 'done',
            onPress: this._onPressSubmit.bind(this)
        }]);
    }

    _onPressSubmit() {
        const { navigator, toolbar } = this.context;
        var value = this.refs.form2.getValue();
        if (value) {
            console.log(value);
            lbFetch.Appointment.create({
                data: {
                    startTime: value.time, patientId: 1,
                    practiceId: 1, status: "NS",
                    endTime: value.time,
                }
            }).then(function (response) {
                console.log(response);
                if (!response.error) {
                    navigator.back();
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

        var Gender = t.enums({
            M: 'Male',
            F: 'Female'
        });

        let form1 = t.struct({
            username: t.String,
            email: t.String,
        });
        let form2 = t.struct({
            date: t.Date,
            time: t.Date,
            allDay: t.Boolean
        });

        return (
            <View>
                <Card>
                    <Card.Body>
                        <Form ref="form1"
                            type={form1}
                            value={this.props.value}
                            onChange={this.props.onChange}
                            options={{
                                isHorizontal: true,
                                fields: {
                                    username: {
                                        icon: 'ios-person-outline'
                                    },
                                    email: {
                                        icon: 'ios-email-outline'
                                    }
                                }
                            }}
                            />
                        <Form ref="form2"
                            type={form2}
                            value={{
                                date: new Date(this.props.data.startTime),
                                time: new Date(this.props.data.startTime)
                            }}
                            onChange={this.props.onChange}
                            options={{
                                isHorizontal: true,
                                fields: {
                                    date: {
                                        mode: 'date',
                                        config: { format: (date) => moment(date).format("dddd, MMMM Do YYYY") }
                                    },
                                    time: {
                                        mode: 'time',
                                        config: { format: (date) => moment(date).format("h:mm a") }
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
