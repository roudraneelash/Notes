Context Api

1- Create the context

import {createContext} from 'react';
const BookContext= createContext();

-- BookContext: it has got 2 parts/sub component (Provider,Consumer)

-- Provider: Component used to specifu what data we want to share
-- Consumer: Component used to get access to data.(Not often used)

2- Consume the Data

Application Context..
import { useContext } from 'react'

function App() {
const [count, setCount] = useState(0);
const valueToShare = {
count: count,
increment: () => {
setCount((prev) => prev + 1);
},
};
return (
<Context.Provider value={valueToShare}>
<CartComponent />
<ButtonComponent />
</Context.Provider>
);
}

import { createContext } from 'react';

const Context = createContext();

export default Context;

import { useContext } from 'react';
import Context from './Context';

const CartComponent = () => {
const { count } = useContext(Context);
return (

<div>
<h2>Cart Component : {count}</h2>
</div>
);
};

export default CartComponent;

----------------- Custom Context

import { createContext, useState } from "react";

const CartContext = createContext();

function Provider({ children }) {
const [count, setCount] = useState(0);

const valueToShare = {
count: count,
add: () => {
setCount((prev) => prev + 1);
},
};

return (
<CartContext.Provider value={valueToShare}>{children}</CartContext.Provider>
);
}
export { Provider };
export default CartContext;

-- wrap the app/index with provider
