import React from "react";
import ReactDom from "react-dom/client";

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm and h2 tag")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")
    ])
]);

console.log(parent);
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(parent);