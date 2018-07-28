import "react-date-picker/index.css";
import React from "react";
import PropTypes from "prop-types";
import DeviceCounter from "./DeviceCounter";
import style from "src/styles/inventory/viewUser.scss";
import {CSVLink} from 'react-csv';
//  import FormAddNewInventory from '/home/etech/Documents/ReactReduxHR/src/modules/inventory/components/AddInventory.jsx'



const DeviceCounterTab = ({ statusList, deviceCountList, router }) => {
  let total = 0;
  let newDeviceCountData = [];
  let headers = [
    {label: 'Device Name', key: 'deviceName'},
  ];
  let datas =[];
  let headerData=[];
  Object.keys(deviceCountList).map((key)=>{
    Object.keys(deviceCountList[key]).map((keys)=>{
      headers.map((data)=>{
        if(data.label !== keys){
            headerData.push({
            label:keys,
            key:keys
          })
        }
      })
    });
  });
  let hdata =  _.map(
    _.uniq(
        _.map(headerData, function(obj){
            return JSON.stringify(obj);
        })
    ), function(obj) {
        return JSON.parse(obj);
    }
  );
    let headersData = headers.concat(hdata);
    Object.keys(deviceCountList).map((key)=>{
      let deriveData = {
        deviceName:key,
      }
      Object.keys(deviceCountList[key]).map((keys)=>{
           deriveData[keys] = deviceCountList[key][keys]
      });
      datas.push(deriveData);
    });

  for (var key in deviceCountList) {
    if (deviceCountList.hasOwnProperty(key)) {
      let deviceData = deviceCountList[key];
      total = total + deviceData.total;
      newDeviceCountData.push(
        <DeviceCounter
        key={key}
          deviceData={deviceData}
          deviceName={key}
          router={router}
          />
        );
      }
    }
  let statusList1 = statusList.map((val, i) => {
    return (
      <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2" key={i}>
        <div
          className="p-a"
          style={{ backgroundColor: val.color, margin: "2px 2px 2px 2px" }}
        >
          <h4 />
          <div
            className="h-3x text-u-c _600 text-sm"
            style={{ paddingTop: "20%" }}
          >
            {val.status}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="col-xs-12">
        <div className="row">
          <div
            className="box p-a counter-tab"
            style={{ height: "87px", marginTop: "6%" }}
          >
            <div className="pull-left m-r">
              <span className="w-48 rounded primary">
                <i className="fa fa-pie-chart fa-lg" aria-hidden="true" />
              </span>
            </div>
            <div className="clear">
              <h4 className="m-a-0 text-lg _300" />
              <small className="text-muted"> Total Device </small>
              <CSVLink data={datas} headers={headersData} filename={"device-report.csv"}  className="btn btn-success" style={{position: "absolute",right:"2%",bottom:'50%'}} >
                  Download Device Report
              </CSVLink>
              <h1 style={{ float: "right", color: "#0E9BB1" }}>{total}</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-xs-12">
        <div className='row'>
          <div className="box"> */}
      {/* <div className="box-header">
              <small className="text-muted"> Device Status Overview </small>
            </div> */}
      {/* <div className="box-body">
              <div className="row no-gutter m-b text-xs l-h-1x">
                <div className="row"> */}
      {/* {statusList1} */}
      {/* </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="row">{newDeviceCountData}</div>
    </div>
  );
};

DeviceCounterTab.propTypes = {
  statusList: PropTypes.array.isRequired
};

export default DeviceCounterTab;
