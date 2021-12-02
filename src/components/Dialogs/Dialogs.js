import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let DialogItems = props.state.DialogsData.map(item => <DialogItem name={item.name} id={item.id}/>);
    let MessageItems = props.state.MessageData.map(item => <Message message={item.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogItems}
            </div>
            <div className={s.messages}>
                {MessageItems}
            </div>
        </div>
    )
}

export default Dialogs;