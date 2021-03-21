import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Styles = styled.div`
  .container {
    margin-top: 56px;
    padding: 1.5rem 4rem 0 4rem;
    height: calc(100vh - 56px);
    background-color: rgba(255, 255, 255, 0.75);
  }
`

export const Layout = (props) => (
  <Styles>
    <Container>
      {props.children}
    </Container>
  </Styles>
)