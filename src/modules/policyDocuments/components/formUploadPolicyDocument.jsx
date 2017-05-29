import React from 'react';
import _ from 'lodash';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const styles = {
  formInput:{
    "marginLeft": "5%",
    "marginRight": "5%",
    "width": "80%"
  },
};

class FormUploadPolicyDocument extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      docs: [],
      nameofdoc:'',
      linkofdoc:'',
      errName:'',
      errLink:'',
    };
    this.submitDocs = this.submitDocs.bind(this);
  }

  componentWillReceiveProps(props){
    console.log('props.policy_documents',props.policy_documents);
    if(props.submitStatus == 1){
      this.setState({
        nameofdoc:'',
        linkofdoc:'',
        docs:props.policy_documents.policyDocuments,
      });
    }else{
      this.setState({
        docs:props.policy_documents.policyDocuments,
      });
    }
  }

  submitDocs(){
    let docs = this.state.docs;
    let name = this.state.nameofdoc.trim(),
        link = this.state.linkofdoc.trim(),
        state = true;
    this.setState({
      errName:'',
      errLink:'',
    });
    if(state && _.isEmpty(name)){
      state = false;
      this.setState({
        errName:"Please enter document name",
      });
    }
    if(state && _.isEmpty(link)){
      state = false;
      this.setState({
        errLink:"Please enter document link",
      });
    }
    console.log('this.state',this.state);
    if(state){
      let docs = this.state.docs;
      docs.push({name:name, link:link});
      this.props.submitDocs(docs);
      this.setState({
        nameofdoc:'',
        linkofdoc:'',
      });
    }
  }
  render(){
  	return(
      <div>
        <div className="col-xs-12">
          <Paper  zDepth={1} >
            <div>
              <form className="form-inline">
                <div className="form-group" style={styles.formInput}>
                <TextField
                  ref='name'
                  style={{width:'100%'}}
                  floatingLabelText="Name of doc"
                  errorText={this.state.errName}
                  value={this.state.nameofdoc}
                  onChange={(e)=>{
                    this.setState({
                        nameofdoc: e.target.value,
                    });
                  }}
                />
                </div>
                <div className="form-group" style={styles.formInput}>
                <TextField
                  ref='link'
                  style={{width:'100%'}}
                  floatingLabelText="Link of doc"
                  errorText={this.state.errLink}
                  value={this.state.linkofdoc}
                  onChange={(e)=>{
                    this.setState({
                        linkofdoc: e.target.value,
                    });
                  }}
                />
                </div>
                <div className="form-group" style={styles.formInput}>
                  <RaisedButton
                    label="SUBMIT"
                    primary={true}
                    style={{margin:"20px 10px",float:'right'}}
                    onClick={this.submitDocs}
                  />
                </div>
              </form>
            </div>
          </Paper>
        </div>
      </div>
    )
  }
}


export default FormUploadPolicyDocument;
