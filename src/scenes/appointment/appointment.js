import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import { Subheader, Divider } from 'react-native-material-design';
import WeekView from '../../components/weekview';
import ActionButton from 'react-native-action-button';
import lbFetch from '../../components/lb-fetch-methods';

export default class Appointment extends Component {

    constructor(props) {
        super(props);
        global.Project = function (newYear, newMonth) {
            return newYear + newMonth;
        };
        this._onMonthChanged = this._onMonthChanged.bind(this);
        lbFetch.Appointment.find().then(function (response) {
            if (!response.error) {
                this.setState({
                    events: response,
                });
                console.log(this.state.events);
            } else {
                Alert.alert(
                    'Connection Failed',
                    'Please check your connection.',
                );
            }
        }.bind(this));
    }

    static contextTypes = {
        navigator: PropTypes.object.isRequired,
        toolbar: PropTypes.object.isRequired
    };

    _onMonthChanged(event) {
    }

    render() {
        const { navigator, toolbar } = this.context;
        return (
            <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
                <WeekView
                    ref={weekView => { this.weekView = weekView; } }
                    style={styles.calendar}
                    eventTextColor="#ffffffff"
                    textSize={18}
                    hourHeight={60}
                    headerColumnPadding={8}
                    headerColumnTextColor="#8f000000"
                    headerRowPadding={12}
                    columnGap={8}
                    noOfVisibleDays={3}
                    headerRowBackgroundColor="#ffefefef"
                    dayBackgroundColor="#05000000"
                    todayBackgroundColor="#1848adff"
                    headerColumnBackgroundColor="#ffffffff"
                    showNowLine={true}
                    nowLineColor="#1848adff"
                    nowLineThickness={5}
                    onMonthChanged={this._onMonthChanged}
                    onEventClicked={(e) => { navigator.to('appointment.form', 'New Appointment', { data: e }) } }
                    onPlaceholderClicked={(e) => { navigator.to('appointment.form', 'New Appointment', { data: e }) } }
                    />
                <ActionButton
                    buttonColor="rgba(231,76,60,1)"
                    elevation={5}
                    onPress={() => { navigator.to('appointment.form', 'New Appointment') } }
                    />
            </View>
        );
    }
}

const styles = {
    calendar: {
        flex: 1,
        flexDirection: 'row'
    },
};

