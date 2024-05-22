import { useCallback, useEffect, useState } from "react";
import config from "../../params/config";
import "./style.css";

export default function PageInstall() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        header: [],
        body: [],
        sim: []
    });

    const fetchTable = useCallback(async () => {
        setLoading(true);
        const response = await fetch(config.api + "get/install/");
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
        </>
    );
}
