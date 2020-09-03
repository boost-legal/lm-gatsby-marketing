import styled from 'styled-components';

import parrot from '../../assets/images/parrot.gif';

const Parrot = styled.span`
  background-image: url(${parrot});
  background-size: contain;
  width: 16px;
  height: 16px;
  display: inline-block;
  margin-left: 5px;
  margin-right: 3px;
`;

export default Parrot;
