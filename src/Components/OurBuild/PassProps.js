import { Header } from 'antd/lib/layout/layout';
import React from 'react'
import styled from 'styled-components'

const PassProps = () => {
  return (
    <Holder>
      <Container>
      <Image/>
      <Content>
        <HeaderContent>Attribute commits with collaborators easily</HeaderContent>
        <SubContent>
          Quickly add co-authors to your commit.Great for pairing and excellent for sending a little love/credit to that special someone who helped fix that gnarly bug of yours.See the attribution on the history page,undo an accidental attribution, and <span>
            see the co-authors on github.com
          </span>
        </SubContent>
      </Content>
    </Container>
    </Holder>
  );
};

export default PassProps;

const Holder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`;
const Content = styled.div`
  width: 500px;
`;
const HeaderContent = styled.div`
  font-size: 30px;
`;
const SubContent = styled.div`
  line-height: 1.5;
  color: lightgray;
  font-size: 18px;

  span {
    color: #8f55b3;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;