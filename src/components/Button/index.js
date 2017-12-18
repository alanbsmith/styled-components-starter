import styled from 'styled-components';
import PropTypes from 'prop-types';
import { lighten, rem } from 'polished';

const Button = styled.button`
  background: ${props => props.theme.colors[props.bgColor]};
  border-radius: 2px;
  border: 1px solid transparent;
  color: ${props => props.theme.colors.chrome000};
  font-size: ${props => rem(props.theme.dimensions.baseFontSize)};
  line-height: ${props => rem(props.theme.dimensions.baseFontSize * 2)};
  margin: ${props => rem(props.theme.dimensions.baseGrid)};
  outline: none;
  padding: 0 ${props => rem(props.theme.dimensions.baseGrid)};
  transition: all 200ms ease;

  &:hover {
    background-color: ${props => lighten(0.08, props.theme.colors[props.bgColor])};
    box-shadow: 0 ${rem(8)} ${rem(8)} 0 ${props => props.theme.colors.shadow};
  }
`;

Button.propTypes = {
  bgColor: PropTypes.string,
};

Button.defaultProps = {
  bgColor: 'blue',
};

export default Button;
