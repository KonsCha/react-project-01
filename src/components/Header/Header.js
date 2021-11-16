import s from './Header.module.css';
console.log(s);
const Header = () => {
  return (
    <div className={s.Header}>
      <ul className = {s.list}>
        <li className={s.item}><a href="#">HTML</a></li>
        <li className={s.item}><a href="#">CSS</a></li>
        <li className={s.item}><a href="#">JavaScript</a></li>
      </ul>
    </div>
  )
}

export default Header;