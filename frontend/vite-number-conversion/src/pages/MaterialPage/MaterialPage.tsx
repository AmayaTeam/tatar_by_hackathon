// import React from 'react';
import Header from '../../components/header/Header';
import './MaterialPage.css';
import { Link } from "react-router-dom";

const MaterialPage: React.FC = () => {
    return (
        <div className="container">
            <Header />
            <div className="barsik">
                <img src="./src/assets/barsik.png" alt="Barsik" />
            </div>
            <div className="material-container">
                <div className="content">
                    <p>
                        А а Ә ә Б б В в Г г Д д Е е Ё ё Ж ж Җ җ З з И и Й й К к Л л М м Н н ң О о Ө ө П п Р р С с Т т У у Ү ү Ф ф Х х Һ һ Ц ц Ч ч Ш ш Щ щ ъ Ы ы ь Э э Ю ю Я я <br/>
                        Произношение шести специфических букв татарского алфавита, конечно же, лучше отрабатывать под руководством опытного преподавателя. Но если Вы усвоите их приблизительное произношение при помощи указанных советов и нижеследующих упражнений, это не станет препятствием для изучения языка.<br/>[ә] = [æ] – этот звук иначе можно обозначить как [’’а], то есть очень мягкий [а]. Он близок к русскому [’а] в словах ‘сядь’, ‘глянь’, ‘ряд’. При произнесении [’’а] опустите кончик языка к нижним зубам, и Вы получите звук [æ]. Кстати, он есть в английском языке: black, hat – [blæk], [hæt].<br/>[ү] = [ü] – мягкий и более огубленный [’у]. Близкий к нему звук встречается в русских словах 'тюк', 'кювет', 'лютня'. Произнесите эти слова, придав [’у] еще большее огубление (сверните губы в трубочку), и Вы примерно получите искомый звук.<br/>[ө] = [ә:°] – этот гласный звук представляет для русскоязычного читателя наибольшую трудность.<br/>
                        Добро пожаловать! — Рэхи́м итеге́з!<br/>
                        С приездом! — Килуе́н белэн!<br/>
                        Рад с вами познакомиться! — Сезнен белэ́н танышырга́ шат!<br/>
                        Где вы остановились? — Сез ка́йда калдыгы́з?<br/>
                        Надолго ли вы приехали? — Сез монда́ күпме́ булдыгыз́?<br/>
                        Передайте привет вашей семье — Гаилэгезгэ́ сэля́м тапшырыгы́з<br/>
                        Я гражданин России — Мин Росси́я граждани́ны<br/>
                        Где ближайшая автобусная остановка? — Ин йакы́н авто́бус тукталышы́ ка́йда?<br/>
                        Какой автобус идет в аэропорт? — Аэропо́ртка кадэ́р ка́йсы афтобус бара́?<br/>
                        Часто ли́ ходят автобусы? — Афто́буслар йыш йори́?<br/>
                        Когда будет первый автобус? — Бэренще́ афтобус ка́йщан булача́к?<br/>
                        Когда будет последний автобус? — Сонго́ афто́бус ка́йщан булача́к?<br/>
                        Есть ли свободные места? — Момки́н урынна́р бармы́?<br/>
                        Вызовите, пожалуйста, такси — Такси́ чакырыгы́з эле́<br/>
                        Сколько стоит проезд? — Юл хакы́ купме́?<br/>
                        Такси! Вы свободны? — Такси́! Сез бушмы́?<br/>
                        Куда вам надо ехать? — Сезгэ́ кая́ барырга́ кирэ́к?<br/>
                        Мне нужно … — Мина́ ... барырга́ кирэ́к<br/>
                        Я иностранец и не знаю города — Мин чит ил кешесэ́ эм шэхэрне́ белми́м<br/>
                        Сколько стоит номер в сутки? — Но́мер бер суткага́ ничэ́ сум тора́?
                    </p>
                </div>
                <div className="button-next-div">
                    <Link to="/course">
                        <button type="button" className="button-next">Done</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MaterialPage;
