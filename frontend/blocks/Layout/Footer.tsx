import styled from '../../lib'

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Footer: React.SFC = (): JSX.Element => (
  <StyledFooter>
    <h3>footer</h3>
  </StyledFooter>
)

export default Footer
