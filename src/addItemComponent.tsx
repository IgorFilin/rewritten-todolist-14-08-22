import React, {
    ChangeEvent,
    useState,
    KeyboardEvent} from 'react';


type AddItemComponentTypeProps = {
    addTaskCallBack:(title:string)=>void
}


export const AddItemComponent = (props:AddItemComponentTypeProps) => {
    const [title,setTitle] = useState('')
    const [error,setError] = useState('')

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError('')
    }

    const onClickHandler = () => {
        if(title.trim() !== ''){
            props.addTaskCallBack(title.trim())
            setTitle('')
        }else {
            setError("Title incorrectly")
        }
    }

    const onKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if (title.trim() !== '') {
            if (e.key === 'Enter') {
                props.addTaskCallBack(title.trim())
                setTitle('')
            }
        }else {
            setError("Title incorrectly")
        }
    }
    const onFocusHandler = () => {
        setError('')
    }


    return (
        <div>
            <span>
                <input onFocus={onFocusHandler} value={title} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}
                       type="text"/>
            </span>
            <span>
                <button  onClick={onClickHandler}>+</button>
            </span>
            {error && <div>{error}</div>}
        </div>
    );
};

