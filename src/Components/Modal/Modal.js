import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
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
    textAlign: "left"
  }
};

/**
 * Dialog content can be scrollable.
 */
export default class Modal extends React.Component {
  state = {
    open: false,
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

  render() {
    const actions = [
      <RaisedButton
        label="сохранить"
        primary={true}
        style={styles.submitButton}
        onClick={this.handleClose}
      />,
      <RaisedButton
        label="отмена"
        style={styles.canselButton}
        onClick={this.handleClose}
      />,
    ];

    const radios = [];
    for (let i = 0; i < 5; i++) {
      radios.push(
        <RadioButton
          key={i}
          value={`value${i + 1}`}
          label={`Option ${i + 1}`}
          style={styles.radioButton}
        />
      );
    }

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
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            {radios}
          </RadioButtonGroup>
        </Dialog>
      </div>
    );
  }
}