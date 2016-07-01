import React from 'react'
import Footer from '../components/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Card, CardHeader, CardText } from 'material-ui/Card';


const TodoApp = () => (
  <div style={{margin: '20px'}}>
    <Card>
      <CardHeader
        title="Todo List"
        subtitle="Example todo list from redux example." />
      <CardText>
        <div>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </CardText>
    </Card>
  </div>
)

export default TodoApp
