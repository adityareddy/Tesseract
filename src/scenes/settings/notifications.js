import React, {Component} from 'react';
import {View} from 'react-native';
import { Subheader, Divider } from 'react-native-material-design';

export default class Notifications extends Component {

  constructor(props) {
    super(props);
  }

    render() {
        return (
            <View>
                <Subheader text="Notifications"/>
                <Divider />
                <Subheader text="Divider with inset"/>
                <Divider inset />
            </View>
        );
    }
}
