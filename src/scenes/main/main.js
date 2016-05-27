'use strict';

import React, {Component} from 'react';
import {AppRegistry, Image, ListView, StyleSheet, 
  Text, View, DrawerLayoutAndroid, ToolbarAndroid, Navigator,
   TouchableOpacity, TouchableHighlight, TouchableNativeFeedback} from 'react-native';
import Settings from '../settings/settings';
import PatientsList from '../ehr/patient.list';
import StatusBarAndroid from 'react-native-android-statusbar';
import { Divider, COLOR, TYPO, Avatar, Drawer} from 'react-native-material-design';
import TesseractDrawer from '../../components/drawer';

import Navigate from '../../utils/navigate';
import Toolbar from '../../components/toolbar';

var MessageBarAlert = require('react-native-message-bar').MessageBar;
var MessageBarManager = require('react-native-message-bar').MessageBarManager;

export default class Main extends Component {

  static childContextTypes = {
    drawer: React.PropTypes.object,
    navigator: React.PropTypes.object,
    toolbar: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      drawer: null,
      navigator: null,
      toolbar: null
    };
  }

  showMessage = () => {
    MessageBarManager.showAlert({
      title: 'Your alert title goes here',
      message: 'Your alert message goes here',
      alertType: 'success',
    });
  };

  getChildContext = () => {
    return {
      drawer: this.state.drawer,
      navigator: this.state.navigator,
      toolbar: this.state.toolbar
    }
  };

  setDrawer = (drawer) => {
    this.setState({
      drawer
    });
  };

  setNavigator = (navigator) => {
    this.setState({
      navigator: new Navigate(navigator)
    });
  };

  setToolbar = (toolbar) => {
    this.setState({
      toolbar: toolbar
    });
  };

  componentDidMount() {
    MessageBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }

  render() {
    const { drawer, navigator } = this.state;
    const navView = React.createElement(TesseractDrawer);

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => {
          if (drawer && navigator) {
            return navView;
          }
          return null;
        } }
        ref={(drawer) => { !this.state.drawer ? this.setDrawer(drawer) : null } }
        >
        {drawer &&
          <Navigator
            initialRoute={Navigate.getInitialRoute() }
            navigationBar={
              <Toolbar
                onIconPress={drawer.openDrawer}
                ref={(toolbar) => { !this.state.toolbar ? this.setToolbar(toolbar) : null } }
                />
            }
            configureScene={() => {
              return Navigator.SceneConfigs.FadeAndroid;
            } }
            ref={(navigator) => { !this.state.navigator ? this.setNavigator(navigator) : null } }
            renderScene={(route) => {
              if (this.state.navigator && route.component) {
                return (
                  <View
                    style={styles.scene}
                    showsVerticalScrollIndicator={false}>
                    <route.component title={route.title} path={route.path} {...route.props} />
                  </View>
                );
              }
            } }
            />
        }
        <MessageBarAlert ref="alert" />
      </DrawerLayoutAndroid>
    );
  }
}

const styles = {
  scene: {
    flex: 1,
    marginTop: 56
  }
};