import React, {useReducer} from 'react';
import './App.css';
import {
    addTaskAC,
    addTodolistAC,
    changeStatusTaskAC, changeTitleTaskAC, changeTitleTodolistAC,
    removeTaskAC,
    removeTodolistAC,
    StateReducer
} from "./StateReducer";
import {v1} from "uuid";
import {Todolist} from "./Todolist";
import {AddItemComponent} from "./addItemComponent";


export type FilteredType = 'all' | 'complited' | 'active'
export type StateType = Array<{
    title: string
    filter: FilteredType
    todolistId: string
    tasks: TasksType
    students: Array<string>
}>
export type TasksType = Array<TaskType>
export type TaskType = {
    taskId: string
    title: string
    isDone: boolean
}


function App() {
    const [state, dispatch] = useReducer(StateReducer, [
        {
            title: "What to learn",
            filter: "all",
            todolistId: v1(),
            tasks: [
                {taskId: v1(), title: "HTML&CSS", isDone: true},
                {taskId: v1(), title: "CSS", isDone: true},
                {taskId: v1(), title: "React", isDone: false},
                {taskId: v1(), title: "Redux", isDone: false}
            ],
            students: [
                'Rick Kane',
                'Finnlay Bentley',
                'Samia North',
                'Isaac Morton',
                'Lily-Ann Clifford',
                'Thalia Park',
                'Sapphire Cruz',
                'Cieran Vazquez',
                'Anya Estes',
                'Dominika Field',
                'Rosanna Chung',
                'Safiyah Davey',
                'Ryley Beasley',
                'Kalvin Trejo',
                'Evie-Mae Farrell',
                'Juliet Valencia',
                'Astrid Austin',
                'Lyle Montgomery',
                'Nisha Mora',
                'Kylie Callaghan',
                'Star Wilks',
                'Marissa Colley',
                'Asa Fuller',
                'Leigh Kemp',
                'Avleen Dawson',
                'Sammy Bonilla',
                'Acacia Becker',
                'Coral Shepherd',
                'Melina Molina',
                'Kiran Bailey',
                'Clara Escobar',
                'Alexandru Horn',
                'Brandon-Lee Mercado',
                'Elouise Weston',
                'King Long',
                'Kerri Searle',
                'Kanye Hamer',
                'Elwood Benitez',
                'Mikail Whitaker',
                'Bobby Hardy',
                'Talha Ferry',
                'Priscilla Landry',
                'Olivia-Grace Cain',
                'Kiaan Wallace',
                'Wesley Padilla90',
                'Ella-Grace Wooten91',
                'Kaif Molloy92',
                'Kamal Broadhurst93',
                'Bianca Ferrell94',
                'Micheal Talbot95',
            ]
        },
        {
            title: "What to buy",
            filter: "all",
            todolistId: v1(),
            tasks: [
                {taskId: v1(), title: "Milk", isDone: true},
                {taskId: v1(), title: "Water", isDone: true},
                {taskId: v1(), title: "Book", isDone: true}
            ],
            students: [
                'Jago Wormald1',
                'Saul Milne2',
                'Aariz Hester3',
                'Dion Reeve4',
                'Anisa Ortega5',
                'Blade Cisneros6',
                'Malaikah Phelps7',
                'Zeeshan Gallagher8',
                'Isobella Vo9',
                'Rizwan Mathis10',
                'Menaal Leach11',
                'Kian Walton12',
                'Orion Lamb13',
                'Faizah Huynh14',
                'Crystal Vaughan15',
                'Vivien Hickman16',
                'Stuart Lu17',
                'Karol Davison18',
                'Dario Burns19',
                'Chloe Rich20',
                'Martyna Felix',
                'Nida Glass',
                'Maeve Miles',
                'Hasnain Puckett',
                'Ayman Cano',
                'Safwan Perry',
                'Fox Kelly',
                'Louise Barlow',
                'Malaki Mcgill',
                'Leanna Cline',
                'Willard Hodge',
                'Amelia Dorsey',
                'Kiah Porter',
                'Jeanne Daly',
                'Mohsin Armstrong',
                'Laurie Rangel',
                'Princess Tierney',
                'Kasim Kendall',
                'Darryl Cope',
                'Elysha Ray',
                'Liyana Harris',
                'Kashif Blackburn',
                'Atif Zimmerman',
                'Sila Hartley',
                'Ralphie Hebert',
            ]
        }
    ])

    const changeStatusTask = (status: boolean, taskId: string, todolistId: string) => {
        dispatch(changeStatusTaskAC(status, taskId, todolistId))
    }
    const addTaskCallBack = (title: string, todolistId: string) => {
        dispatch(addTaskAC(title, todolistId))
    }
    const removeTask = (taskId: string, todolistId: string) => {
        dispatch(removeTaskAC(taskId, todolistId))
    }
    const addTodolist = (title:string) => {
        dispatch(addTodolistAC(title))
    }
    const removeTodolist = (todolistId:string)=> {
        dispatch(removeTodolistAC(todolistId))
    }
    const changeTitleTodolist = (title:string,todolistId:string) => {
        dispatch(changeTitleTodolistAC(title,todolistId))
    }
   const changeTitleTask = (title:string,idTask:string,todolistId:string) => {
        dispatch(changeTitleTaskAC(title,idTask,todolistId))
   }


    const todolists = state.map(tl => <Todolist
        key={tl.todolistId}
        title={tl.title}
        tasks={tl.tasks}
        todolistId={tl.todolistId}
        changeStatusTask={changeStatusTask}
        addTaskCallBack={addTaskCallBack}
        removeTask={removeTask}
        removeTodolist={removeTodolist}
        changeTitleTodolist={changeTitleTodolist}
        changeTitleTask={changeTitleTask}
    />)


    return (
        <div className="App">
            <AddItemComponent addTaskCallBack={addTodolist}/>
            {todolists}
        </div>
    );
}

export default App;


