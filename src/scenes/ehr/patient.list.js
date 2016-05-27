import React, {Component, PropTypes} from 'react';
import {View, Text, ListView, IntentAndroid, InteractionManager, Alert, TouchableNativeFeedback, TouchableHighlight} from 'react-native';
import { Button, Subheader, COLOR } from 'react-native-material-design';
import Icon from 'react-native-vector-icons/Ionicons';
import Notifications from '../settings/notifications';
import PracticeDetails from '../settings/practice.details';
import lbFetch from '../../components/lb-fetch-methods';
import ActionButton from 'react-native-action-button';

export default class PatientsList extends Component {

  static contextTypes = {
    navigator: PropTypes.object.isRequired,
    toolbar: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(
        [{ title: 'Practice details', link: PracticeDetails },
          { title: 'Notifications and alerts', link: Notifications },
          { title: 'Schedule', link: PracticeDetails },
          { title: 'Billing', link: Notifications },
          { title: 'Electronic Prescriptions', link: PracticeDetails },
          { title: 'Patient engagement', link: Notifications },
          { title: 'Printouts', link: PracticeDetails }
        ]),
    };

    lbFetch.Patient.find().then(function (response) {
      if (!response.error) {
        this.setState({
          dataSource: ds.cloneWithRows(response),
        });
      } else {
        Alert.alert(
          'Login Failed',
          'Please check your credentials and try again.',
        );
      }
    }.bind(this));
    this.renderRow = this.renderRow.bind(this);
    this.state.detailPane = this.state.dataSource.getRowData(0, 1);
  }

  componentDidMount() {
    const { navigator, toolbar } = this.context;
    toolbar.setActions([{
      icon: 'lock',
    }]);
  }

  _pressRow(sectionID, rowID) {
    this.state.detailPane = this.state.dataSource.getRowData(0, rowID);
    this.setState(this.state);
    Actions.ehr({ data: this.state.dataSource.getRowData(0, rowID) });
  }

  renderRow(rowData, sectionID, rowID) {
    const { navigator, toolbar } = this.context;
    return (
      <View>
        <TouchableHighlight
          onPress={() => { navigator.to('ehr.detail', 'Patient Details', { data: this.state.dataSource.getRowData(0, rowID) }) } }
          underlayColor='#dddddd'>
          <View style={styles.rowContainer}>
            <Icon name="ios-camera-outline" size={48} color="#ccc" style={styles.thumbnail}/>
            <View style={styles.rightContainer}>
              <Text style={styles.year}>{rowData.patientName}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <View style={styles.separator} />
      </View>
    );
  }

  render() {
    const { navigator, toolbar } = this.context;
    return (
      <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          style={styles.listPane}
          />
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          elevation={5}
          onPress={() => { navigator.to('ehr.form', 'New Patient') } }
          />
      </View>
    );
  }
}

const styles = {
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
