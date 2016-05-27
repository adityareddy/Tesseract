var React = require('react');
var { View, Text, TextInput } = require('react-native');
var Icon = require('react-native-vector-icons/Ionicons');
var { MKTextField, mdl } = require('react-native-material-kit');

function textbox(locals) {

  var stylesheet = locals.stylesheet;
  var formGroupStyle = stylesheet.formGroup.normal;
  var controlLabelStyle = stylesheet.controlLabel.normal;
  var textboxStyle = stylesheet.textbox.normal;
  var helpBlockStyle = stylesheet.helpBlock.normal;
  var errorBlockStyle = stylesheet.errorBlock;

  if (locals.hasError) {
    formGroupStyle = stylesheet.formGroup.error;
    controlLabelStyle = stylesheet.controlLabel.error;
    textboxStyle = stylesheet.textbox.error;
    helpBlockStyle = stylesheet.helpBlock.error;
  }

  if (locals.editable === false) {
    textboxStyle = stylesheet.textbox.notEditable;
  }

  var label = locals.label ? <Text style={controlLabelStyle}>{locals.label}</Text> : null;
  var help = locals.help ? <Text style={helpBlockStyle}>{locals.help}</Text> : null;
  var error = locals.hasError && locals.error ? <Text accessibilityLiveRegion="polite" style={errorBlockStyle}>{locals.error}</Text> : null;

  var TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel()
    .withDefaultValue(locals.value).build();

  return (
    <View style={styles.container}>
      <Icon name={locals.icon ? locals.icon : "ios-ionic-outline"} size={40} color="#555" style={styles.icon}/>
      <View style={formGroupStyle}>
        <TextfieldWithFloatingLabel
          accessibilityLabel={locals.label}
          ref="input"
          autoCapitalize={locals.autoCapitalize}
          autoCorrect={locals.autoCorrect}
          autoFocus={locals.autoFocus}
          bufferDelay={locals.bufferDelay}
          clearButtonMode={locals.clearButtonMode}
          editable={locals.editable}
          enablesReturnKeyAutomatically={locals.enablesReturnKeyAutomatically}
          keyboardType={locals.keyboardType}
          multiline={locals.multiline}
          onBlur={locals.onBlur}
          onEndEditing={locals.onEndEditing}
          onFocus={locals.onFocus}
          onSubmitEditing={locals.onSubmitEditing}
          password={locals.password}
          placeholderTextColor={locals.placeholderTextColor}
          returnKeyType={locals.returnKeyType}
          selectTextOnFocus={locals.selectTextOnFocus}
          secureTextEntry={locals.secureTextEntry}
          selectionState={locals.selectionState}
          placeholder={locals.label}
          maxLength={locals.maxLength}
          numberOfLines={locals.numberOfLines}
          textAlign={locals.textAlign}
          textAlignVertical={locals.textAlignVertical}
          underlineColorAndroid={locals.underlineColorAndroid}
          />
        {help}
        {error}
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    margin: 15
  }
};

module.exports = textbox;
