import React from "react";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import img1 from "./350.jpg";
import img2 from "./66.jpg";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };


const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_51pxxe4',     
    'template_69evx9rnpm',  
    e.target,
    'KOuurIT8S5oRMXtNm'      
  ).then(
    (result) => {
      console.log(result.text);
      alert("Заявка отправлена!");
    },
    (error) => {
      console.log(error.text);
      alert("Произошла ошибка!");
    }
  );

  e.target.reset(); 
};

  return (
    <>
  
      
      <div className="tt">
      <section className="hero">
        <div className="overlay">
          <h1 className="top-text">ПУТЕШЕСТВУЙ</h1>
          <p className="middle-text">вместе с</p>
          <h1 className="bottom-text">PERO TRAVEL</h1>

          <a href="#excursions" className="hero-btn">К экскурсиям →</a>
        </div>
              <div className="admin">
        <div className="img15"></div>
        <div className="img16"></div>
        <div className="img17"></div>
      </div>
      </section>
        <div className="kol">
          <div className="img"></div>
          <div className="img1"></div>
          <div className="img2"></div>
        </div>
      </div> <br /> <br />  <br />  <br /> <br /> <br />  <br />  <br /> <br /> <br />  <br />  <br /> <br /> <br />  <br />  <br /> <br /> <br />  <br />  <br /> <br /> <br />  <br />  <br /> <br /> <br />  <br />  <br /> <br /> <br />  <br />  <br /> <br /> <br />  <br />  <br /> <br /> <br />  <br />  <br /> <br />


      <section className="popular-section">
        <div className="popular-header">
          <h2>Популярные экскурсии</h2>
          <a href="#">Смотреть все</a>
        </div>

        <Slider {...settings} className="popular-slider">
          <div className="tour-card">

            <div className="text">
              <p className="type">Автобусный тур</p>
              <h3>Обзорная по Сочи (из Адлера)</h3>
              <div className="info">🕒 6 часов &nbsp; 💰 618 ₽</div>
              <p className="desc">
                Экскурсия начнется с подъёма на гору Большой Ахун – это высшая точка на побережье Сочи...
              </p>
              <button>Подробнее</button>
            </div>
          </div>

          <div className="tour-card">
       
            <div className="text">
              <p className="type">Конный тур</p>
              <h3>Конные прогулки</h3>
              <div className="info">🕒 1,5 часа &nbsp; 💰 1 809 ₽</div>
              <p className="desc">
                Прогулки проходят в Лазурной долине. С долины открывается вид на море, горы и лес...
              </p>
              <button>Подробнее</button>
            </div>
          </div>

          <div className="tour-card">
            <div className="text">
        
              <p className="type">Квадротур</p> 
              <h3>Пасть дракона</h3>
              <div className="info">🕒 2,5 часа &nbsp; 💰 3 515 ₽</div>
              <p className="desc">
                Маршрут проходит по реке Мзымта вдоль скал и леса к водопаду "Пасть дракона"...
              </p>
              <button>Подробнее</button>
            </div>
          </div>
        </Slider>
      </section> <br /> <br /> <br /> <br /> <br />

     
<div className="ulo">
  <div className="katta">
О нас <br /> <br />
PeroTravel - Первый онлайн-сервис по бронированию  <br />
экскурсий без очередей и операторов. Lorem ipsum dolor <br />
 sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />
   veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <br />
   ex ea commodo consequat. <br /> <br /> <br /> <br />

Sed ut perspiciatis unde omnis iste natus error <br />
 sit voluptatem accusantium doloremque laudantium,<br />
  totam rem aperiam, eaque ipsa quae ab illo inventore <br />
  veritatis et quasi architecto beatae vitae dicta sunt explicabo. <br />
       
</div>
</div>

    <div className="qisim3">
      
    </div> <br /> <br /> <br /> <br />


   <br /> <br /> <br />
   <h1 className="rr">Виды экскурсий</h1> <br /> <br />
      <div className="div2">
<div className="uu">
   <div className="ff1">
    <div className="div-rasm"></div>
    <p className="rr ">Автобусный тур</p> <br />
   <p>
    Один из самых насыщенных впечатлениями, доступных по  <br />
     цене и популярных видов отдыха. Во время одной поездки <br />
      можно посмотреть достопримечательности сразу нескольких <br />
       городов, причем обойдется это едва ли не в разы дешевле <br />
        классического экскурсионного тура с ночевками в отелях. <br />


   </p> <br /> <br /> <br />
 </div>
 <div className="ff2">
     <div className="div-rasm1"></div>
    <p className="rr ">Яхтинг</p> <br />
   <p>
    Один из самых насыщенных впечатлениями, доступных по  <br />
     цене и популярных видов отдыха. Во время одной поездки <br />
      можно посмотреть достопримечательности сразу нескольких <br />
       городов, причем обойдется это едва ли не в разы дешевле <br />
        классического экскурсионного тура с ночевками в отелях. <br />


   </p> <br /> <br /> <br />
 </div>
</div>
<div className="bb">
   <div className="ff3">
       <div className="div-rasm2"></div>
    <p className="rr ">Джиппинг</p> <br />
   <p>
    Один из самых насыщенных впечатлениями, доступных по  <br />
     цене и популярных видов отдыха. Во время одной поездки <br />
      можно посмотреть достопримечательности сразу нескольких <br />
       городов, причем обойдется это едва ли не в разы дешевле <br />
        классического экскурсионного тура с ночевками в отелях. <br />


   </p> <br /> <br /> <br />
 </div>
   <div className="ff3">
       <div className="div-rasm3"></div>
    <p className="rr ">Каньонинг</p> <br />
   <p>
    Один из самых насыщенных впечатлениями, доступных по  <br />
     цене и популярных видов отдыха. Во время одной поездки <br />
      можно посмотреть достопримечательности сразу нескольких <br />
       городов, причем обойдется это едва ли не в разы дешевле <br />
        классического экскурсионного тура с ночевками в отелях. <br />


   </p> <br /> <br /> <br />
 </div>
 
</div>
      </div> 
        <div className="div_button-block">
          <button>К экскурсиям </button>
        </div>
    <h1 className="tr">  Галерея</h1> <br />  
       
    <div className="gallery">
      <div className="box box1"></div>
      <div className="box box2"></div>
      <div className="box box3"></div>
      <div className="box box4"></div>
      <div className="box box5"></div>
      <div className="box box6"></div>
      <div className="box box7"></div>

    </div> <br /> <br /> <br /> <br />

<footer className="footer">
  <div className="questions">
    <div className="questions_text">
      <h2>Остались вопросы?</h2>
      <p>Оставь заявку и мы ответим</p>
    </div>
    <form className="questions_inputs" onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Имя" required />
      <input type="tel" name="user_phone" placeholder="Телефон" required />
      <input type="email" name="user_email" placeholder="Почта" required />
      <button type="submit">Оставить заявку</button>
    </form>
  </div>
</footer>
 <br /> <br /> <br /> <br />
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
    </>
  );
}

export default Home;
