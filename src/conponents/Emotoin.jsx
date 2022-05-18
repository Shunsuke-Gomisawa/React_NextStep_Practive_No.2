/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  // 各スタイルを定数として一度宣言
  // ここではノーマルなCSSとして記述
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  // ここではCSS in JSのように記述
  // （改行にコンマを使ったり、色の指定に””を使ったり、ハイフンをキャメルケースに直したり）
  const tittle = css({
    margin: 0,
    color: "#3d84a8"
  });

  // 以下で実行
  return (
    <div css={containerStyle}>
      <p css={tittle}>- Emotion -</p>
      <SButton>FIGHT!!</SButton>
    </div>
  );
};

// ここではEmotion/styledを使ってみる
const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
