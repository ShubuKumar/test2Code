import React from "react";
import "./App.css";
import Card from "./components/Card";
import Greeting from "./components/Greeting";

function App() {
    return (
        <>
            <div className="wrapper">
              <Card>
                <img  className="image" src="http://cdn.shopify.com/s/files/1/0121/8376/5088/articles/one.jpg?v=1577337592"></img>
                <Greeting content ="White traditional long dress" />
            </Card>
            <Card>
              <img className="image" src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011719423-Blue-Blue-1000011719423_03-2100.jpg"></img>
                <Greeting content="Long sleeve denim jacket"  />
            </Card>
            <Card>
             <img className="image" src="https://rukminim1.flixcart.com/image/612/612/xif0q/sandal/y/w/a/8-8554660brown-8-hush-puppies-brown-original-imaghxzggkzcffna.jpeg?q=70"></img>
                <Greeting content="Hush Pupples"  />
            </Card>
            <Card>
              <img className="image" src="https://i.pinimg.com/originals/9d/99/ac/9d99ace2a8c38fe9ea301f8404fb2223.png"></img>
                <Greeting content ="Athens skirt"  />
            </Card>
            </div>
        </>
    );
}

export default App;