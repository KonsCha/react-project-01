import s from './Logo.module.css';

const Logo = () => {
    return (
        <div className={s.Logo}>
            <img
                 src='https://www.clipartmax.com/png/full/38-384065_black-and-white-logo-batman-clipart-library-clip-art-batman-logo-black.png'
                 alt="Logo"/>
        </div>
    )
}
export default Logo;

const some = [1,5645,768,5];
const result = some.filter((num) => num > 5)