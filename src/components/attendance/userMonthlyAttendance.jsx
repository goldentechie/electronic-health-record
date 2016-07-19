import React from 'react';
import { connect } from 'react-redux'
import { Router, browserHistory, Link, withRouter } from 'react-router'
import * as actions_monthlyAttendance from '../../actions/user/monthlyAttendance'
import * as _ from 'lodash'
import {notify} from '../../services/index'

import VisibleHeader from '../../containers/generic/header'

import * as actions_login from '../../actions/login/index'

import VisibleLoadingIcon from '../../containers/generic/loadingIcon'

import VisibleDayWorking from './dayWorking'
import VisibleDayFutureWorking from './dayFutureWorking'
import VisibleDayNonWorking from './dayNonWorking'
import VisibleDayLeave from './dayLeave'
import VisibleDayHalfDay from './dayHalfDay'


import VisibleUserDetails from './userDetails'
import VisibleMonthSummary from './monthSummary'


class UserMonthlyAttendance extends React.Component {
    constructor( props ){
        super( props );
    }
    componentDidMount(){
        
    }
    componentWillMount(){
    }
    componentWillReceiveProps( props ){
    }
  
    _getWeekHtml( w ){
      return _.map( w, ( dayData, key ) => {
        let dayHtml = ''
        if( dayData.day_type == 'NON_WORKING_DAY' ){
          dayHtml = <VisibleDayNonWorking dayData={dayData}/>
        }else if( dayData.day_type == 'LEAVE_DAY' ){
          dayHtml = <VisibleDayLeave dayData={dayData}/>
        }else if( dayData.day_type == 'HALF_DAY' ){
          dayHtml = <VisibleDayHalfDay dayData={dayData}/>
        }else if( dayData.day_type == 'FUTURE_WORKING_DAY' ){
          dayHtml = <VisibleDayFutureWorking dayData={dayData} />
        }else{
          dayHtml = <VisibleDayWorking dayData={dayData} />
        }
        
        return (
          <td key={key}  className="fc-event-container">
            { dayHtml }
          </td>
        )
      })
    }

    _getMonthHtml( styles, m ){
      let weekWise = _.chunk(m, 7)
      return _.map( weekWise, ( week, key ) => {
        let weekHtml = this._getWeekHtml( week )
        return (
          <div key={key} className="fc-row fc-week fc-widget-content"  style={styles.height100per} >
            <div className="fc-bg">
              <div className="fc-content-skeleton">
                <table>
                  <tbody>
                    <tr>
                      { weekHtml }
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
          </div>
        )
      })
    }

    _onChangeMonth( check ){
    if( check == 'previous' ){
        this.props.onMonthAttendance( this.props.monthlyAttendance.userid, this.props.monthlyAttendance.previousMonth.year, this.props.monthlyAttendance.previousMonth.month )
      }else if( check == 'next' ){
        this.props.onMonthAttendance( this.props.monthlyAttendance.userid, this.props.monthlyAttendance.nextMonth.year, this.props.monthlyAttendance.nextMonth.month )
      }
      
    }


    render(){
      let styles = _.cloneDeep(this.constructor.styles);
      let calendarStructure = this._getMonthHtml( styles, this.props.monthlyAttendance.attendance )

      
        return(
        	<div >
				

        

  				<div id="content" className="app-content box-shadow-z0" role="main">
    				
    				<div ui-view className="app-body" id="view">

            


<div>
    
    <div className="fullcalendar fc fc-ltr fc-unthemed">
      <div className="fc-toolbar">
      	<div className="fc-left">
      		<button type="button" className="fc-prev-button fc-button fc-state-default fc-corner-left fc-corner-right" onClick={ () => this._onChangeMonth( 'previous' ) } >
            <span className="fc-icon fc-icon-left-single-arrow"></span>
      		</button>
      	</div>
      	<div className="fc-right">
      		<button type="button" className="fc-next-button fc-button fc-state-default fc-corner-left fc-corner-right" onClick={ () => this._onChangeMonth( 'next' ) }>
            <span className="fc-icon fc-icon-right-single-arrow"></span>
      		</button>
      	</div>
      	<div className="fc-center">

      		<h2> { this.props.monthlyAttendance.monthName } { this.props.monthlyAttendance.year }</h2>

      	</div>
      	<div className="fc-clear"></div>
      </div>

      <br/>


      


  
      <VisibleUserDetails {...this.props } />

  <VisibleMonthSummary {...this.props }/>
  
  



      <div className="fc-view-container" >
        <div className="fc-view fc-month-view fc-basic-view">
            <table>
              <tbody className="fc-body">
                <tr>
                  <td className="fc-widget-content">
                    <div className="fc-day-grid-container">
                      <div className="fc-day-grid">

                        { calendarStructure }


                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>


          
        </div>
      </div>
      
    </div>




</div>



    </div>
  </div>
  
  </div>


        )
    }
}

UserMonthlyAttendance.styles = {
  height100per: {
    'minHeight' : '150px'
  }
};

const VisibleUserMonthlyAttendance = UserMonthlyAttendance
export default VisibleUserMonthlyAttendance