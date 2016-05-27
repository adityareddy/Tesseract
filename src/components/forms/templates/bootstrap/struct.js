var React = require('react');
var { View, Text } = require('react-native');

function struct(locals) {
  var stylesheet = locals.stylesheet;
  var fieldsetStyleHorizontal = stylesheet.fieldsetHorizontal;
  var fieldsetStyleVertical = stylesheet.fieldsetVertical;
  var controlLabelStyle = stylesheet.controlLabel.normal;

  if (locals.hasError) {
    controlLabelStyle = stylesheet.controlLabel.error;
  }

  var label = locals.label ? <Text style={controlLabelStyle}>{locals.label}</Text> : null;
  var error = locals.hasError && locals.error ? <Text accessibilityLiveRegion="polite" style={stylesheet.errorBlock}>{locals.error}</Text> : null;

  var rows = locals.order.map(function (name) {
    return locals.inputs[name];
  });

  return (
    <View style={locals.isHorizontal ? fieldsetStyleHorizontal: fieldsetStyleVertical}>
      {label}
      {error}
      {rows}
    </View>
  );
}

module.exports = struct;