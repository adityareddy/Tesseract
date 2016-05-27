import React, {Component} from 'react';
import {View} from 'react-native';
import { Subheader, Divider } from 'react-native-material-design';

export default class PracticeDetails extends Component {

    render() {
        return (
            <View>
                <Subheader text="PracticeDetails"/>
                <Divider />
                <Subheader text="Divider with inset"/>
                <Divider inset />
            </View>
        );
    }
}
