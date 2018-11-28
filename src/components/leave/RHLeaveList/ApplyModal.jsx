import React, { Component } from "react";
import { Modal } from "react-bootstrap";

export default class ApplyRHModal extends Component {
  render() {
    const {
      show,
      handleHide,
      onApplyRHLeave,
      inputValue,
      stateData
    } = this.props;
    return (
      <Modal
        id="termination-modal"
        bsClass="termination-modal entity-page-cancel-modal modal"
        animation={false}
        backdrop={"static"}
        keyboard={false}
        onHide={handleHide}
        show={show}
        restoreFocus={false}
        container={this}
      >
        <Modal.Header>
          <div className="rh-modal" >
            <div>{`RH Name :${stateData.currentRH && stateData.currentRH.name}`}</div>
            <div>{`Date :${stateData.currentRH && stateData.currentRH.date}`}</div>
            <div>{`Day :${stateData.currentRH && stateData.currentRH.day}`}</div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="reason">Mention Reason Here:</label>
            <input
              type="text"
              className="form-control"
              id="reason"
              value={inputValue}
              onChange={this.props.inputChange}
              placeholder="Enter reason here"
              required={true}
            />
            {stateData.showError && <div id="error-text">* This field is required</div>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="apply-btn">
            <button
              type="button"
              className={`btn btn-primary`}
              onClick={onApplyRHLeave}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={handleHide}
            >
              Cancel
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
}
