import React from "react";
import {
	Container,
	StyledLabel,
	Hidden,
	Slider,
} from "./styles";

const Toggle = ({ soundOn, toggleSound }) => {

	return (
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
	)
}

export default Toggle;