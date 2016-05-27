import React, {Component} from 'react';
import {AppRegistry, AsyncStorage} from 'react-native';
import StatusBarAndroid from 'react-native-android-statusbar';
import { COLOR } from 'react-native-material-design';
import RNEval from 'react-native-eval-updated';

import Main from './scenes/main/main';

export default class Setup extends Component {

    constructor(props) {
        super(props);
        StatusBarAndroid.setHexColor(COLOR['googleGreen700'].color);
        AsyncStorage.getItem("apiToken").then((value) => {
            this.setState({ "apiToken": value });
            console.log(value);
        }).done();
    }
    render() {
        return (
            <Main />
        )
    }
}