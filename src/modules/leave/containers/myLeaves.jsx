import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Menu from 'components/generic/Menu';
import {isNotUserValid} from 'src/services/generic';
import Header from 'components/generic/Header';
import UserLeavesList from 'modules/leave/components/myLeaves/UserLeavesList';
import RHLeaves from "../components/RHLeaves/RHLeaves"
import {  getYearArray } from 'src/services/generic';

import * as actions from 'appRedux/actions';
import * as actions_myLeaves from 'appRedux/leave/actions/myLeaves';

class MyLeaves extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      year:""
    }
    this.props.onIsAlreadyLogin();

  }
  componentWillMount () {
    this.props.onMyLeavesList();
    this.year = getYearArray();    
    this.props.getRHList(this.year[3])
    this.setState({year:`${this.year[3]}`});
  }
  componentWillReceiveProps (props) {
    window.scrollTo(0, 0);
    let isNotValid = isNotUserValid(this.props.route.path, props.loggedUser);
    if (isNotValid.status) {
      this.props.router.push(isNotValid.redirectTo);
    }
  }
  handleYearChange=(e)=>{
    this.setState({ year: e.target.value });
    this.props.getRHList(e.target.value);
  }
  render () {
    return (
      <div>
        <Menu {...this.props} />
        <div id="content" className="app-content box-shadow-z0" role="main">
          <Header pageTitle={'My Leaves'} showLoading={this.props.frontend.show_loading} />
          <div className="app-body" id="view">
            <div className="padding">
              <div className="row">
                <div className="col-md-6">
                  <UserLeavesList {...this.props} />
                </div>
                <div className="col-md-6 rh-leave-container">
                  <RHLeaves 
                  stateData={this.state}
                  yearArray={this.year}
                  handleYearChange={this.handleYearChange}
                  RHLeaveList={this.props.RHLeaveList}

                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {  
  return {
    frontend:   state.frontend.toJS(),
    loggedUser: state.logged_user.userLogin,
    userLeaves: state.userLeaves.toJS(),
    applyLeave: state.applyLeave.toJS(),
    RHLeaveList:state.userLeaves.toJS().RHLeaves.rh_list
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIsAlreadyLogin: () => {
      return dispatch(actions.isAlreadyLogin());
    },
    onMyLeavesList: () => {
      return dispatch(actions_myLeaves.getMyLeaves());
    },
    onCancelLeave: (userId, from_date) => {
      return dispatch(actions_myLeaves.cancelLeave(userId, from_date));
    },
    getRHList:(year)=>  dispatch(actions_myLeaves.getRHList(year))
  }
};

const VisibleMyLeaves = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyLeaves);

const RouterVisibleMyLeaves = withRouter(VisibleMyLeaves);

export default RouterVisibleMyLeaves;
