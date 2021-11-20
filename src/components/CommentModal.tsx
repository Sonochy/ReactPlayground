import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  // cssでスタイル定義ができる
  height: 250px;
  width: 350px;
  border: solid 1px black;
  border-radius: 24px;
  position: relative;
  /* display: flex; */
  margin-top: 200px;
  margin-left: 200px;
`;

const ModalTitle = styled.div`
  height: 30px;
  font-size: 18px;
  width: 100%;
  font-weight: bold;
  font-style: italic;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Border = styled.div`
  border-bottom: solid 2px black;
`;

interface Props {
  title: string;
}

export const CommentModal: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <Wrapper>
      <ModalTitle>{title}</ModalTitle>
      <Border />
      {/* <ModalTitle>{title}</ModalTitle> */}
    </Wrapper>
  );
};
