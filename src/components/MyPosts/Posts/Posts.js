import s from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className='Posts'>
            <div className={s.item}>
                    <span>{`${props.counter} likes`}</span>
                <div className={s.pic}>
                    <img src = {props.src} alt="cat" />
                </div>
                <div>
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default Posts;