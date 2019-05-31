import React from 'react';
import * as _ from 'lodash';

class RHStatList extends React.Component{

  render(){
    const {  yearArray } = this.props;
    let rhStatsList = <tr><td className="text-muted text-center" colSpan={8}><h2>Loading RHStats...</h2></td></tr>;
    if (this.props.rhStatsList !== undefined && _.size(this.props.rhStatsList) === 0) {
      rhStatsList = <tr><td className="text-muted text-center" colSpan={8}><h2>No RH This Year.</h2></td></tr>;
    } else if (this.props.rhStatsList !== undefined) {
      rhStatsList = _.map(this.props.rhStatsList, (rhStats, key) => {
        return (
          <tr key={key}>
            <td>{rhStats.name}</td>
            <td>{rhStats.user_id}</td>
            <td>{rhStats.stats.rh_can_be_taken}</td>
            <td>{rhStats.stats.rh_left}</td>
            <td>{rhStats.stats.rh_approved}</td>
            <td>{rhStats.stats.rh_rejected}</td>
            <td>{rhStats.stats.rh_compensation_pending}</td>
            <td>{rhStats.stats.rh_compensation_used}</td>
          </tr>
        );
      });
    } 
  
    return (
      <div>
        <div className="row">
          <div className="col-md-5" style={{float:"left"}}>
            <div className="col-md-3" style={{paddingLeft:"1px", paddingLeft:"1px"}}>
              <select
                      className="form-control"
                      ref="year_holidays"
                      onChange={e => {
                        this.props.handleYearChange(e);
                      }}
                      value={this.props.stateData.year}
                      style={{minHeight:'0'}}
                  >
                    {yearArray && yearArray.map((data,index)=><option key={index} value={data}>{data}</option>)}
              </select>
            </div>
          </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="table-responsive box">
            <div className="box-divider m-a-0"></div>
            <table className="table table-striped">
              <thead className="success">
                <tr><th>Name</th><th>Employee Id</th><th>RH Can Be Taken</th><th>RH Left</th><th>RH Approved</th><th>RH Rejected</th><th>RH Compensation Pending</th><th>RH Compensation Used</th></tr>
              </thead>
              <tbody>
                {rhStatsList}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default RHStatList;
