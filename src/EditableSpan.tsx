import React, {ChangeEvent, useState} from "react";

type EditableSpanTypeProps = {
    title: string
    callback: () => void
    changeTitle:(title:string)=>void
}
export const EditableSpan = (props: EditableSpanTypeProps) => {
    const[editMode,setEditMode]= useState<boolean>(false)
    const[title,setTitle]= useState(props.title)

    const onClickHandler = () => {
        props.callback()
    }
    const onDoubleClickHandler = () => {
        setEditMode(true)
    }
    const onBlurHandler = ()=> {
        setEditMode(false)
        props.changeTitle(title)
    }
    const onChangeHandler =(e:ChangeEvent<HTMLInputElement>)=> {
        setTitle(e.currentTarget.value)
    }

    return (<>
        {editMode ? <input onChange={onChangeHandler} value={title} autoFocus onBlur={onBlurHandler}/> : <span onDoubleClick={onDoubleClickHandler} >{props.title}</span>}
            <span>
            <button onClick={onClickHandler}>x</button>
        </span>
    </>)
}