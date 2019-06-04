import React from 'react';
import * as _ from 'lodash';

class RHStatList extends React.Component{

  render(){
    const {  yearArray } = this.props;
    let rhStatsList = <tr><td className="text-muted text-center" colSpan={9}><h2>Loading RHStats...</h2></td></tr>;
    if (this.props.rhStatsList !== undefined && _.size(this.props.rhStatsList) === 0 && !this.props.isRHLoading) {
      rhStatsList = <tr><td className="text-muted text-center" colSpan={9}><h2>No RH This Year.</h2></td></tr>;
    }else if (this.props.isRHLoading){
      rhStatsList = <tr><td className="text-muted text-center" colSpan={9}><h2>Loading RHStats...</h2></td></tr>;
    } else if (this.props.rhStatsList !== undefined) {
      rhStatsList = _.map(this.props.rhStatsList, (rhStats, key) => {
        return (
          <tr key={key}>
            <td>{Number(key)+1}</td>
            <td>{rhStats.user_id}</td>
            <td>{rhStats.name}<br/><span className="job-title">{rhStats.designation}</span></td>
            <td>{rhStats.stats.rh_can_be_taken}</td>
            <td>{rhStats.stats.rh_approved}</td>
            <td>{rhStats.stats.rh_rejected}</td>
            <td>{rhStats.stats.rh_left}</td>
            <td>{rhStats.stats.rh_compensation_used}</td>
            <td>{rhStats.stats.rh_compensation_pending}</td>
          </tr>
        );
      });
    } 
  
    return (
      <div>
        <div className="row">
          <div className="col-md-5 rh-stat-year">
            <div className="col-md-3">
              <select
                      className="form-control"
                      ref="year_holidays"
                      onChange={e => {
                        this.props.handleYearChange(e);
                      }}
                      value={this.props.stateData.year}
                      style={{minHeight:'0'}}
                      disabled={this.props.isRHLoading ? true : false}
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
            <table className="table table-striped rh-stat table-responsive">
              <thead className="success">
                <tr><th>#</th><th>Emp Id</th><th>Name</th><th>Total RH Available</th><th>RH Approved</th><th>RH Cancelled</th><th>Pending RH</th><th>RH Compensation Used</th><th>Pending RH Compensation</th></tr>
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
