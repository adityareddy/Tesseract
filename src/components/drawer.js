import React, {Component, PropTypes} from 'react';
import {Text, View, Image} from 'react-native';
import { Divider, COLOR, TYPO, Avatar, Drawer, Toolbar as MaterialToolbar } from 'react-native-material-design';

export default class TesseractDrawer extends Component {

    static contextTypes = {
        drawer: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            route: null
        }
    }

    changeScene = (path, name) => {
        const { drawer, navigator } = this.context;

        this.setState({
            route: path
        });
        navigator.to(path, name);
        drawer.closeDrawer();
    };

    render() {
        const { route } = this.state;
        return (
            <Drawer theme='light'>
                <Drawer.Header image={<Image source={require('../images/nav.jpg') } />}>
                    <View style={styles.header}>
                        <Avatar size={80} image={<Image source={{ uri: "http://facebook.github.io/react-native/img/opengraph.png?2" }}/>} />
                        <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>React Native Material Design</Text>
                    </View>
                </Drawer.Header>

                <Drawer.Section
                    items={[{
                        icon: 'home',
                        value: 'Home',
                        active: route === 'home',
                    }]}
                    />

                <Drawer.Section
                    title="Components"
                    items={[
                        {
                            icon: 'face',
                            value: 'EHR',
                            label: '12',
                            active: route === 'ehr',
                            onPress: () => this.changeScene('ehr'),
                            onLongPress: () => this.changeScene('ehr')
                        }, {
                            icon: 'label',
                            value: 'Settings',
                            active: route === 'settings',
                            label: '8',
                            onPress: () => this.changeScene('settings'),
                            onLongPress: () => this.changeScene('settings')
                        }, {
                            icon: 'check-box',
                            value: 'Appointment',
                            label: '10',
                            active: route === 'appointment',
                            onPress: () => this.changeScene('appointment'),
                            onLongPress: () => this.changeScene('appointment')
                        }, {
                            icon: 'label',
                            value: 'Login',
                            label: '10',
                            active: route === 'login',
                            onPress: () => this.changeScene('login'),
                            onLongPress: () => this.changeScene('login')
                        }, {
                            icon: 'label',
                            value: 'Icon Toggles',
                            label: 'NEW',
                            active: false,
                        }, {
                            icon: 'radio-button-checked',
                            value: 'Radio Buttons',
                            label: '8',
                            active: false,
                        }, {
                            icon: 'label',
                            value: 'Subheaders',
                            label: '4',
                            active: false,
                        }]}
                    />
                <Divider style={{ marginTop: 8 }} />
                <Drawer.Section
                    title="Config"
                    items={[{
                        icon: 'invert-colors',
                        value: 'Change Theme',
                        label: '24',
                        active: false,
                    }]}
                    />
            </Drawer>
        );
    }
}

const styles = {
    toolbar: {
        backgroundColor: '#8BC34A',
        height: 56,
    },
    header: {
        paddingTop: 16
    },
    text: {
        marginTop: 20
    }
};