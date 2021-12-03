import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    let DialogItems = props.state.DialogsData.map(item => <DialogItem name={item.name} id={item.id}/>);
    let MessageItems = props.state.MessageData.map(item => <Message message={item.message}/>);

    let newTextElement = React.createRef();

    let addText = () => {
        let text = newTextElement.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogItems}
            </div>
            <div className={s.messages}>
                {MessageItems}
                <div>
                    <textarea ref={newTextElement}></textarea>
                </div>
                <div>
                    <button onClick={addText}>Add some text</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;