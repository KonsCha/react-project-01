import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Kons
                </div>
                <div className={s.dialog}>
                    Kazumi
                </div>
                <div className={s.dialog}>
                    Luka
                </div>
                <div className={s.dialog}>
                    Dimon
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>What's up?</div>
            </div>
        </div>
    )
}

export default Dialogs;