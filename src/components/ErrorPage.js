import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function ErrorPage(props) {
  return (
    <React.Fragment>
      <p><em>I don't know how you got here, but you shouldn't be!</em></p>
      <Button variant='info' type='button' size='lg' block onClick={()=>props.onLinkClick('index')}>Back To the Index!</Button>
    </React.Fragment>
  )
}

ErrorPage.propTypes = {
  onLinkClick: PropTypes.func.isRequired
}

export default ErrorPage;