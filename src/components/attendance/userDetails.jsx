import React from 'react';
class UserDetails extends React.Component {
    constructor( props ){
		super( props );
    }
    render(){

    	return (
        <div className="row">
         <div className="col-xs-12">
            <div className="box p-a">
              <div className="pull-left m-r">
                <span className="w-48 rounded  accent">
                  <i className="material-icons"></i>
                </span>
              </div>
              <div className="clear">
                <h4 className="m-a-0 text-lg">
                  { this.props.monthlyAttendance.userName }
                  <span className="text-sm"> </span></h4>

                <small className="text-muted"> { this.props.monthlyAttendance.userjobtitle }  </small><br/><br/>
              </div>
            </div>
        </div>
      </div>
	    )
    }
}

const VisibleUserDetails = UserDetails

export default VisibleUserDetails

