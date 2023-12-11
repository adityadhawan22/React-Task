import styled from "styled-components";

type Props = {
  title: string;
  name: string;
};

const PostsWrapper = styled.div`
  margin: 12px;
`;

export function Post({ title, name }: Props) {
  return (
    <PostsWrapper>
      <span>{title}</span>
      <br />
      <span>By: {name}</span>
    </PostsWrapper>
  );
}
