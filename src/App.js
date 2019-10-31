import React, { useState, useLayoutEffect } from 'react';
import Cat from './Cat';
import { fetchCatCategories } from './utils/catAPIRequest';
import './App.css';
import Select from 'react-select';

const getCategories = async () => {
    const response = await fetchCatCategories();

    return response.map(({ id, name }) => ({ value: id, label: name }));
};

function App() {
    const [ selectedCategory, setSelectedCategory ] = useState({});
    const [ categories, setCategories ] = useState([]);

    useLayoutEffect(() => {
        getCategories().then(result => setCategories(result));
    }, []);

    return (
        <div className="App">
            <Select
                className="test"
                options={ categories }
                onChange = { setSelectedCategory }
            />
            <header className="App-header">
                <Cat category={ selectedCategory } />
            </header>
        </div>
    );
}

export default App;
