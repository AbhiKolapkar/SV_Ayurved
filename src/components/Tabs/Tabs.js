import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import useActive from "../../hooks/useActive";
import Card from "../Card/Card";
import { SubTitle } from "../Title/Title";
import { Happy_Clients_Data } from "../../data/constant";
import CardSlider from "../Sliders/Card_Slider/CardSlider";
import {Title} from '../Title/Title'
import "./style.css";

const Tabs = ({ data }) => {
  const [category, setCategory] = useState(data[0].title);
  const [items, setItems] = useState([]);
  const { activeClass, handleActive } = useActive(0);

  const Categories = [...new Set(data.map((item) => item.title))];

  const handleCategory = (category, i) => {
    setCategory(category);
    handleActive(i);
  };

  const filteredProducts = data.filter((product) => {
    return product.title === category;
  });

  useEffect(() => {
    filteredProducts.map((products) => setItems(products.cards));
  }, [filteredProducts]);

  return (
    <>
      <ul className="tabs">
        {Categories.map((category, i) => (
          <li
            key={i}
            className={`tabs_item ${activeClass(i)}`}
            onClick={() => handleCategory(category, i)}
          >
            <Typography variant="subtitle1" color={"text.secondary"}>
              {category}
            </Typography>
          </li>
        ))}
      </ul>

      <Container maxWidth="xl" sx={{ mb: 5 }}>
        {filteredProducts.map((item) => (
          <SubTitle
            key={item.title}
            title={`SV- ${item.title}`}
            // subText={item.desc}
          />
        ))}
      </Container>

      <Container maxWidth="xl">
        {Happy_Clients_Data.category === category && (
          <div className='clientBox'>
            <Title title={"Our Happy Clients"} />

            <CardSlider cardData={Happy_Clients_Data.clients} slides={3} />
          </div>
        )}
      </Container>

      <div className="section cardSection">
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Tabs;
