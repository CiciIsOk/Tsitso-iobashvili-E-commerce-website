import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Products.css";

//Fetching Data using the Apollo Query Component

//Extracting query into it's own constant to use it later in Clothes.jsx and Tech.jsx
export const allProducts = gql`
  {
    category {
      products {
        id
        name
        gallery
        category
        description
      }
    }
  }
`;

export class Products extends Component {
  render() {
    return (
      <Query query={allProducts}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Somethin went wrong</p>;

          return (
            <main>
              <h1 className="category-name">All Products</h1>
              <div className="wrapper">
                {data.category.products.map(({ id, name, gallery }) => (
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

export default Products;
