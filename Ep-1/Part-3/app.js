const heading=React.createElement("div",
{id:"parent"},
[React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I am a H1 tag"),
    React.createElement("h1",{},"I am a H2 tag")
]),
React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"I am a H1 tag"),
    React.createElement("h1",{},"I am a H2 tag")
])]
    
    );
console.log(heading)

const root=ReactDOM.createRoot(document.getElementById("id"))
root.render(heading);
