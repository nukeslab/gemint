import React from 'react';

function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className="container">
        <p style={{ textAlign: 'center', fontSize: '30px' }}>
            Loading...
          </p>
      </div>
  
    );
  };
}
export default WithListLoading;