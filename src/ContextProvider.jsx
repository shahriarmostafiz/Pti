import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
export const MyContext = createContext(null)
const ContextProvider = ({ children }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
            .then(res => {
                console.log(res.data.Items);
                setData(res.data.Items)
                // console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const contextValue = { data, setData }

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
};

export default ContextProvider;