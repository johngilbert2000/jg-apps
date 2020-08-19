import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const Page404: React.FunctionComponent = () => {
    return(
        <div className="Page404">
            <div className="content">
                <Fade>
                <h1><span>404</span> Page Not Found</h1>
                <p>You must be lost. This button will take you...
                   <Link to="/">
                        <button className="btn draw-border">Home</button>
                    </Link>
                </p>
                </Fade>
            </div>
        </div>
    );
}

export default Page404;