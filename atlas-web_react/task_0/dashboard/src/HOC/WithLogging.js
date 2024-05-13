import React from 'react';

/**
 * Higher-Order Component that logs component lifecycle events.
 * @param {React.ComponentType} WrappedComponent - The component to wrap.
 */
function WithLogging(WrappedComponent) {
  class WithLogging extends React.Component {
    componentDidMount() {
      // Log when the component mounts
      console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} is mounted`);
    }

    componentWillUnmount() {
      // Log when the component is about to unmount
      console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  // Modify the displayName for easier debugging
  WithLogging.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithLogging;
}

export default WithLogging;
