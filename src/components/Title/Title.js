import s from'./Title.module.css';

const Title = () => {
  return (
    <div className={s.Title}>
      <h1>Simple HTML</h1>
      <p className={s.Text}>
          Here is some text to introduce.
      </p>
    </div>
  )
}

export default Title;