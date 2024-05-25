import { useCallback, useEffect, useState } from "react";
import config from "../../params/config";
import "./style.css";

export default function PageInstall() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        header: [],
        data: [],
        sim: []
    });

    const fetchTable = useCallback(async () => {
        setLoading(true);
        const response = await fetch(config.api + "get/install/");
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
            Первым этапом является выбор умных устройств, которые будут установлены в вашем доме - это может быть умное освещение,
 термостат, камеры видеонаблюдения, датчики безопасности и т.д.

После выбора устройств необходимо установить их в соответствии с инструкциями производителя.
 Затем подключить все устройства к центральной системе умного дома, которая может быть установлена на вашем смартфоне или планшете.

После подключения устройств настройте автоматизацию - задайте условия, при которых устройства будут выполнять
 определенные действия, например, включать свет при движении в помещении или устанавливать оптимальную температуру в доме.

И, конечно, не забудьте защитить ваш умный дом от взлома, установив надежные пароли и обновляя программное обеспечение устройств.

После выполнения всех этих шагов ваш умный дом будет готов к использованию 
и облегчит вашу жизнь, делая ее более комфортной и безопасной.
            </div>
        </>
    );
}
