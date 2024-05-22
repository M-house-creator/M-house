import { useCallback, useEffect, useState } from "react";
import config from "../../params/config";
import './style.css';

export default function Index() 
{
    
    
    const [loading, setLoading] = useState(false);    

    const fetchTable = useCallback(async () => {
        setLoading(true);
        const response = await fetch(config.api + 'get/collection/list/');
        const answer = await response.json();
        
        let labels = [];
        let numbers = [];
        let indexes = [];

        answer.forEach(item => {
            labels.push(item.TITLE.split('.')[1]);
            numbers.push(item.DOCUMENTS);
            indexes.push(item.INDEXES);
        });

        

        

        setLoading(false);
    }, []);

    useEffect(
        () => {
            fetchTable()
        }, [fetchTable]
    );

    

    


    return (
        <>
          
          
          <div className="index-page-content">
          <img src="./images/black tarif.png" alt="1" className="jpg"></img>   
          <hr className="line"/>
          <img src="./images/smart home.png" alt="1" className="jpg"></img>   
<p>Одним из преимуществ умного дома является возможность централизованного управления всеми устройствами через мобильное приложение или
 голосового помощника. 
 Например, вы можете включить свет или настроить температуру в доме,
  просто говоря команду своему голосовому помощнику или нажав кнопку на своем смартфоне.

Умные дома также могут быть оснащены системами безопасности, которые мониторят окружающую среду и действия внутри и вокруг дома.
 Это может включать в себя видеонаблюдение, датчики движения, датчики дыма и угарного газа
  а также уведомления на мобильные устройства в случае обнаружения чего-либо подозрительного.
</p>
  <hr className="line" />
<p>Умные дома также способствуют энергосбережению,
 позволяя оптимизировать использование энергии в доме.
 Например, система умного дома может автоматически регулировать температуру
  в зависимости от присутствия людей в доме или настроек,
  что помогает снизить энергозатраты.</p>
 
<img src="./images/light.jpeg" alt="1" className="light"></img>
<p>Кроме того, умные дома могут быть связаны с другими устройствами и сервисами, 
такими как умные телевизоры, звуковые системы, домашние кинотеатры и онлайн-сервисы для стриминга музыки и фильмов.</p>
<hr className="line2"/>
<p>В целом, умный дом предлагает множество преимуществ, таких как повышение комфорта,
 удобства, безопасности и энергоэффективности.
 Он представляет собой инновационное решение для современного образа жизни,
упрощая повседневные задачи и делая нашу жизнь более умной и удобной.</p>

</div>
        </>
    )
}