import React, {Component, PropTypes} from 'react';
import {View, Text, ListView, IntentAndroid, InteractionManager, Alert, TouchableNativeFeedback, TouchableHighlight} from 'react-native';
import { Button, Subheader, COLOR } from 'react-native-material-design';
import Icon from 'react-native-vector-icons/Ionicons';
import Notifications from './notifications';
import PracticeDetails from './practice.details';

export default class Settings extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(
        [{ title: 'Test1', link: PracticeDetails },
          { title: 'Test2', link: Notifications },
          { title: 'Schedule', link: PracticeDetails },
          { title: 'Billing', link: Notifications },
          { title: 'Electronic Prescriptions', link: PracticeDetails },
          { title: 'Patient engagement', link: Notifications },
          { title: 'Printouts', link: PracticeDetails }
        ]),
    };
    this.renderRow = this.renderRow.bind(this);
    this.state.detailPane = this.state.dataSource.getRowData(0, 1);
  }

  _pressRow(sectionID, rowID) {
    this.state.detailPane = this.state.dataSource.getRowData(0, rowID);
    this.setState(this.state);
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <View>
        <TouchableHighlight
          onPress={() => this._pressRow(sectionID, rowID) }
          underlayColor='#dddddd'>
          <View style={styles.rowContainer}>
            <Icon name="ios-camera-outline" size={48} color="#ccc" style={styles.thumbnail}/>
            <View style={styles.rightContainer}>
              <Text style={styles.year}>{rowData.title}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <View style={styles.separator} />
      </View>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        style={styles.listPane}
        />
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  listPane: {
    flex: 1,
    backgroundColor: '#FFF',
    borderWidth: 1,
  },
  detailPane: {
    flex: 2,
    backgroundColor: '#FFF',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  rightContainer: {
    flex: 1,
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    marginLeft: 10,
    width: 40,
    height: 50,
  },
};
