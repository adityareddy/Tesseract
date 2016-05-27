package com.tesseract;

import com.alamkanak.weekview.WeekViewEvent;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;

class MonthChangeEvent extends Event<MonthChangeEvent> {

  private final int mNewMonth;
  private final int mNewYear;
  private final String mEventName;

  protected MonthChangeEvent(int viewTag, long timestampMs, String eventName, int newYear, int newMonth) {
    super(viewTag, timestampMs);
    mNewMonth = newMonth;
    mNewYear = newYear;
    mEventName = eventName;
  }

  @Override
  public String getEventName() {
    return mEventName;
  }

  @Override
  public void dispatch(RCTEventEmitter rctEventEmitter) {
    rctEventEmitter.receiveEvent(getViewTag(), getEventName(), serializeEventData());
  }

  private WritableMap serializeEventData() {
    WritableMap eventData = Arguments.createMap();
    return eventData;
  }
}