import React from 'react'

import PeageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'


export default props => ( 
    <div>
        <PeageHeader name="Todo" small="Cadastro"/>
        <TodoForm />
        <TodoList />
    </div>
)