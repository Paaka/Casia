import React from 'react';
import { connect } from 'react-redux';

import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import Form from '../components/organisms/Form/Form';
import GoBack from '../components/molecules/GoBack/GoBack';
import CreatingMenu from '../components/molecules/CreatingMenu/CreatingMenu';
const CreateItemView = props => {
  return (
    <MainTemplate>
      <h1>You Choose: {props.creationItem}</h1>
      <Form data={props.creationItem} />
      <CreatingMenu />
      <GoBack />
    </MainTemplate>
  );
};

const mapStateToProps = ({ creationItem }) => ({ creationItem });

export default connect(mapStateToProps)(CreateItemView);
