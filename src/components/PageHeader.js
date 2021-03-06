import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageTitle from './PageTitle';

const StyledPageHeader = styled.div`
  margin-left: 180px;
  margin-top: 1rem;
  padding-left: 2rem;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 180px);
`;

const PageHeader = props => {
  const { title } = props;
  return (
    <StyledPageHeader>
      <div>
        <PageTitle title={title} />
        {props.children}
      </div>
    </StyledPageHeader>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

PageHeader.defaultProps = {
  title: '',
  children: ''
};

export default PageHeader;
