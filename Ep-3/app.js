import React from "react";
import * as ReactDOM from 'react-dom/client';

//React Element - use camelCase
const heading=React.createElement(
    "h1",
    { id:"heading"},
    "Namaste react "
);

// JSX code -> React Element (using Babel)
const jsxheading=(
    
<h1 id="division" className="route">
    Namaste React by JSX
     </h1>
     );

// React Functional component - always capitalize the component name
const Jsxheading2 = () => (
    <div id="react">
    {jsxheading}
<h1 id="division" className="route">
    Namaste React by Functional component1 
    </h1>
    </div>);

// React Functional component
const Jsxheading1 = () => ( 
    <div id="container">
        {jsxheading}
        {Jsxheading2()}
 <h1 id="division" className="route">Namaste React by Functional component2 </h1>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading); // rendering react element
root.render(<Jsxheading1/>); // rendering functional component