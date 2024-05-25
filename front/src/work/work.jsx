import { useCallback, useEffect, useState } from "react";
import config from "../../params/config";
import "./style.css";

export default function work() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        header: [],
        body: [],
        sim: []
    });

    const fetchTable = useCallback(async () => {
        setLoading(true);
        const response = await fetch(config.api + "get/work/");
        const answer = await response.json();

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
                        data.body.map(item => (
                            <>
                            <span>{item.TITLE}</span>
                            </>
                        ))
                    }
                </div>

            }
            <div className="work">
            <hr className="line" />
          <p> Принцип работы умного дома основан на использовании современных технологий для автоматизации
и управления различными устройствами в доме. Центральная система умного дома обеспечивает связь
  между устройствами и пользователем, позволяя контролировать их через смартфон, планшет или голосовые команды.</p>
<p>
Умный дом может использовать различные типы датчиков (движения, дыма, влажности и т.д.),
 чтобы мониторить окружающую среду и реагировать на изменения. Например, при обнаружении движения в 
 помещении система может автоматически включить свет или отправить уведомление на смартфон.</p>
<p>
Кроме того, умный дом может быть настроен на выполнение определенных сценариев,
 которые упрощают повседневную жизнь. Например, утренний сценарий может включать подъем температуры в доме, включение кофеварки и открытие жалюзи.
 </p><p>
Главный принцип работы умного дома заключается в создании комфортной и безопасной обстановки для жильцов,
 а также в увеличении энергоэффективности и удобства управления домом.</p>
            </div>
        </>
    );
}

    