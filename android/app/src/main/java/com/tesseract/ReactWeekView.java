package com.tesseract;

import com.alamkanak.weekview.WeekView;
import android.view.MotionEvent;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.events.NativeGestureUtil;

public class ReactWeekView extends WeekView {

  public ReactWeekView(ReactContext reactContext) {
    super(reactContext);
  }

  @Override
  public boolean onTouchEvent(MotionEvent ev) {
    if (super.onTouchEvent(ev)) {
      NativeGestureUtil.notifyNativeGestureStarted(this, ev);
      return true;
    }
    return false;
  }
}