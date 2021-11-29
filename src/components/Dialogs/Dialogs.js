import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Kons' id='1'/>
                <DialogItem name='Kazumi' id='2'/>
                <DialogItem name='Luka' id='3'/>
                <DialogItem name='Dimon' id='4'/>
                <DialogItem name='Sasha' id='5'/>
                <DialogItem name='Valera' id='6'/>
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