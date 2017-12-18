import styled from "styled-components";
import { rem } from "polished";

const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: ${props => rem(props.theme.dimensions.baseGrid)};
`;

export default ContentWrapper;
