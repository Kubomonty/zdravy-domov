import React from 'react'
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Maintext = styled.p`
  font-size: 1.5rem;
  margin: 1.5rem 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.6rem;
  color: #004d99;
  transition: 0.3s;
  &:hover {
    color: #3399ff;
    text-decoration: none;
  }
  &:active {
    color: #3399ff;
    text-decoration: none;
  }
`;

export const InfraLights = () => (
  <div>
    <Maintext>Na stránke intenzívne pracujeme<br/>V prípade záujmu o infražiariče nás <StyledLink to="/kontakty">neváhajte kontaktovať</StyledLink></Maintext>
  </div>
)