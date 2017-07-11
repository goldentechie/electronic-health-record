import React from 'react';
import PropTypes from 'prop-types';
import {DateField} from 'react-date-picker';
import 'react-date-picker/index.css';

class FormProfileDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user_id:        '',
      name:           '',
      jobtitle:       '',
      dateofjoining:  '',
      dob:            '',
      gender:         '',
      marital_status: 'Single',
      address1:       '',
      address2:       '',
      emr_con_1:      '',
      emr_con_2:      '',
      work_email:     '',
      emp_email:      '',
      blood_group:    '',
      medical_con:    ''
    };
  }
  componentWillReceiveProps (props) {
    this.setState({
      name:           props.user_profile_detail.name || '',
      jobtitle:       props.user_profile_detail.jobtitle || '',
      dateofjoining:  props.user_profile_detail.dateofjoining || '',
      dob:            props.user_profile_detail.dob || '',
      gender:         props.user_profile_detail.gender || '',
      marital_status: props.user_profile_detail.marital_status || 'Single',
      address1:       props.user_profile_detail.current_address || '',
      address2:       props.user_profile_detail.permanent_address || '',
      emr_con_1:      props.user_profile_detail.emergency_ph1 || '',
      emr_con_2:      props.user_profile_detail.emergency_ph2 || '',
      work_email:     props.user_profile_detail.work_email || '',
      emp_email:      props.user_profile_detail.other_email || '',
      blood_group:    props.user_profile_detail.blood_group || '',
      medical_con:    props.user_profile_detail.medical_condition || ''
    });
  }

  render () {
    return (
      <div>
        <h6 className="text-center">Personal Details</h6>
        <div className="form-group">
          <label>User Name</label>
          <input type="text" className="form-control" value={this.state.name} disabled />
        </div>

        <div className="form-group">
          <label>Marital Status</label>
          <select className="form-control" ref="marital_status" onChange={() => this.setState({marital_status: this.refs.marital_status.value})} value={this.state.marital_status}>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <DateField
            dateFormat="YYYY-MM-DD"
            value={this.state.dob}
            onChange={(date) => { this.setState({dob: date}); }}
            className="form-control"
            />
        </div>
        <div className="row no-gutter">
          <div className="col-md-6 p-r">
            <div className="form-group">
              <label>Current Address</label>
              <textarea placeholder="your current address..." className="form-control" ref="address1" onChange={() => this.setState({address1: this.refs.address1.value})} value={this.state.address1}></textarea>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Permanent Address</label>
              <textarea placeholder="your permanent address..." className="form-control" ref="address2" onChange={() => this.setState({address2: this.refs.address2.value})} value={this.state.address2}></textarea>
            </div>
          </div>
        </div>
        <div className="row no-gutter">
          <div className="col-md-6 p-r">
            <div className="form-group">
              <label>Emergency Contact Information 1</label>
              <input type="text" className="form-control" ref="emr_con_1" onChange={() => this.setState({emr_con_1: this.refs.emr_con_1.value})} value={this.state.emr_con_1} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Emergency Contact Information 2</label>
              <input type="text" className="form-control" ref="emr_con_2" onChange={() => this.setState({emr_con_2: this.refs.emr_con_2.value})} value={this.state.emr_con_2} />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label>Personal Email Address</label>
            <input type="email"
              className="form-control"
              ref="emp_email"
              onChange={() => this.setState({emp_email: this.refs.emp_email.value})}
              value={this.state.emp_email} />
          </div>
        </div>
        <div className="form-group">
          <label>Blood Group</label>
          <select className="form-control" ref="blood_group" onChange={(evt) => this.setState({blood_group: evt.target.value})} value={this.state.blood_group}>
            <option value="">--select your blood group--</option>
            <option value="o+">O+</option>
            <option value="o-">O-</option>
            <option value="a+">A+</option>
            <option value="a-">A-</option>
            <option value="b+">B+</option>
            <option value="b-">B-</option>
            <option value="ab+">AB+</option>
            <option value="ab-">AB-</option>
          </select>
        </div>
        <div className="form-group">
          <label>Any Medical Conditions</label>
          <textarea placeholder="your medical conditions..." className="form-control" ref="medical_con" onChange={() => this.setState({medical_con: this.refs.medical_con.value})} value={this.state.medical_con}></textarea>
        </div>
        <button className="col-xs-12 md-btn md-raised indigo" onClick={() => this.props.callUpdateProfileDetails(this.state)}>Update Profile Details</button>
      </div>
    );
  }
}
FormProfileDetails.propTypes = {
  name:           PropTypes.string,
  jobtitle:       PropTypes.string,
  dateofjoining:  PropTypes.string,
  dob:            PropTypes.string,
  gender:         PropTypes.string,
  marital_status: PropTypes.string,
  address1:       PropTypes.string,
  address2:       PropTypes.string,
  emr_con_1:      PropTypes.number,
  emr_con_2:      PropTypes.number,
  work_email:     PropTypes.string,
  emp_email:      PropTypes.string,
  blood_group:    PropTypes.string,
  medical_con:    PropTypes.string
};
export default FormProfileDetails;