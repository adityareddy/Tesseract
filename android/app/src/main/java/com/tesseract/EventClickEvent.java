package com.tesseract;

import com.alamkanak.weekview.WeekViewEvent;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;

class EventClickEvent extends Event<EventClickEvent> {

  private final WeekViewEvent mEvent;
  private final String mEventName;

  protected EventClickEvent(int viewTag, long timestampMs, String eventName, WeekViewEvent event) {
    super(viewTag, timestampMs);
    mEvent = event;
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
    eventData.putString("startTime", mEvent.getStartTime().getTime().toString());
    eventData.putString("endTime", mEvent.getEndTime().getTime().toString());
    eventData.putString("name", mEvent.getName());
    eventData.putInt("color", mEvent.getColor());
    // eventData.putBoolean("isAllDay", mEvent.isAllDay());
    eventData.putString("id", String.valueOf(mEvent.getId()));
    return eventData;
  }
}