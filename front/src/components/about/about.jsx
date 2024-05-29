import { useCallback, useEffect, useState } from "react";
import config from "../../params/config";
import "./style.css";

export default function About() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        header: [],
        data: [],
        sim: []
    });

    const fetchTable = useCallback(async () => {
        setLoading(true);
        const response = await fetch(config.api + "get/about/");
        const answer = await response.json();

        console.log(answer)
        setData(answer);

        setLoading(false);
    }, []);

    useEffect(() => {
        fetchTable();
    }, [fetchTable]);

    return (
        <>
            <h1></h1>
            {
                !loading && <div>
                    {
                        data.data.map(item => (
                            <>
                            <span>{item.TITLE}</span>
                            </>
                        ))
                    }
                </div>

            }
            <div className="install">
            <img
                    src="./images/info company.png"
                    alt="1"
                    className="png"
                ></img>
            Первым этапом является выбор умных устройств, которые 
            
       <p> будут установлены в вашем доме 
        - это может быть умное освещение,
 термостат, камеры видеонаблюдения,
  датчики безопасности и т.д.
  </p>
  
<hr className="line2" />
                

 


<hr className="line2" />
<p>
  Наша компания M-House Занимается установкой умных домов м
 В Краснодарском Крае чуть меньше года 
 Мы хотим и помогаем нашим клиентам подобрать для них нужный им умный дом и помогаем им
  установить для них эту замечательную умную систему 
  которая очень сильно помогает им в их замечательное жизни
  </p>
  <p>Наша Компания на данном моменте занимает 0 место по установке домов к Краснодарском Крае
  Наша компания очень отзывчивая и дружелюбная.Наша компания всегда стараеться помочь нашим клиентам
  Мы всегда можем ответить на ваш вопрос в Telegram (t.me/ModernHouse23)
  Мы стараемся ответить как можно быстрее ведь нам важны ваши вопросы
  Наша компания работает с понедельника по пятницу с 8:00 до 21:00</p>
  <hr className="line2" />
 <p> Мы всегда стараемся сделать  все заказы как можно скорее что бы вам было приятней
Мы Всегда Рады Получать От вас отзывы Даже если негативные так как когда мы их читаем 
 мы стараемся понять где находится наша ошибка и стараемся ее исправить как можно скорее
 Ведь вы нам нужны.
 </p>
 <p>
 У Нас уже есть 52 положительных отзывов
 Не смотря на то что у нас всешго 1 офис 2 сотрудника мы очень быстро спровляемся со своей работой 
 </p>
 <hr className="line2" />
            </div>
        </>
    );
}
