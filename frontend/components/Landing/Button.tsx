import styled, { css } from '../../utils'

const buttonStyles = {
  base: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 135px;
    height: 58px;
    border-radius: 10px;
    font-family: 'Gotham Rounded Medium';
    font-size: 1.25rem;
  `,
  login: css`
    color: ${({ theme }) => theme.malachite};
    background: white;
    border: 1px solid #00c100;
    box-shadow: 0 5px 8px 3px rgba(0, 0, 0, 0.1), inset 0 -2px 0 0 #eeeeee,
      inset 0 -6px 0 0 rgba(127, 127, 127, 0.25);
  `,
  signup: css`
    color: white;
    background: transparent;
    border: 1px dashed white;
`
}

const StyledButton = styled.button`
  ${buttonStyles.base}
  ${({ type }) => buttonStyles[type]}
`

interface ButtonProps {
  children?: string,
  text: string,
  type: string
}

export default ({ text, type }: ButtonProps) => <StyledButton type={type}>{text}</StyledButton>
