import React from 'react';
import 'react-date-picker/index.css';
import ButtonRaised from 'components/generic/buttons/ButtonRaised';
import {notify} from 'src/services/notify';

class AttendanceApprove extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedId:            '',
      approve_request:       '1',
      reject_request:        '0',
      message:               '',
      'show_status_message': false
    };
    this._approve_attendance_req = this._approve_attendance_req.bind(this);
  }
  componentWillMount (props) {
    this.setState({
      selectedId: this.props.val.id,
      message:    this.props.attendanceStatus.data
    });
  }
  componentWillReceiveProps (props) {
    this.setState({
      selectedId: props.val.id,
      message:    props.attendanceStatus.data
    });
  }

  _approve_attendance_req (shift) {
    if (shift === 1) {
      let attendance_status = '1';
      this.props.requestUserAttendanceStatus({status: shift, id: this.state.selectedId});
      this.setState({
        selectedId: ''
      });
    } else if (shift === 0) {
      let attendance_status = '';
      this.props.requestUserAttendanceStatus({status: shift, id: this.state.selectedId});
      this.setState({
        selectedId: ''
      });
    }

    if (this.state.message === true) {
      notify('DONE', '', 'success');
    }
  }

  render () {
    let width = '63%';
    if (this.props.forAdmin === true) {
      width = '82%';
    }
    return (
      <div>
        <div className="float-left">
          <ButtonRaised
            className="m-b-sm green"
            onClick={() => this._approve_attendance_req(1)} label="Approve Request" />
          <br />
           <ButtonRaised
             className="m-b-sm indigo"
             onClick={() => this._approve_attendance_req(0)} label="Reject Request" />
           <br />
        </div>
      </div>
    );
  }
}

export default AttendanceApprove;
