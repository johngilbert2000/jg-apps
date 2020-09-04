import React, { useState } from 'react';

// const [lang, setLang] = useState("english");
// const LangContext = React.createContext({lang, setLang});

// const LangProvider = LangContext.Provider;
// const LangConsumer = LangContext.Consumer;

// export { LangProvider, LangConsumer } 



    // makecontext
    // const StoreContext = React.createContext(contexts);
    // const StoreConsumer = StoreContext.Consumer;
    // const StoreProvider = StoreContext.Provider;
    
    // return { StoreConsumer, StoreProvider };
// const { StoreConsumer, StoreProvider } = ContextMaker();

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