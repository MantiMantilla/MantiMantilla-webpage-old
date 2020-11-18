import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link
          href="https://github.com/MantiMantilla"
          rel="noreferrer noopener"
          target="_blank"
        >
          GitHub
        </Styled.Link>
	<Styled.Link
	  href="https://twitter.com/MantiMantilla"
	  rel="noreferrer noopener"
	  target="_blank"
	>
          Twitter
        </Styled.Link>
        
	<Styled.Link
	  href="https://www.linkedin.com/in/alejandro-mantilla-49183b195/"
	  rel="noreferrer noopener"
	  target="_blank"
	>
          LinkedIn
        </Styled.Link>
        
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
