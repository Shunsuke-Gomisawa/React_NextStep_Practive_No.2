import { CssModules } from "./conponents/CssModules";
import { Emotion } from "./conponents/Emotoin";
import { InlineStyle } from "./conponents/InlineStyle";
import { StyledComponents } from "./conponents/StyledComponents";
import { StyledJsx } from "./conponents/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      {/* ↓　howeverなどの疑似クラスは適応不可 */}
      <CssModules />
      <StyledJsx />
      {/* ↓　howeverなどの疑似クラスは適応不可 */}
      <StyledComponents />
      <Emotion />
    </div>
  );
}
