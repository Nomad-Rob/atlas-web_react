import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headerRowSpan2: {
    textAlign: 'center',
  },
  secondHeaderRow: {
    borderTop: '2.5px solid #e0e0e0',
    borderBottom: '2.5px solid #e0e0e0',
  },
  secondHeaderRowFirstCell: {
    textAlign: 'left',
    width: '70%',
  },
  secondHeaderRowSecondCell: {
    textAlign: 'left',
    width: '30%',
  },
  bodyRowCell: {
    textAlign: 'left',
  },
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  header: {
    backgroundColor: '#deb5b545',
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={css(styles.header)}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr className={css(styles.header)}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={css(styles.row)}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;
