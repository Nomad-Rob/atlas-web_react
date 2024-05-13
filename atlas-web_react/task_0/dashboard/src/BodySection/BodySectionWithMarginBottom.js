import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

// Define styles using Aphrodite
const styles = StyleSheet.create({
  bodySectionMargin: {
    marginBottom: '20px',
  },
});

function BodySectionWithMarginBottom(props) {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
}

// Reuse the propTypes from BodySection for consistency
BodySectionWithMarginBottom.propTypes = {
  ...BodySection.propTypes
};

export default BodySectionWithMarginBottom;
