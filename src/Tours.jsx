  import React from 'react';


  const Excursions = () => {
    return (
      <div className="excursions">
        <div className="uzim">
      <p className='www1'>Ваши</p>  <br />   <p className='www'>  экскурсии</p>  
        </div>

        <header className="hero11">
          <h1 className='ty'>НАШИ ЭКСКУРСИИ</h1>  
        </header> <br /> <br /> <br /> <br />

        <div className="search-panel">
          <div className="filters">
            <select>
              <option>Абхазия</option>
            </select>
            <input type="date" defaultValue="2022-07-16" />
            <select>
              <option>5 человек</option>
            </select>
            <button className="show-btn">Показать</button>
          </div>

          <div className="category-tabs">
            <a href="#" className="active">АВТОБУСНЫЙ ТУР</a>
            <a href="#">ДЖИПИНГ</a>
            <a href="#">ЯХТИНГ</a>
            <a href="#">КАНЬОНИНГ</a>
          </div>
        </div>

        <div className="main">
          <aside className="sidebar">
            <h3>Фильтры</h3>

            <div className="filter-block">
              <span>Стоимость</span>
              <input type="number" defaultValue="1400" /> - <input type="number" defaultValue="4000" />
            </div>

            <div className="filter-block">
              <span>Количество человек</span>
              <div className="people-buttons">
                {[...Array(10)].map((_, i) => (
                  <button key={i}>{i + 1} чел.</button>
                ))}
                <button>Больше 10 чел.</button>
              </div>
            </div>

            <div className="filter-block">
              <span>Место</span>
              <label><input type="radio" name="place" defaultChecked /> Абхазия</label>
              <label><input type="radio" name="place" /> Красная поляна</label>
              <label><input type="radio" name="place" /> Сочи</label>
              <label><input type="radio" name="place" /> Адлер</label>
            </div>
          </aside>

          <section className="excursion-list">
            {[1, 2, 3].map((_, i) => (
              <div className="excursion-card" key={i}>
                <div className="image" />
                <div className="details">
                  <span className="tag">Автобусный тур</span>
                  <h2>Золотое кольцо Абхазии (из Адлера)</h2>
                  <div className="info">
                    <span>🧍‍♂️ 1 618 ₽</span>
                    <span>👶 1 412 ₽</span>
                    <span>⏱ 2.5 часа</span>
                  </div>
                  <p>
                    Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест)...
                  </p>
                  <button className="details-btn">Подробнее</button>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className="oxirgi"> 
    <div className="img12">

    </div>
    <div className="yob">
  <div className="pol">
    <div className="bir">
    <p> Главная</p>
  <p>Экскурсии</p>
  <p>Личный кабинет</p>
  </div>
  <div className="iki">
    <p> 📱+7 964 944 18 74</p>
  <p> ☎️+7 918 919 98 28</p>
  <p> 📲 Телеграм-бот PeroTravel</p>
  </div>
  <div className="uch">
    <p>📧 office@perotravel.ru</p>
  </div>
  </div>
    </div>
  </div>
      </div>
      
    );
  };

  export default Excursions;
