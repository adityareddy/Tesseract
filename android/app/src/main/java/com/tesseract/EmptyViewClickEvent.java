package com.tesseract;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.Calendar;

class EmptyViewClickEvent extends Event<EmptyViewClickEvent> {

  private final Calendar mTime;
  private final String mEventName;

  protected EmptyViewClickEvent(int viewTag, long timestampMs, String eventName, Calendar time) {
    super(viewTag, timestampMs);
    mEventName = eventName;
    mTime = time;
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
    eventData.putString("startTime", mTime.getTime().toString());
    return eventData;
  }
}