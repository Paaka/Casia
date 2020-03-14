import React from 'react';
import { connect } from 'react-redux';

import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import Form from '../components/organisms/Form/Form';

const CreateItemView = props => {
  return (
    <MainTemplate>
      <h1>You Choose: {props.creationItem}</h1>
      <Form data={props.creationItem} />
    </MainTemplate>
  );
};

const mapStateToProps = ({ creationItem }) => ({ creationItem });

export default connect(mapStateToProps)(CreateItemView);
