import React from 'react';
import { Link } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';

const Page404: React.FunctionComponent = () => {
    return(
        <div className="Page404">
            <div className="content">
                <Fade cascade damping={0.2} duration={3000}>
                <h1><span>404</span> Page Not Found</h1>
                <p>You must be lost. This button will take you...
                    <div>
                   <Link to="/">
                        <button className="btn draw-border">Home</button>
                    </Link>
                    </div>
                </p>
                </Fade>
            </div>
        </div>
    );
}

export default Page404;