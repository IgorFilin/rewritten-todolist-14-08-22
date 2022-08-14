import {StateType} from "./App";
import {v1} from "uuid";


export type ActionType = ChangeStatusTaskType | AddTaskACTaskType| RemoveTaskType | AddTodolistType | RemoveTodolistACType | ChangeTitleTodolistACType | ChangeTitleTaskACType


export type ChangeStatusTaskType = ReturnType<typeof changeStatusTaskAC>
export type AddTaskACTaskType = ReturnType<typeof addTaskAC>
export type RemoveTaskType = ReturnType<typeof removeTaskAC>
export type AddTodolistType = ReturnType<typeof addTodolistAC>
export type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>
export type ChangeTitleTodolistACType = ReturnType<typeof changeTitleTodolistAC>
export type ChangeTitleTaskACType = ReturnType<typeof changeTitleTaskAC>


export const StateReducer = (state:StateType,action:ActionType):StateType => {
    switch (action.type){
        case 'CHANGE-STATUS-TASK':
            return  state.map(tl=> tl.todolistId === action.todolistId?{...tl,tasks:tl.tasks.map(task => task.taskId === action.taskId?{...task,isDone:action.status}:task)}:tl)
        case 'ADD-TASK':
            return state.map(tl => tl.todolistId === action.todolistId?{...tl,tasks:[{taskId: v1(), title: action.title, isDone: false},...tl.tasks]}:tl)
        case "REMOVE-TASK":
            return state.map(tl => tl.todolistId === action.todolistId?{...tl,tasks:tl.tasks.filter(task => task.taskId !== action.taskId)}:tl)
        case 'ADD-TODOLIST':
            return [{
                title: action.title,
                filter: "all",
                todolistId: v1(),
                tasks: [],
                students: []
            },...state]
        case "REMOVE-TODOLIST":
            return state.filter(tl => tl.todolistId !== action.todolistId)
        case "CHANGE-TITLE-TODOLIST":
            return state.map(tl => tl.todolistId === action.todolistId?{...tl,title:action.title}:tl)
        case "CHANGE-TITLE-TASK":
            return state.map(tl => tl.todolistId === action.todolistId ?{...tl,tasks:tl.tasks.map(task => task.taskId === action.idTask?{...task,title:action.title}:task)}:tl)
        default:
            return state
    }
}


export const changeStatusTaskAC = (status:boolean,taskId:string,todolistId:string) => {
    return {type:'CHANGE-STATUS-TASK',status,taskId,todolistId} as const
}
export const addTaskAC = (title:string,todolistId:string) => {
    return {type:'ADD-TASK',title,todolistId} as const
}
export const removeTaskAC = (taskId:string,todolistId:string) => {
    return {type:'REMOVE-TASK',taskId,todolistId} as const
}
export const addTodolistAC = (title:string) => {
    return {type:'ADD-TODOLIST',title} as const
}
export const removeTodolistAC = (todolistId:string) => {
    return {type:'REMOVE-TODOLIST',todolistId} as const
}
export const changeTitleTodolistAC = (title:string,todolistId:string) => {
    return {type:'CHANGE-TITLE-TODOLIST',title,todolistId} as const
}
export const changeTitleTaskAC = (title:string,idTask:string,todolistId:string) => {
    return {type:'CHANGE-TITLE-TASK',title,idTask,todolistId} as const
}

