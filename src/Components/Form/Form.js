import React, { Component } from 'react';
import FormField from '../FormField/FormField';
import FlatButton from 'material-ui/FlatButton';
import { CSSTransitionGroup } from 'react-transition-group';
import './form.css';

const styles = {
  addButton: {
    padding: 0
  }
}

export default class Form extends Component {
  render() {
    return(
      <form id="form">
        <CSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {this.props.formFields.map(
            (item) =>
              <FormField
                id={item.index}
                key={item.index}
                defaultValue={item.defaultValue}
                defaultTextValue={item.defaultTextValue}
                removeItem={this.props.removeItem.bind(this, item.index)}
              />
            )}
          {this.props.storage.map(
            (item) =>
              <FormField
                id={item.index}
                key={item.index}
                defaultValue={item.defaultValue}
                defaultTextValue={item.defaultTextValue}
                removeItem={this.props.removeItem.bind(this, item.index)}
              />
            )}
          </CSSTransitionGroup>
        <FlatButton
          label="добавить"
          primary={true}
          hoverColor="transparent"
          style={styles.addButton}
          onClick={this.props.addFormField}
        />
      </form>
    );
  }
}