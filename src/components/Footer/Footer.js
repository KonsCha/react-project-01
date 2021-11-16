import s from './Footer.module.css';
console.log(s);
const Footer = () => {
  return (
    <div className={s.Footer}>
      <ol className={s.list}>
        <li className={`${s.item} ${s.active}`}>React</li>
        <li className={s.item}>Typescript</li>
        <li className={s.item}>Redux</li>
      </ol>
    </div>
  )
}

export default Footer;