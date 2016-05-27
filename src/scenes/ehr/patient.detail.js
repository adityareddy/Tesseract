import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import { Card, Button, COLOR } from 'react-native-material-design';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class PatientDetail extends Component {

  render() {
    return (
      <ScrollableTabView
        style={styles.mainContainer}
        tabBarUnderlineColor={COLOR.googleGreen700.color}
        tabBarActiveTextColor={COLOR.googleGreen700.color}
        >
        <View tabLabel='Profile'>
          <Text>patient Name: {this.props.data.patientName}</Text>
          <Text>aadhaar Id: {this.props.data.aadhaarId}</Text>
          <Text>age: {this.props.data.age}</Text>
          <Text>date of Birth: {this.props.data.dateofBirth}</Text>
          <Text>gender: {this.props.data.gender}</Text>
          <Text>id: {this.props.data.id}</Text>
          <Text>phone Number: {this.props.data.phoneNumber}</Text>
        </View>
        <View tabLabel='Address'>
          <Text>street: {this.props.data.patientAddress.street}</Text>
          <Text>city: {this.props.data.patientAddress.city}</Text>
          <Text>state: {this.props.data.patientAddress.state}</Text>
          <Text>zipCode: {this.props.data.patientAddress.zipCode}</Text>
        </View>
        <View tabLabel='Vitals' style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
        <ScrollView style={styles.tabContainer}>
          {this.props.data.patientVitals.map(function (object, i) {
            return (
              <Card key={i}>
                <Card.Body>
                  <Text>height: {object.height}</Text>
                  <Text>weight: {object.weight}</Text>
                  <Text>temp: {object.temp}</Text>
                  <Text>pulse: {object.pulse}</Text>
                  <Text>RR: {object.rr}</Text>
                  <Text>o2sat: {object.o2sat}</Text>
                  <Text>pain: {object.pain}</Text>
                </Card.Body>
                <Card.Actions position="right">
                  <Button value="Edit" text="Edit" />
                </Card.Actions>
              </Card>
            );
          }) }
          </ScrollView>
          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!") }>
              <Icon name="android-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => { } }>
              <Icon name="android-notifications-none" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => { } }>
              <Icon name="android-done-all" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        </View>
        <View tabLabel='Medical History' style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
          <ScrollView style={styles.tabContainer}>
            {this.props.data.medicalHistory.map(function (object, i) {
              return (
                <Card key={i}>
                  <Card.Body>
                    <Text>Diabetes: {object.Diabetes}</Text>
                  </Card.Body>
                  <Card.Actions position="right">
                    <Button value="Edit" text="Edit" />
                  </Card.Actions>
                </Card>
              );
            }) }
          </ScrollView>
          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!") }>
              <Icon name="android-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => { } }>
              <Icon name="android-notifications-none" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => { } }>
              <Icon name="android-done-all" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        </View>
      </ScrollableTabView>
    );
  }
}

const styles = {
  mainContainer: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
};
