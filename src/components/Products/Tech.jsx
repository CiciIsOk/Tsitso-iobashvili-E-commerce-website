import React, { Component } from "react";
import { Query } from "react-apollo";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { allProducts } from "./Products";
import "./Products.css";

export class Tech extends Component {
  render() {
    return (
      <Query query={allProducts}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Somethin went wrong</p>;

          return (
            <main>
              <h1 className="category-name">Tech Products</h1>
              <div className="wrapper">
                {/* Using .filter() method to filter products which are in Tech category and then mapping through this products */}
                {data.category.products
                  .filter((e) => e.category === "tech")
                  .map(({ id, name, gallery }) => (
                    <div className="product-card">
                      <img className="img-conteiner" src={gallery} />
                      <div class="mydivouter">
                        <Link to="/item/:id" class="mybuttonoverlap card-btn ">
                          <AiOutlineShoppingCart />
                        </Link>
                      </div>
                      <h3 kay={id}>{name}</h3>
                      <h3>500$</h3>
                    </div>
                  ))}
                ;
              </div>
            </main>
          );
        }}
      </Query>
    );
  }
}

export default Tech;
