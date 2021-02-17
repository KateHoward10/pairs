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
    <span role="img" aria-label="Sound on">🔉</span>
    <StyledLabel soundOn={soundOn}>
      <Hidden
        type="checkbox"
        onChange={e => toggleSound(e.target.checked)}
      />
      <Slider soundOn={soundOn} />
    </StyledLabel>
    <span role="img" aria-label="Sound off">🔇</span>
  </Container>
);

export default Toggle;