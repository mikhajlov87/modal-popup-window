import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FormField from '../FormField/FormField';
import { grey300, grey400 } from 'material-ui/styles/colors.js';
import './modal.css';

const styles = {
  overlay: {
    backgroundColor: grey300
  },
  modal: {

  },
  radioButton: {
    marginTop: 16,
  },
  canselButton: {
    marginleft: 8
  },
  submitButton: {
    marginRight: 8
  },
  modalHeader: {
    backgroundColor: grey300,
    borderColor: grey400
  },
  modalFooter: {
    textAlign: "left",
    padding: 24
  },
  addButton: {
    padding: 0
  }
};

export default class Modal extends Component {
  state = {
    open: false,
    formFields: []
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  addFormField = () => {
    let formFields = this.state.formFields,
      count = formFields.length;
    formFields.push(<FormField id={count} key={count} />)

    this.setState({
      formFields: formFields
    })
    console.log(this.state.formFields)
  }

  componentWillMount() {
    const formFields = [];

    const initialState = {
      0: {
        defaultValue: 1,
        defaultTextValue: 22
      },
      1: {
        defaultValue: 2,
        defaultTextValue: 12
      },
      2: {
        defaultValue: 3,
        defaultTextValue: 2
      }
    };

    for (let item in initialState) {

      for (let key in initialState[item]) {

        formFields.push(
          <FormField
            id={item}
            key={item}
            defaultValue={initialState[item].defaultValue}
            defaultTextValue={initialState[item].defaultTextValue} />
        );
        break;
      }

    }
    this.setState({
      formFields: formFields
    });
  }

  render() {

    const actions = [
      <RaisedButton
        label="сохранить"
        primary={true}
        style={styles.submitButton}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="отмена"
        style={styles.canselButton}
        onClick={this.handleClose}
      />
    ];



    const modalHeader = [
      <div
        key="modalHeader"
        className="modal__header"
        onClick={this.handleClose}
        style={styles.modalHeader}
      >
        <h3 className="modal__title">Структура номеров</h3>
        <IconButton>
          <NavigationClose />
        </IconButton>
      </div>
    ];

    return (
      <div>
        <RaisedButton label="Scrollable Dialog" onClick={this.handleOpen} />
        <Dialog
          title={modalHeader}
          actions={actions}
          actionsContainerStyle={styles.modalFooter}
          modal={false}
          open={this.state.open}
          bodyStyle={styles.modal}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          paperClassName="modal"
          titleStyle={styles.modalHeader}
          overlayStyle={styles.overlay}
        >
          <form>
            {this.state.formFields}
            <FlatButton
              label="добавить"
              primary={true}
              hoverColor="transparent"
              style={styles.addButton}
              onClick={this.addFormField}
            />
          </form>
        </Dialog>
      </div>
    );
  }
}