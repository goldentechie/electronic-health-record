import React from 'react';
import { connect } from 'react-redux'
import { Router, browserHistory, Link, withRouter } from 'react-router'
import * as _ from 'lodash'
import {notify} from '../../services/index'
import Menu from '../../components/generic/Menu'

import * as actions_login from '../../actions/login/index'
import * as actions_myDocument from '../../actions/user/myDocument'
import * as actions_policy from '../../actions/policyDocuments/index'

import FormMyDocuments from '../../components/myDocuments/FormMyDocuments'
import LoadingIcon from '../../components/generic/LoadingIcon'


class MyDoduments extends React.Component {
	constructor( props ){
        super( props );
        this.props.onIsAlreadyLogin()
        this.state={
          my_document:[],
          message:"",
        }
    }
    componentWillMount(){
			this.props.onFetchUserPolicyDocument();
      this.props.onGetMydocuments()
    }
    componentWillReceiveProps( props ){
        window.scrollTo(0, 0);
        if( props.logged_user.logged_in == -1 ){
          this.props.router.push('/logout');
        }else{
					let unread = _.filter(props.policy_documents.policyDocuments, function(o) { return o.read == 0; }) || [];
	        if(unread.length > 0){
	          this.props.router.push('/policy_documents');
	        }
        }
        this.setState({
          my_document:props.myDocuments.my_document,
          message:props.myDocuments.status_message
        })
    }

	render(){

        return(
          <div>
          	<Menu {...this.props }/>
          	<div id="content" className="app-content box-shadow-z0" role="main">

                    <div className="app-header white box-shadow">
                <div className="navbar">
                  <a data-toggle="modal" data-target="#aside" className="navbar-item pull-left hidden-lg-up">
                    <i className="material-icons">&#xe5d2;</i>
                  </a>
                  <div className="navbar-item pull-left h5" id="pageTitle">My Document</div>
                </div>
                <div className="row no-gutter">
                  <div className="col-12">
                    <LoadingIcon {...this.props}/>
                  </div>
                </div>
              </div>

             		 <div className="app-body" id="view">

            			<div className="padding">
                                <div className="row no-gutter">
                                    <div className="col-xs-12 p-t p-l">
                                        <FormMyDocuments my_documents={this.state.my_document} user_id={this.props.logged_user.userid} callUpdateDocuments={this.props.onUpdatedocuments} {...this.props} />
                                    </div>
                                </div>
                  </div>

						</div>
					</div>
          </div>
        )
    }
}



function mapStateToProps( state ){
    return {
    	  frontend : state.frontend.toJS(),
        logged_user : state.logged_user.toJS(),
        myProfile : state.myProfile.toJS(),
        myDocuments: state.myDocument.toJS(),
				policy_documents: state.policyDocuments.toJS(),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIsAlreadyLogin : () => {
            return dispatch( actions_login.isAlreadyLogin(  ))
        },
        onGetMydocuments : () => {
            return dispatch( actions_myDocument.getMyDocument())
        },
        onDeleteDocument : ( doc_id ) => {
          return dispatch( actions_myDocument.deleteDocument( doc_id ))
        },
				onFetchUserPolicyDocument: ()=>{
		      return dispatch(actions_policy.fetchUserPolicyDocument());
		    },
    }
}

const VisibleMyDoduments = connect(
  mapStateToProps,
  mapDispatchToProps
)( MyDoduments )

const RouterVisibleMyDoduments = withRouter( VisibleMyDoduments )

export default RouterVisibleMyDoduments
