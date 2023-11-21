import React from "react";
import Card from "../Card/Index";
import "./Index.css";

const Cards = () => {
  return (
    <div className="cards">
      <Card
        title="Card 1 Head"
        description="Mehemmed Desc"
        buttonText="search"
        btnBckColor="red"
      />
      <Card title="Card 2 Head" description="Zumrud Desc" buttonText="filter"  btnBckColor="green" />
      <Card title="Card 3 Head" description="Sehla Desc" buttonText="submit"  btnBckColor="hotpink" />
      <Card title="Card 4 Head" description="Samir Desc" buttonText="click"  btnBckColor="aqua"/>
    </div>
  );
};

export default Cards;
