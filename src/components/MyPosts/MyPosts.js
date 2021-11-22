import Posts from './Posts/Posts'
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={s.MyPosts}>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <Posts counter='5' message="'Hi everyone'"
                       src='https://miro.medium.com/max/1200/1*BomiWkQi5XB5A4KpQziJpw.jpeg'/>
                <Posts counter='4' message="'I love cats'"
                       src='https://yt3.ggpht.com/a/AGF-l79POgPSXigw3cr69X1sMsKgl5K1V49Hz3WATQ=s900-c-k-c0xffffffff-no-rj-mo'/>
                <Posts counter='0' message="'Great job!'"
                       src='https://im0-tub-ru.yandex.net/i?id=15c5cff8592fd8db6d31c53ffbd99c67-l&ref=rim&n=13&w=1080&h=1350'/>
                <Posts counter='1' message="'See you'"
                       src='https://yt3.ggpht.com/a/AATXAJykKWHudhHH-eMtPRxON4oDxxlEAHoVV8dMLsWI=s900-c-k-c0xffffffff-no-rj-mo'/>
                <Posts counter='2' message="'Have a nice day!'"
                       src='https://avatars.mds.yandex.net/i?id=1e46744ab9a92b3687b14fcab717befc-3084551-images-thumbs&ref=rim&n=33&w=281&h=188'/>
            </div>

        </div>
    )
}

export default MyPosts;