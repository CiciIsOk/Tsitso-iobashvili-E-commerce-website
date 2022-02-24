import React, { Component } from "react";
import "./Item.css";

//This page is not functional page, it is just a markup

export class Item extends Component {
  render() {
    return (
      <div className="item-wrapper">
        <div className="item-image">image</div>

        <div className="item-info">
          <h1>Item name</h1>
          <h4>Item atributes:</h4>
          <h3>Price: $$$$</h3>
          <button className="btn">Add To Cart</button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            harum soluta doloribus voluptas ipsum quidem, vero atque accusamus
            cupiditate, at blanditiis laudantium inventore, enim aperiam sed
            iusto nesciunt rerum. Aut?
          </p>
        </div>
      </div>
    );
  }
}

export default Item;
