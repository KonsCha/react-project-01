import Posts from './Posts/Posts'
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    let PostsItem = props.state.PostsData.map(item => <Posts counter={item.counter} message={item.message}
                                                             src={item.src}/>);
    return (
        <div className={s.MyPosts}>
            <div>
                <div className={s.textarea}>
                    <textarea></textarea>
                </div>
                <div className={s.buttonIn}>
                    <button className={s.button}>Add Post</button>
                </div>
                {PostsItem}
            </div>

        </div>
    )
}

export default MyPosts;