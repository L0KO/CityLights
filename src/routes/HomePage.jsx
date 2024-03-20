import '../css/SearchPage.css'
import '../css/HomePage.css'

function HomePage() {

  return (
    <>
      <header className='header'>
        <img src="/img/homePage/logo.svg" alt="icon" />
        <nav className="header__navbar">
          <ul>
            <li className="header__nav-element">
              <a href="">О нас</a>
            </li>
            <li className="header__nav-element">
              <a href="">Контакты</a>
            </li>
            <li className="header__nav-element">
              <a href="">Помощь</a>
            </li>
            <li className="header__nav-element header__nav-enter">
              <a href="">Регистрация</a>
            </li>
            <li className="header__nav-element header__nav-enter">
              <a href="">Вход</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='main'>
        <div className="top">
          <div className="top__text-half">
            <p className="top__text top__first-line">Городские огни -</p>
            <p className="top__text top__second-line">и весь <span className='bold'> движ города</span></p>
            <p className="top__text top__third-line">от тебя в одном клике</p>
          </div>
          <div className="top__image-half">
            <div className="top__image-container">
              <img src="/img/homePage/karusel_1.svg" alt="" className="top__img" />
            </div>
            <div className="top__image-container">
              <img src="/img/homePage/karusel_2.svg" alt="" className="top__img" />
            </div>
            <div className="top__image-container">
              <img src="/img/homePage/karusel_3.svg" alt="" className="top__img" />
            </div>
            <div className="top__image-container">
              <img src="/img/homePage/karusel_4.svg" alt="" className="top__img" />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom__first-text-container">
            <p className="bottom__header-text"><span className='bold'>Открой мир</span> с нашим агрегатором событий!</p>
            <p className="bottom__text bottom__text-first">Узнавай о самых горячих мероприятиях в своём <br /> городе с помощью персонализированной ленты</p>
          </div>
          <div className="bottom__second-text-container">
            <p className="bottom__header-text"><span className="bold">Создавай</span> зелёные пространства вместе с нами!</p>
            <p className="bottom__text bottom__text-second">Наше приложение представляет экологические <br /> мероприятия, помогающие сохранить природу <br /> и улучшить экологию города</p>
          </div>
          <div className="bottom__third-text-container">
            <p className="bottom__header-text"><span className="bold">Не упускай</span> ни одной возможности!</p>
            <p className="bottom__text bottom__text-third">Мы поможем тебе найти исключительные события, основываясь <br /> на твоих предпочтениях</p>
          </div>
        </div>
        <div className="nothing">V.Sol</div>
      </main>
    </>
  )
}

export default HomePage