import React from 'react';

const Categories = (props) => {
    return (
      <div>
        { props.categories.map((category, index) => {
          return (<h3 key={index}>{category}</h3>)
        }) }
      </div>
    );
}

export default Categories;