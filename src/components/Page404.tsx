import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
import { StoreContext } from './storeContext';

const Page404: React.FunctionComponent = () => {

    const { lang } = useContext(StoreContext);
    

    return(
        <div className="Page404">
            <div className="content">
                <Fade cascade damping={0.2} duration={3000}>

        {(lang[0] === "english") && (
            <div>
                <h1><span>404</span> Page Not Found</h1>
                <p>You must be lost. This button will take you...
                    <div>
                <Link to="/">
                        <button className="btn draw-border">Home</button>
                    </Link>
                    </div>
                </p>
            </div>
        ) ||
        (lang[0]==="spanish") && (
            <div>
                <h1><span>404</span> Página No Encontrada</h1>
                <p>Usted parece perdido. Haz clic en este botón para volver a la página...
                    <div>
                <Link to="/">
                        <button className="btn draw-border">Inicio</button>
                    </Link>
                    </div>
                </p>
            </div>
        ) ||
        (lang[0] === "chinese_traditional") && (
            <div>
                <h1><span>404</span> 網頁未找到</h1>
                <p>您好像迷路了。下面的按鈕會帶您回去...
                    <div>
                <Link to="/">
                        <button className="btn draw-border">首頁</button>
                    </Link>
                    </div>
                </p>
            </div>
        ) || 
        (lang[0] === "chinese_simplified") && (
            <div>
                <h1><span>404</span> 网页未找到</h1>
                <p>您好像迷路了。下面的按钮会带您回去...
                    <div>
                <Link to="/">
                        <button className="btn draw-border">首页</button>
                    </Link>
                    </div>
                </p>
            </div>
        )}

                </Fade>
            </div>
        </div>
    );
}

export default Page404;


