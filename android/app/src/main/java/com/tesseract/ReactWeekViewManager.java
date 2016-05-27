package com.tesseract;

import com.alamkanak.weekview.MonthLoader;
import com.alamkanak.weekview.WeekViewEvent;

import android.graphics.RectF;
import android.graphics.Color;

import com.evaluator.react.RNMEvaluator;
import com.facebook.infer.annotation.Assertions;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.SystemClock;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.UIManagerModule;

import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.react.bridge.Arguments;

import java.io.InputStream;

import android.graphics.drawable.Drawable;
import android.support.v4.widget.DrawerLayout;
import android.util.Log;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.Calendar;

import java.util.Map;
import java.util.List;

import javax.annotation.Nullable;

public class ReactWeekViewManager extends SimpleViewManager<ReactWeekView> {

    public static final String REACT_CLASS = "WeekView";
    private ThemedReactContext ctx;

    public static final int COMMAND_SET_PAGE = 1;
    public static final int COMMAND_SET_PAGE_WITHOUT_ANIMATION = 2;

    @Override
    public String getName() {
     return REACT_CLASS;
    }

    @Override
    protected ReactWeekView createViewInstance(ThemedReactContext context) {
     ctx = context;
     return new ReactWeekView(context);
    }

    @Nullable
    @Override
    public Map<String, Object> getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.<String, Object>builder()
                .put(
                        "topEventClick",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of(
                                        "bubbled", "onEventClick", "captured", "onEventClickCapture")))
                .put(
                        "topEventLongPress",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of(
                                        "bubbled", "onEventLongPress", "captured", "onEventLongPressCapture")))
                .put(
                        "topEmptyViewClick",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of(
                                        "bubbled", "onEmptyViewClick", "captured", "onEmptyViewClickCapture")))
                .put(
                        "topEmptyViewLongPress",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of(
                                        "bubbled", "onEmptyViewLongPress", "captured", "onEmptyViewLongPressCapture")))
                .put(
                        "topMonthChange",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of(
                                        "bubbled", "onMonthChange", "captured", "onMonthChangeCapture")))
                .put(
                        "topPlaceholderClick",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of(
                                        "bubbled", "onPlaceholderClick", "captured", "onPlaceholderClickCapture")))
                .build();
    }

    @Override
    protected void addEventEmitters(final ThemedReactContext reactContext, final ReactWeekView view) {

        ReactWeekViewEventEmitter reactWeekViewEventEmitter = new ReactWeekViewEventEmitter(view,
                reactContext,
                reactContext.getNativeModule(UIManagerModule.class).getEventDispatcher());

        view.setPlaceholderClickListener(reactWeekViewEventEmitter);
        view.setEmptyViewClickListener(reactWeekViewEventEmitter);
        view.setEmptyViewLongPressListener(reactWeekViewEventEmitter);
        view.setOnEventClickListener(reactWeekViewEventEmitter);
        view.setEventLongPressListener(reactWeekViewEventEmitter);
        view.setMonthChangeListener(reactWeekViewEventEmitter);

    }

     @Override
     public Map<String,Integer> getCommandsMap() {
         return MapBuilder.of(
                 "setPage",
                 COMMAND_SET_PAGE,
                 "setPageWithoutAnimation",
                 COMMAND_SET_PAGE_WITHOUT_ANIMATION);
     }

     @Override
     public void receiveCommand(
             ReactWeekView weekView,
             int commandType,
             @Nullable ReadableArray args) {
         Assertions.assertNotNull(weekView);
         Assertions.assertNotNull(args);
         switch (commandType) {
             case COMMAND_SET_PAGE: {
                 //weekView.setCurrentItemFromJs(args.getInt(0), true);
                 return;
             }
             case COMMAND_SET_PAGE_WITHOUT_ANIMATION: {
                 //weekView.setCurrentItemFromJs(args.getInt(0), false);
                 return;
             }
             default:
                 throw new IllegalArgumentException(String.format(
                         "Unsupported command %d received by %s.",
                         commandType,
                         getClass().getSimpleName()));
         }
     }

     @ReactProp(name = "eventTextColor")
    public void setEventTextColor(ReactWeekView view, String eventTextColor) {
     view.setEventTextColor(Color.parseColor(eventTextColor));
     }

     @ReactProp(name = "textSize")
    public void setTextSize(ReactWeekView view, int textSize) {
     view.setTextSize(textSize);
     }

     @ReactProp(name = "hourHeight")
    public void setHourHeight(ReactWeekView view, int hourHeight) {
     view.setHourHeight(hourHeight);
    }

    @ReactProp(name = "headerColumnPadding")
    public void setHeaderColumnPadding(ReactWeekView view, int headerColumnPadding) {
     view.setHeaderColumnPadding(headerColumnPadding);
    }

    @ReactProp(name = "headerColumnTextColor")
    public void setHeaderColumnTextColor(ReactWeekView view, String headerColumnTextColor) {
     view.setHeaderColumnTextColor(Color.parseColor(headerColumnTextColor));
    }

    @ReactProp(name = "headerRowPadding")
    public void setHeaderRowPadding(ReactWeekView view, int headerRowPadding) {
     view.setHeaderRowPadding(headerRowPadding);
    }

    @ReactProp(name = "columnGap")
    public void setColumnGap(ReactWeekView view, int columnGap) {
       view.setColumnGap(columnGap);
    }

    @ReactProp(name = "noOfVisibleDays")
    public void setNoOfVisibleDays(ReactWeekView view, int noOfVisibleDays) {
     view.setNumberOfVisibleDays(noOfVisibleDays);
    }

    @ReactProp(name = "headerRowBackgroundColor")
    public void setHeaderRowBackgroundColor(ReactWeekView view, String headerRowBackgroundColor) {
     view.setHeaderRowBackgroundColor(Color.parseColor(headerRowBackgroundColor));
    }


    @ReactProp(name = "dayBackgroundColor")
    public void setDayBackgroundColor(ReactWeekView view, String dayBackgroundColor) {
     view.setDayBackgroundColor(Color.parseColor(dayBackgroundColor));
    }


    @ReactProp(name = "todayBackgroundColor")
    public void setTodayBackgroundColor(ReactWeekView view, String todayBackgroundColor) {
     view.setTodayBackgroundColor(Color.parseColor(todayBackgroundColor));
    }

    @ReactProp(name = "headerColumnBackgroundColor")
    public void setHeaderColumnBackgroundColor(ReactWeekView view, String headerColumnBackgroundColor) {
     view.setHeaderColumnBackgroundColor(Color.parseColor(headerColumnBackgroundColor));
    }

    @ReactProp(name = "showNowLine")
    public void setShowNowLine(ReactWeekView view, boolean showNowLine) {
     view.setShowNowLine(showNowLine);
    }

    @ReactProp(name = "nowLineColor")
    public void setNowLineColor(ReactWeekView view, String nowLineColor) {
     view.setNowLineColor(Color.parseColor(nowLineColor));
    }

    @ReactProp(name = "nowLineThickness")
    public void setNowLineThickness(ReactWeekView view, int nowLineThickness) {
     view.setNowLineThickness(nowLineThickness);
    }

     public static class ReactWeekViewEventEmitter implements ReactWeekView.EmptyViewClickListener,
             ReactWeekView.PlaceholderClickListener, ReactWeekView.EmptyViewLongPressListener,
             ReactWeekView.EventClickListener, ReactWeekView.EventLongPressListener,
             MonthLoader.MonthChangeListener {

         private final ReactWeekView mReactWeekView;
         private final EventDispatcher mEventDispatcher;
         private final ReactContext mReactContext;

         private List<WeekViewEvent> events = new ArrayList<WeekViewEvent>();
         private long count = 1;
         private String[] colors = new String[]{
                 "#59dbe0",
                 "#f57f68",
                 "#87d288",
                 "#f8b552"
         };


         private boolean eventMatches(WeekViewEvent event, int year, int month) {
             return (event.getStartTime().get(Calendar.YEAR) == year && event.getStartTime().get(Calendar.MONTH) == month - 1) || (event.getEndTime().get(Calendar.YEAR) == year && event.getEndTime().get(Calendar.MONTH) == month - 1);
         }

         public ReactWeekViewEventEmitter(ReactWeekView reactWeekView,
                                          ThemedReactContext reactContext,
                                          EventDispatcher eventDispatcher) {
             mReactWeekView = reactWeekView;
             mEventDispatcher = eventDispatcher;
             mReactContext = reactContext;
         }

         @Override
         public void onEmptyViewClicked(Calendar time) {
             mEventDispatcher.dispatchEvent(new EmptyViewClickEvent(
                     mReactWeekView.getId(), SystemClock.nanoTime(), "topEmptyViewClick", time));

//             time.set(Calendar.MINUTE, 0);
//             time.set(Calendar.SECOND, 0);
//             time.set(Calendar.MILLISECOND, 0);
//             WeekViewEvent newEvent = new WeekViewEvent(count, "Event " + count, time.get(Calendar.YEAR), time.get(Calendar.MONTH) + 1, time.get(Calendar.DAY_OF_MONTH), time.get(Calendar.HOUR_OF_DAY), time.get(Calendar.MINUTE), time.get(Calendar.YEAR), time.get(Calendar.MONTH) + 1, time.get(Calendar.DAY_OF_MONTH), time.get(Calendar.HOUR_OF_DAY), time.get(Calendar.MINUTE));
//             Calendar endTime = newEvent.getEndTime();
//
//             int random = (int )(Math.random() * 3 + 1);
//
//             endTime.add(Calendar.HOUR, random == 1 ? 2 : 1);
//             newEvent.setEndTime(endTime);
//             newEvent.setColor(Color.parseColor(colors[((int) (count % 4))]));
//             this.events.add(newEvent);
//             count++;
//             mReactWeekView.notifyDatasetChanged();
         }

         @Override
         public void onEmptyViewLongPress(Calendar time) {
             mEventDispatcher.dispatchEvent(new EmptyViewClickEvent(
                     mReactWeekView.getId(), SystemClock.nanoTime(), "topEmptyViewLongPress", time));
         }

         @Override
         public void onEventClick(WeekViewEvent event, RectF eventRect) {
             mEventDispatcher.dispatchEvent(new EventClickEvent(
                     mReactWeekView.getId(), SystemClock.nanoTime(), "topEventClick", event));
         }

         @Override
         public void onEventLongPress(WeekViewEvent event, RectF eventRect) {
             mEventDispatcher.dispatchEvent(new EventClickEvent(
                     mReactWeekView.getId(), SystemClock.nanoTime(), "topEventLongPress", event));
         }

         @Override
         public void onPlaceholderClick(Calendar time, RectF placeholderRect) {
             mEventDispatcher.dispatchEvent(new PlaceholderClickEvent(
                     mReactWeekView.getId(), SystemClock.nanoTime(), "topPlaceholderClick", time, placeholderRect));
         }

         @Override
         public List<? extends WeekViewEvent> onMonthChange(int newYear, int newMonth) {
             mEventDispatcher.dispatchEvent(new MonthChangeEvent(
                     mReactWeekView.getId(), SystemClock.nanoTime(), "topMonthChange", newYear, newMonth));

             Integer[] args = new Integer[2];
             args[0] = newYear;
             args[1] = newMonth;

             RNMEvaluator.callSyncFunction(mReactContext, "global.Project", args, new RNMEvaluator.EvaluatorCallback() {
                 @Override
                 public void invoke(String error, Object returnValue) {
                     if (error != null) {
                         Log.e("in", error);
                     }
                     if (returnValue != null) {
                         Log.e("in", returnValue.toString());
                     }
                 }
             });

             List<WeekViewEvent> matchedEvents = new ArrayList<WeekViewEvent>();
             for (WeekViewEvent event : events) {
                 if (eventMatches(event, newYear, newMonth)) {
                     matchedEvents.add(event);
                 }
             }

             return matchedEvents;
         }
     }
}