import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let DialogItems = props.DialogsData.map(item => <DialogItem name={item.name} id={item.id}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogItems}
            </div>
            <div className={s.messages}>
                <Message message='Hi!'/>
                <Message message='How are you?'/>
                <Message message="What's up?"/>
            </div>
        </div>
    )
}

export default Dialogs;