import React, {Component, PropTypes} from 'react';
import {Text, View} from 'react-native';
import { Toolbar as MaterialToolbar } from 'react-native-material-design';

export default class Toolbar extends Component {

    static contextTypes = {
        navigator: PropTypes.object
    };

    static propTypes = {
        onIconPress: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            actions: [{
                icon: 'warning',
                badge: { value: 5, animate: true },
                onPress: this.increment
            }]
        };
    }

    setActions = (actions) => {
        this.setState({
            actions: actions
        });
    };

    render() {
        const { navigator } = this.context;
        const { onIconPress } = this.props;

        return (
            <MaterialToolbar
                title={navigator && navigator.currentRoute ? navigator.currentRoute.title : 'Welcome'}
                primary={'paperGreen'}
                icon={navigator && navigator.isChild ? 'keyboard-backspace' : 'menu'}
                onIconPress={() => navigator && navigator.isChild ? navigator.back() : onIconPress() }
                actions={this.state.actions}
                rightIconStyle={{
                    margin: 10
                }}
                />
        );
    }
}