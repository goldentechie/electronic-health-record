import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import _ from 'lodash';

const DisplayRolesList = ({displayData, handleChangeActions, handleChangePages, handleChangeNotification, handleDelete}) => {
  let rolesData = displayData.roles;
  if (typeof rolesData !== undefined || rolesData !== null) {
    let rolesList = _.map(rolesData, (value, key) => {
      let rolesId = value.id;
      let roleActions = _.map(value.role_actions, (v, k) => {
        let actionId = v.id;
        return (
          <div key={k}>
            <input
              type="checkbox"
              value={v.name}
              checked={v.is_assigned}
              onChange={() => { handleChangeActions(actionId, rolesId); }} key={actionId}
            /> {v.name}
            <br />
          </div>
        );
      });
      let rolePages = _.map(value.role_pages, (v, k) => {
        let pageId = v.id;
        return (
          <div key={k}>
            <input
              type="checkbox"
              value={v.name}
              checked={v.is_assigned}
              onChange={() => { handleChangePages(pageId, rolesId); }} key={pageId}
            /> {v.name}
            <br />
          </div>
        );
      });
      let roleNotification = _.map(value.role_notifications, (v, k) => {
        let notificationId = v.id;
        return (
          <div key={k}>
            <input
              type="checkbox"
              value={v.name}
              checked={v.is_assigned}
              onChange={() => { handleChangeNotification(notificationId, rolesId); }} key={notificationId}
            /> {v.name}
            <br />
          </div>
        );
      });
      let collapseLink = 'collapse' + rolesId;
      return (
        <div className="panel panel-default" style={{'border': 0}} key={key}>
          <div className="panel-heading p-b-lg">
            <div className="panel-title p-b-md">
              <span className="col-xs-9">
                <Link data-toggle="collapse" data-parent="#accordion" to={collapseLink} >
                  <h4 className="m-b-xs text-lg col-sm-10">{value.name}</h4>
                  <span className="col-xs-12 text-sm">{value.description}</span>
                </Link>
              </span>
              <Link to="/manage_roles" className="col-sm-3 m-t-sm p-t-sm text-sm text-danger" onClick={() => { if (confirm('Do you want to Delete the Role ?')) { handleDelete(rolesId); } }}><i>Delete Role</i></Link>
            </div>
          </div>
          <div id={collapseLink} className="table-responsive p-t p-r p-b p-l panel-collapse collapse">
            <div className="panel-body">
              <table className="table table-condensed">
                <thead><tr><th>Pages</th><th>Actions</th><th>Notification</th></tr></thead>
                <tbody><tr><td>{rolePages}</td><td>{roleActions}</td><td>{roleNotification}</td></tr></tbody>
              </table>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="row p-t">
        <div className="col-xs-12 panel-group" id="accordion">
          {rolesList}
        </div>
      </div>
    );
  }
};

export default DisplayRolesList;

DisplayRolesList.PropTypes = {
  displayData: PropTypes.shape({
    roles: PropTypes.object.isRequired
  }).isRequired,
  handleChangeActions:      PropTypes.func.isRequired,
  handleChangePages:        PropTypes.func.isRequired,
  handleChangeNotification: PropTypes.func.isRequired,
  handleDelete:             PropTypes.func.isRequired
};
