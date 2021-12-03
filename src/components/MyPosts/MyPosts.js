import Posts from './Posts/Posts'
import s from './MyPosts.module.css';
import React from 'react';

const MyPosts = (props) => {
    let PostsItem = props.state.PostsData.map(item => <Posts counter={item.counter} message={item.message}
                                                             src={item.src}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }
    return (
        <div className={s.MyPosts}>
            <div>
                <div className={s.textarea}>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div className={s.buttonIn}>
                    <button className={s.button} onClick={addPost}>Add Post</button>
                </div>
                {PostsItem}
            </div>

        </div>
    )
}

export default MyPosts;