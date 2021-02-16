import React from "react";
import {
  Container,
  StyledLabel,
  Hidden,
  Slider,
} from "./styles";

interface Props {
  soundOn: boolean,
  toggleSound: (checked: boolean) => void
}

const Toggle: React.FC<Props> = ({ soundOn, toggleSound }) => (
  <Container>
    🔉
    <StyledLabel soundOn={soundOn}>
      <Hidden
        type="checkbox"
        onChange={e => toggleSound(e.target.checked)}
      />
      <Slider soundOn={soundOn} />
    </StyledLabel>
    🔇
  </Container>
);

export default Toggle;