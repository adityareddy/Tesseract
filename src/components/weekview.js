import React, { Component, PropTypes } from 'react';
import ReactNative, { requireNativeComponent, View, Text } from 'react-native';

//import UIManager from 'UIManager';

const NativeWeekView = requireNativeComponent('WeekView', WeekView);

var colorType = function (props, propName, componentName) {
  var checker = function () {
    var color = props[propName];
    var regex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
    if (!regex.test(color)) {
      return new Error('Only accept color formats: #RRGGBB and #AARRGGBB');
    }
  };

  return PropTypes.string(props, propName, componentName) || checker();
}

export default class WeekView extends Component {

  static propTypes = {
    ...View.propTypes,
    eventTextColor: colorType,
    textSize: PropTypes.number,
    hourHeight: PropTypes.number,
    headerColumnPadding: PropTypes.number,
    headerColumnTextColor: colorType,
    headerRowPadding: PropTypes.number,
    columnGap: PropTypes.number,
    noOfVisibleDays: PropTypes.number,
    headerRowBackgroundColor: colorType,
    dayBackgroundColor: colorType,
    todayBackgroundColor: colorType,
    headerColumnBackgroundColor: colorType,
    showNowLine: PropTypes.bool,
    nowLineColor: colorType,
    nowLineThickness: PropTypes.number,
    onMonthChanged: PropTypes.func,
    onEventClicked: PropTypes.func,
    onEventLongPressed: PropTypes.func,
    onEmptyViewClicked: PropTypes.func,
    onPlaceholderClicked: PropTypes.func,
    onEmptyViewLongPressed: PropTypes.func
  };

  constructor() {
    super();
    this._onMonthChange = this._onMonthChange.bind(this);
    this._onEventClick = this._onEventClick.bind(this);
    this._onEventLongPress = this._onEventLongPress.bind(this);
    this._onEmptyViewClick = this._onEmptyViewClick.bind(this);
    this._onPlaceholderClick = this._onPlaceholderClick.bind(this);
    this._onEmptyViewLongPress = this._onEmptyViewLongPress.bind(this);
  }

  _onMonthChange(event) {
    this.props.onMonthChanged && this.props.onMonthChanged(event.nativeEvent);
  }

  _onEventClick(event: Event) {
    this.props.onEventClicked && this.props.onEventClicked(event.nativeEvent);
  }

  _onEventLongPress(event: Event) {
    this.props.onEventLongPressed && this.props.onEventLongPressed(event.nativeEvent);
  }

  _onEmptyViewClick(event: Event) {
    this.props.onEmptyViewClicked && this.props.onEmptyViewClicked(event.nativeEvent);
  }

  _onPlaceholderClick(event: Event) {
    this.props.onPlaceholderClicked && this.props.onPlaceholderClicked(event.nativeEvent);
  }

  _onEmptyViewLongPress(event: Event) {
    this.props.onEmptyViewLongPressed && this.props.onEmptyViewLongPressed(event.nativeEvent);
  }

  // /**
  //  * A helper function to scroll to a specific page in the ViewPager.
  //  * The transition between pages will be animated.
  //  */
  // setPage(selectedPage: number) {
  //   UIManager.dispatchViewManagerCommand(
  //     ReactNative.findNodeHandle(this),
  //     UIManager.AndroidViewPager.Commands.setPage,
  //     [selectedPage],
  //   );
  // }

  // /**
  //  * A helper function to scroll to a specific page in the ViewPager.
  //  * The transition between pages will be *not* be animated.
  //  */
  // setPageWithoutAnimation(selectedPage: number) {
  //   UIManager.dispatchViewManagerCommand(
  //     ReactNative.findNodeHandle(this),
  //     UIManager.AndroidViewPager.Commands.setPageWithoutAnimation,
  //     [selectedPage],
  //   );
  // }

  render() {
    return (
      <NativeWeekView
        {...this.props}
        eventTextColor={this.props.eventTextColor}
        textSize={this.props.textSize}
        hourHeight={this.props.hourHeight}
        headerColumnPadding={this.props.headerColumnPadding}
        headerColumnTextColor={this.props.headerColumnTextColor}
        headerRowPadding={this.props.headerRowPadding}
        columnGap={this.props.columnGap}
        noOfVisibleDays={this.props.noOfVisibleDays}
        headerRowBackgroundColor={this.props.headerRowBackgroundColor}
        dayBackgroundColor={this.props.dayBackgroundColor}
        todayBackgroundColor={this.props.todayBackgroundColor}
        headerColumnBackgroundColor={this.props.headerColumnBackgroundColor}
        showNowLine={this.props.showNowLine}
        nowLineColor={this.props.nowLineColor}
        nowLineThickness={this.props.nowLineThickness}
        onMonthChange={this._onMonthChange}
        onEventClick={this._onEventClick}
        onEventLongPress={this._onEventLongPress}
        onEmptyViewClick={this._onEmptyViewClick}
        onPlaceholderClick={this._onPlaceholderClick}
        onEmptyViewLongPress={this._onEmptyViewLongPress}
        />
    );
  }
}