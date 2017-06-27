import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as _ from 'lodash';
import {notify} from 'src/services/index';
import { CONFIG } from 'src/config/index';
import Menu from 'components/generic/Menu';
import LoadingIcon from 'components/generic/LoadingIcon';
import Header from 'components/generic/Header';
import HolidaysList from 'components/holidays/HolidaysList';
import * as actions_login from 'appRedux/auth/actions/index';
import * as actions_policy from 'appRedux/policyDocuments/actions/index';
import * as actions_holidaysList from 'appRedux/holidays/actions/holidaysList';

class Holidays extends React.Component {
  constructor (props) {
    super(props);
    this.props.onIsAlreadyLogin();
  }
  componentWillMount () {
    this.props.onFetchUserPolicyDocument();
    this.props.onHolidaysList();
  }
  componentWillReceiveProps (props) {
    // window.scrollTo(0, 0);
    if (props.logged_user.logged_in == -1) {
      this.props.router.push('/logout');
    } else {
      if (props.logged_user.role == CONFIG.ADMIN || props.logged_user.role == CONFIG.GUEST) {
      } else {
        let unread = _.filter(props.policy_documents.policyDocuments, function (o) { return o.read == 0; }) || [];
        if (unread.length > 0) {
          this.props.router.push('/policy_documents');
        }
      }
    }
  }
  render () {
    return (
      <div>
        <Menu {...this.props} />
        <div id="content" className="app-content box-shadow-z0" role="main">
          <Header pageTitle={'Holidays List'} showLoading={this.props.frontend.show_loading} />
          <div className="app-footer">
            <div></div>
          </div>
          <div className="app-body" id="view">
            <div className="padding">
              <div className="row">
                <div className="col-md-12">
                  <HolidaysList holidays={this.props.holidaysList.holidays} />
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
    frontend: state.frontend.toJS(),
    logged_user: state.logged_user.toJS(),
    holidaysList: state.holidaysList.toJS(),
    policy_documents: state.policyDocuments.toJS()
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIsAlreadyLogin: () => {
      return dispatch(actions_login.isAlreadyLogin());
    },
    onHolidaysList: () => {
      return dispatch(actions_holidaysList.get_holidays_list());
    },
    onFetchUserPolicyDocument: () => {
      return dispatch(actions_policy.fetchUserPolicyDocument());
    }
  };
};

const VisibleHolidays = connect(mapStateToProps, mapDispatchToProps)(Holidays);

const RouterVisibleHolidays = withRouter(VisibleHolidays);

export default RouterVisibleHolidays;