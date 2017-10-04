import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { grey300, grey400 } from 'material-ui/styles/colors.js';
import Form from '../Form/Form';
import { reactLocalStorage } from 'reactjs-localstorage';
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
  }
};

export default class Modal extends Component {
  state = {
    open: false,
    storage: [],
    formFields: []
  };

  handleOpen = () => {
    const initialState = reactLocalStorage.getObject('modalState');
    initialState.slice ? this.setState({open: true, formFields: initialState}) : this.getInitialState();
  };

  handleClose = () => {
    this.setState({
      open: false,
      storage: [],
      formFields: []
    });
  };

  addFormField = () => {
    const count = this.state.formFields.length + this.state.storage.length;
    this.setState({
      storage: [...this.state.storage, {
        index: count + '',
        defaultValue: 1,
        defaultTextValue: 22
      }]
    })
  }

  removeItem = (id) => {
    let formFields = this.state.formFields;
    let formFieldsArr = formFields.filter(el => el.index !== id )
    this.setState({
      formFields: formFieldsArr
    });
  }

  removeStorageItem = (id) => {
    const formFields = this.state.storage;
    let formFieldsArr = formFields.filter(el => el.index !== id )
    this.setState({
      storage: formFieldsArr
    });
  }

  safeChanges = () => {
    this.handleClose();
    let formFields = this.state.formFields,
      storage = this.state.storage;
    reactLocalStorage.setObject('modalState', [...formFields, ...storage]);
  }

  componentWillMount() {
    this.getInitialState();
  }

  getInitialState = () => {
    const initialState = reactLocalStorage.getObject('modalState');
    if (initialState.splice) {
      this.setState({
        formFields: initialState
      })
    } else {
      const setInitialState = [
        {
          index: "0",
          defaultValue: 1,
          defaultTextValue: 22
        },
        {
          index: "1",
          defaultValue: 2,
          defaultTextValue: 12
        },
        {
          index: "2",
          defaultValue: 3,
          defaultTextValue: 2
        }
      ];
      reactLocalStorage.setObject('modalState', setInitialState);
      this.setState({ formFields: setInitialState });
    }
  }

  render() {
    const actions = [
      <RaisedButton
        label="сохранить"
        primary={true}
        style={styles.submitButton}
        onClick={this.safeChanges}
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
        <RaisedButton
          label="Scrollable Dialog"
          onClick={this.handleOpen}
        />
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
          <Form
            formFields={this.state.formFields}
            removeItem={this.removeItem}
            removeStorageItem={this.removeStorageItem}
            storage={this.state.storage}
            addFormField={this.addFormField}
          />
        </Dialog>
      </div>
    );
  }
}