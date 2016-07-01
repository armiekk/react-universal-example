import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

// let AddTodo = ({ dispatch }) => {
//
//   getInitialState(){
//     return {
//       input: ''
//     }
//   }
//
//   handleTextChange(e){
//     this.setState({
//       input: e.target.value
//     });
//   }
//
//   return (
//     <div>
//       <TextField value={this.state.input} onChange={this.handleTextChange} />
//     </div>
//   )
// }

class AddTodo extends Component {

  constructor(props){
    super(props);
    this.handleChanged = this.handleChanged.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = { input: '' };
  }

  handleChanged(event){
    this.setState({
      input: event.target.value
    });
  }

  handleClick(){
    if (!this.state.input.trim()) {
      return;
    }
    let { dispatch } = this.props;
    dispatch(addTodo(this.state.input));
    this.setState({
      input: ''
    });
  }

  render(){
    return (
      <div>
        {this.state.input} <br/>
      <TextField value={this.state.input} onChange={this.handleChanged} id="textInput" />
        <FlatButton onClick={this.handleClick} label="Add todo" />
      </div>
    );
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo
