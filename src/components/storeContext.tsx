import React, { useState } from 'react';

const obj = {
    lang: [] as any,
}

export const StoreContext = React.createContext(obj);
export const StoreConsumer = StoreContext.Consumer;

const StoreProvider: React.FunctionComponent = (props) => {
    const [lang, setLang] = useState("english");
    
    const contexts = {
        lang: [lang, setLang],
    }

    return <StoreContext.Provider value={contexts}>
        {props.children}
        </StoreContext.Provider>
}

export default StoreProvider;