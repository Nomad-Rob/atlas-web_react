import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ textFirstCell, textSecondCell }) => (
  <tr>
    <td>{textFirstCell}</td>
    <td>{textSecondCell}</td>
  </tr>
);

CourseListRow.propTypes = {
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default CourseListRow;
