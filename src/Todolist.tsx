import React, {useState} from "react";
import {FilteredType, TasksType} from "./App";
import {AddItemComponent} from "./addItemComponent";
import {EditableSpan} from "./EditableSpan";

type TodolistTypeProps = {
    title: string
    tasks: TasksType
    changeStatusTask: (status: boolean, taskId: string, todolistId: string) => void
    todolistId: string
    addTaskCallBack: (title: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
    removeTodolist:(todolistId:string)=> void
    changeTitleTodolist:(title:string,todolistId:string)=>void
    changeTitleTask:(title:string,idTask:string,todolistId:string)=>void
}

export const Todolist = (props: TodolistTypeProps) => {
    const [filter, setFilter] = useState('all')

    const onChangeChecked = (status: boolean, taskId: string, todolistId: string) => {
        props.changeStatusTask(status, taskId, todolistId)
    }
    const onClickHandlerDeleteTask = (taskId: string, todolistId: string) => {
        props.removeTask(taskId, todolistId)
    }
    const addTaskCallBack = (title: string) => {
        props.addTaskCallBack(title, props.todolistId)
    }

    const onClickHandlerChangeFilter = (filterValue: FilteredType) => {
        setFilter(filterValue)
    }
    const callbackRemoveTodolist = () => {
        props.removeTodolist(props.todolistId)
    }
    const changeTitleTodolist = (title:string) => {
        props.changeTitleTodolist(title,props.todolistId)
    }
    const changeTitleTask = (title:string,idTask:string,todolistId:string) => {
        props.changeTitleTask(title,idTask,todolistId)
    }

    let filteredTask = props.tasks

    if (filter === 'active') {
        filteredTask = props.tasks.filter(task => !task.isDone)
    }
    if (filter === 'complited') {
        filteredTask = props.tasks.filter(task => task.isDone)
    }


    return (<div style={{textAlign: 'center'}}>
        <EditableSpan changeTitle={changeTitleTodolist}  title={props.title} callback={callbackRemoveTodolist}/>
        <AddItemComponent addTaskCallBack={addTaskCallBack}/>
        <div>{filteredTask.map(task => {
            return (
                <div key={task.taskId}>
                    <input checked={task.isDone} type={"checkbox"}
                           onChange={(e) => onChangeChecked(e.currentTarget.checked, task.taskId, props.todolistId)}/>
                  <EditableSpan title={task.title} callback={()=>onClickHandlerDeleteTask(task.taskId,props.todolistId)} changeTitle={(title)=>changeTitleTask(title,task.taskId,props.todolistId)}/>
                </div>
            )
        })}</div>
        <button onClick={() => onClickHandlerChangeFilter('all')}>all</button>
        <button onClick={() => onClickHandlerChangeFilter('active')}>active</button>
        <button onClick={() => onClickHandlerChangeFilter('complited')}>complite</button>
    </div>)
}
