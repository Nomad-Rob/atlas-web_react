import React from 'react';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';
import BodySection from './BodySection';

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
