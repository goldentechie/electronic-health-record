import React from "react";
import PropTypes from "prop-types";
import { ButtonInfo, Button } from "../../../components/generic/buttons";
// "components/generic/buttons";

const RHLeavesList = ({ leave, handleApplyClick }) => {  
  let s = leave.status;
  let f_char = s.charAt(0);
  let leaveStatusColor = '';
  if (s === 'Approved') {
    leaveStatusColor = 'green-A200';
  } else if (s === 'Pending') {
    leaveStatusColor = 'blue';
  } else if (s === 'Rejected') {
    leaveStatusColor = 'red';
  } else if (s === 'Cancelled Request') {
    leaveStatusColor = 'red-100';
  }else{
    leaveStatusColor = 'green';

  } 
  return (
    <div className={`list-item b-l b-l-2x b-${leaveStatusColor}`}>
      <div className="list-left">
        <span className={`w-40 avatar ${leaveStatusColor}`}>{f_char}</span>
      </div>
      <div className="list-body">
        <div className="col-xs-8">
          <div>
            <span className="_500">Holiday : {leave.name}</span>
          </div>
          <div>
            <span className="_500">Date : {leave.date}</span>
          </div>

          <div className="text-ellipsis text-muted text-sm">
            Month : {leave.month}
          </div>
          <div className="text-ellipsis text-muted text-sm">
            Day : {leave.day}
          </div>

          {leave.leave_type !== "" ? (
            <div className="text-ellipsis text-muted text-sm">
              Leave Type : {leave.type_text}
            </div>
          ) : null}
        </div>
        <div>
       {!leave.status && <div className="save-btn">
          <button
            type="button"
            className={`btn btn-primary`}
            onClick={() => {
              handleApplyClick(leave);
            }}
          >
            Apply
          </button>
        </div>
       }
       {leave.status && <div className={`status_text text-${leaveStatusColor}`}><b>{leave.status}</b></div>} 
       </div>
      </div>
    </div>
  );
};

export default RHLeavesList;
