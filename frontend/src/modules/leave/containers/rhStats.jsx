import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Menu from "../../../components/generic/Menu";
import { isNotUserValid } from "../../../services/generic";
import Header from "../../../components/generic/Header";
import * as actions from "../../../redux/actions";

import RHStatList from "../../../components/leave/rhStats/rhStatList";
import { getYearArray } from "../../../services/generic";
import * as actions_RhStats from "../../../redux/leave/actions/rh_stats";

class RHStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: getYearArray()[3],
      showerror: false,
      reCall: true,
    };
    this.props.onIsAlreadyLogin();
  }
  componentWillMount() {
    this.props.onRHStatRequest();
    this.year = getYearArray();
  }
  componentWillReceiveProps(props) {
   
  }

  handleYearChange = e => {
    const { id } = this.props.loggedUser.data;
    this.setState({ year: e.target.value });
    this.props.onRHStatRequest(e.target.value);
  };

  render() {
    return (
      <div>
        <Menu {...this.props} />
        <div id="content" className="app-content box-shadow-z0" role="main">
          <Header
            pageTitle={"RH Stats"}
            showLoading={this.props.frontend.show_loading}
          />
          <div className="app-body" id="view">
            <div className="padding">
              <div className="row">
                <div className="col-md-12">
                    <RHStatList handleYearChange={this.handleYearChange} rhStatsList={this.props.rhStats.data} stateData={this.state} yearArray={this.year} isRHLoading={this.props.frontend.show_loading}/>
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
    rhStats: state.rhStats.toJS()
  };
}
const mapDispatchToProps = dispatch => {
  return {
    onIsAlreadyLogin: () => {
      return dispatch(actions.isAlreadyLogin());
    },
    onRHStatRequest: (year) => {
      return dispatch(actions_RhStats.getRHStats(year));
    }
  };
};

const VisibleMyRHStats = connect(
  mapStateToProps,
  mapDispatchToProps
)(RHStats);

const RouterVisibleMyRHStats = withRouter(VisibleMyRHStats);

export default RouterVisibleMyRHStats;
