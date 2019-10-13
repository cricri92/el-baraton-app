import React from 'react';
import PropTypes from 'prop-types';

import CategoryListItem from "screens/Categories/components/CategoryListItem";

import './styles.scss';

const CategoriesList = ({ categoriesList }) => {
  return (
    <div className="row justify-content-between categories-list">
      {categoriesList.map(category => (
        <CategoryListItem key={category.id}
                          category={category}
                          classNames={"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"} />
      ))}
    </div>
  );
};

CategoriesList.propTypes = {
  categoriesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sublevels: PropTypes.array
  })).isRequired,
  classNames: PropTypes.string
};

export default CategoriesList;