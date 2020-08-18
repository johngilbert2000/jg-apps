import React from 'react'
// import Background from '../images/about_me.jpg';

interface Props {
    bg: string;
    img?: string;
}

const Block: React.FunctionComponent<Props> = (props) => {
    const blockStyle = {
        backgroundColor: props.bg,
        color: 'white',
        // padding: 40,
        paddingRight: 150,
        height: 300,

        // background: (props.img) ? `url(${require(props.img)})` : props.bg, // 'url(' + props.img + ')'
        // backgroundImage: `url(require(${props.img}))`,
        // backgroundImage: `url(${Background})`,
        backgroundImage: (props.img) ? `url(${require('../images/navbar_drip.jpeg')})` : '',
    }

    return (
        <div style={blockStyle}>
            <div className="Block-right">
                <p>Hello Hello Hello Hello Hello HelloHello HelloHello Hello Hello Hello Hello Hello Hello HelloHello HelloHello Hello Hello Hello Hello Hello Hello HelloHello HelloHello Hello</p>
                <p>{props.bg}</p>
                <p>{props.img}</p>
            </div>
        </div>
    )
}

export default Block