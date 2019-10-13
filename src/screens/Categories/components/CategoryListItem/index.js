import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import './styles.scss';

const CategoryListItem = ({ category, classNames }) => {
  return (
    <div className={classnames({
      "category-list-item": true,
      [classNames]: classNames !== undefined
    })}>
      <div className="category-list-item-content">
        <span className="category-list-item-content__name">
          {category.name}
        </span>
      </div>
    </div>
  );
};

CategoryListItem.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sublevels: PropTypes.array
  }),
  classNames: PropTypes.string
};

export default CategoryListItem;