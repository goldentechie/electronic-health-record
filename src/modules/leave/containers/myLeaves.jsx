import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Menu from '../../../components/generic/Menu';
import {isNotUserValid} from '../../../services/generic';
import Header from '../../../components/generic/Header';
import UserLeavesList from '../../../modules/leave/components/myLeaves/UserLeavesList';
import * as actions from '../../../redux/actions';
import * as actions_myLeaves from '../../../redux/leave/actions/myLeaves';

import RHLeaves from "../components/RHLeaves/RHLeaves";
import { getYearArray } from "../../../services/generic";
// "../../../services/generic";
import { confirm } from "../../../services/notify";
import ApplyRHModel from "../../../components/leave/RHLeaveList/ApplyModal";
// "../../../components/leave/RHLeaveList/ApplyModal";
import * as actions_apply_leave from "../../../redux/leave/actions/applyLeave";

class MyLeaves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      showModal: false,
      inputValue: "",
      showerror: false,
      reCall:true
    };
    this.props.onIsAlreadyLogin();
  }
  componentWillMount() {
    this.props.onMyLeavesList();
    this.year = getYearArray();
    this.setState({ year: `${this.year[3]}` });
  }
  componentWillReceiveProps(props) {
    const { id } = this.props.loggedUser.data;
    window.scrollTo(0, 0);
    let isNotValid = isNotUserValid(this.props.location.pathname, props.loggedUser);
    if (isNotValid.status) {
      this.props.history.push(isNotValid.redirectTo);
    }
    if (id && this.state.reCall) {
      this.props.getRHList(this.year[3], id);
      this.setState({
        reCall: false
      });
    }
  }
  handleYearChange = e => {
    this.setState({ year: e.target.value });
    this.props.getRHList(e.target.value);
  };

  handleApplyClick = leave => {
    this.setState({
      currentRH: leave,
      showModal: true
    });
  };
  onApplyRHLeave = () => {
    const { id } = this.props.loggedUser.data;
    const { date, type_text, raw_date } = this.state.currentRH;
    this.props
      .onApplyLeave(
        raw_date,
        raw_date,
        1,
        this.state.inputValue,
        "",
        "",
        type_text
      )
      .then(() => {
        this.props.onMyLeavesList();
        this.props.getRHList(this.year[3], id);

        confirm("RH is Successfully Applied", "", "success");
      });
    if (this.state.inputValue) {
      this.setState({
        showModal: false,
        inputValue: "",
        showError: false
      });
    } else {
      this.setState({
        showError: true
      });
    }
  };
  onInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  
  render() {
    console.log(this.state);
    return (
      <div>
        <Menu {...this.props} />
        <div id="content" className="app-content box-shadow-z0" role="main">
          <ApplyRHModel
            show={this.state.showModal}
            handleHide={() => {
              this.setState({
                showModal: false,
                inputValue: "",
                showError: false
              });
            }}
            onApplyRHLeave={this.onApplyRHLeave}
            inputChange={this.onInputChange}
            inputValue={this.state.inputValue}
            stateData={this.state}
          />
          <Header
            pageTitle={"My Leaves"}
            showLoading={this.props.frontend.show_loading}
          />
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
                    RHLeaveList={this.props.RHLeaveList.RHLeaves.rh_list}
                    handleApplyClick={this.handleApplyClick}
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

function mapStateToProps(state) {
  return {
    frontend: state.frontend.toJS(),
    loggedUser: state.logged_user.userLogin,
    userLeaves: state.userLeaves.toJS(),
    applyLeave: state.applyLeave.toJS(),
    RHLeaveList: state.userLeaves.toJS()
  };
}
const mapDispatchToProps = dispatch => {
  return {
    onIsAlreadyLogin: () => {
      return dispatch(actions.isAlreadyLogin());
    },
    onMyLeavesList: () => {
      return dispatch(actions_myLeaves.getMyLeaves());
    },
    onApplyLeave: (
      from_date,
      to_date,
      no_of_days,
      reason,
      userId,
      day_status,
      leaveType,
      late_reason
    ) => {
      return dispatch(
        actions_apply_leave.apply_leave(
          from_date,
          to_date,
          no_of_days,
          reason,
          userId,
          day_status,
          leaveType,
          late_reason
        )
      );
    },
    onCancelLeave: (userId, from_date) => {
      return dispatch(actions_myLeaves.cancelLeave(userId, from_date));
    },
    getRHList: (year, id) => dispatch(actions_myLeaves.getRHList(year, id))
  };
};

const VisibleMyLeaves = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyLeaves);

const RouterVisibleMyLeaves = withRouter(VisibleMyLeaves);

export default RouterVisibleMyLeaves;
