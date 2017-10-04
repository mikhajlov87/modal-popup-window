import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentClear from 'material-ui/svg-icons/content/clear';
import { red100, red400 } from 'material-ui/styles/colors.js';
import './form-field.css';

const styles = {
  icon: {
    fill: "initial"
  },
  clearButton: {
    fill: red400
  },
  textField: {
    maxWidth: 40,
    marginLeft: 20,
    marginRight: 30
  },
  underline: {
    borderBottomWidth: 3
  }
};

export default class FormField extends Component {
  state = {
    value: this.props.defaultValue || 1,
    textField: this.props.defaultTextValue || 22
  };

  handleChange = (event, index, value) => {
    this.setState({value})
  };

  render() {
    return (
      <div className="form-field">
        <SelectField
          value={this.state.value}
          iconStyle={styles.icon}
          onChange={this.handleChange}
          underlineStyle={styles.underline}
        >
          <MenuItem value={1} primaryText="Tween" />
          <MenuItem value={2} primaryText="Tripple" />
          <MenuItem value={3} primaryText="Quadro" />
        </SelectField>
        <TextField
          type="number"
          id={this.props.id}
          defaultValue={this.state.textField}
          style={styles.textField}
          underlineStyle={styles.underline}
        />
        <FloatingActionButton
          mini={true}
          backgroundColor={red100}
          iconStyle={styles.clearButton}
          onClick={this.props.removeItem}>
          <ContentClear />
        </FloatingActionButton>
      </div>
    );
  }
}