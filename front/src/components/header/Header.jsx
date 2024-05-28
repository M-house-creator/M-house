import { useEffect, useState } from 'react';
import Logo from '../../images/logo.png';
import './style.css';
import Menu from '../menu/Menu';
import lang from './lang.js';

export default function Header({ curPath }) {
    /**
     * Правила работы с хуками
     * 1. Нельзя писать вне компонента/класса
     * 2. useState и useEffect всегда должны быть вне условия и на самом верху
     */
    const [now, setNow] = useState(new Date()); //0 - значение, 1 - функция коллбек, которая меняет это значение

    useEffect(
        () => {
            //timer
            const interval = setInterval(() => setNow(new Date()), 1000);

            return () => {
                clearInterval(interval);
                console.log('clear time');
            }
        }, []
    )

    return (
        <>
        <header>
            <div className='LogoGroup'>
                <img src={Logo} width="79px" alt="" />
                <h1>Modern<br/>House</h1>
            </div>

            <Menu curPath={curPath} />

            {/* <ul>
                <li><a href='/work'>Принцип работы</a></li>
                <li><a href='/install'>Установка</a></li>
                <li><a href='/tarifs'>Тарифы</a></li>
                <li><a href='/customers'>Регистрация</a></li>
                <li><a href='/about'>О нас</a></li>
            </ul> */}

            <div className='timer'>{ now.toLocaleTimeString() }</div>
        </header>

        </>
    )
}
