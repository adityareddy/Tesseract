package com.tesseract;

import android.graphics.RectF;

import com.alamkanak.weekview.WeekViewEvent;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.Calendar;

class PlaceholderClickEvent extends Event<PlaceholderClickEvent> {

    private final Calendar mTime;
    private final RectF mPlaceholderRect;
    private final String mEventName;

    protected PlaceholderClickEvent(int viewTag, long timestampMs, String eventName, Calendar time,
                                    RectF placeholderRect) {
        super(viewTag, timestampMs);
        mTime = time;
        mEventName = eventName;
        mPlaceholderRect = placeholderRect;
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
        eventData.putString("time", mTime.getTime().toString());
        eventData.putString("endTime", mPlaceholderRect.toShortString());
        return eventData;
    }
}