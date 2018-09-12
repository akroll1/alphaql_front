import React from "react";
import { render } from "react-dom";
import {GetBooks,CreateBook} from './Books'

const App = () => (
        <div>
            <h1>My first Apollo app 🚀</h1>
            <GetBooks/>
            <CreateBook/>
        </div>
);

export default App
