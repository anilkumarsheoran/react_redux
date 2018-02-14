import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux'
import './App.css';
import PropTypes from 'prop-types';
import * as courseActions from './Actions/courseActions';


class App extends Component {
  constructor(props){
    super(props)
   
    this.state = {course:{title: ""}}
    this.onClickSave = this.onClickSave.bind(this)
    this.onTitleChange = this.onTitleChange.bind(this)
    this.courseRow =this.courseRow.bind(this)
  }

  onClickSave(e){
      this.props.dispatch(courseActions.createCourse(this.state.course));
      
  }
  onTitleChange(event){
        const course = this.state.course
        course.title = event.target.value
        this.setState({
            course : course
        })
  }
  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         {/*<img src={logo} className="App-logo" alt="logo" />*/} 
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.props.courses.map(this.courseRow)}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
         <input type="text" onChange = {this.onTitleChange} value={this.state.course.title} />
         <input type="button" value='Submit' onClick = {this.onClickSave} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {courses: state.courses
  }
}
export default connect(mapStateToProps)(App);
