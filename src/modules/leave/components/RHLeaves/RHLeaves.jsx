import React from "react";
import * as _ from "lodash";
import { DateField } from "react-date-picker";
// import ButtonRaised from "components/generic/buttons/ButtonRaised";
// import { confirm } from "src/services/notify";
// import InputText from "components/generic/input/InputText";
import RHLeavesList from "../../../../components/leave/RHLeaveList/RHLeaveList";
// "../../../components/leave/RHLeaveList/RHLeaveList"

class RHLeaves extends React.Component {
  render() {
    const { yearArray,RHLeaveList,handleApplyClick } = this.props;
    let img = <img src='./socialMediaIcons/holidays.svg' className="w-40 img-circle m-x-md" />;
    return (
      <div className="row rh-leaves">
        <div className="col-md-12">
          <div
            className="col-md-12"
            style={{ paddingLeft: "1px", padding: "0px",display:"flex" }}
          > <div className="col-md-8 col-xs-8 rh-text"><b>RH List</b></div>
          <div className="col-md-4 col-xs-4 rh-select">
            <select
              className="form-control"
              onChange={this.props.handleYearChange}
              value={this.props.stateData.year}
            >
              {yearArray &&
                yearArray.map((data, index) => (
                  <option key={index} value={data}>
                    {data}
                  </option>
                ))}
            </select>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="list white">
            {RHLeaveList?_.map(this.props.RHLeaveList, (leave, key) => {
              return (
                <RHLeavesList
                  key={key}
                  leave={leave}
                  handleApply={this.handleApply}
                  cancelLeave={this.cancelLeave}
                  handleApplyClick={handleApplyClick}
                />
              );
            }):<h2>{img} No RH This Year.</h2>}
            
          </div>
        </div>
      </div>
    );
  }
}

export default RHLeaves;
