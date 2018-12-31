import Router from 'next/router'
import styled, { css } from '../lib/styles/global-styles'

const buttonStyles = {
  base: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 58px;
    border-radius: 10px;
    font-family: 'Gotham Rounded Medium';
    font-size: 1rem;
  `,
  solid: css`
    color: ${({ theme }) => theme.malachite};
    background: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme.malachite};
    box-shadow: 0 5px 8px 3px rgba(0, 0, 0, 0.1), inset 0 -2px 0 0 #eee,
      inset 0 -6px 0 0 rgba(127, 127, 127, 0.25);
  `,
  dashed: css`
    color: ${({ theme }) => theme.white};
    background: transparent;
    border: 1px dashed ${({ theme }) => theme.white};
  `
}

const StyledButton = styled.button<{ variant?: string, size?: string }>`
  width: ${({ size }) => size ? size : '135px' };
  ${buttonStyles.base}
  ${({ variant }) => buttonStyles[variant]}
`

interface ButtonProps {
  disabled?: boolean
  size?: string
  text: string
  to?: string
  type?: string
  variant: string
}

const Button: React.SFC<ButtonProps> = ({ disabled, size, text, to, type, variant }) => (
  <StyledButton
    disabled={disabled}
    onClick={() => to && Router.push(to)}
    size={size}
    type={type}
    variant={variant}
  >
    {text}
  </StyledButton>
)

export default Button
