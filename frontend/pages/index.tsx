import * as React from 'react'

import styled from '../lib/styles/global-styles'

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  height: 80vh;
  padding: 2rem;
`

const StyledDiv = styled.div`
  width: 400px;
  height: 100px;
  background: ${({ theme }) => theme.malachite};
  border-radius: 10px;
`

const Home = () => {
  return (
    <StyledHome>
      <StyledDiv />
      <StyledDiv />
      <StyledDiv />
      <StyledDiv />
      <StyledDiv />
      <StyledDiv />
      <StyledDiv />
      <StyledDiv />
      <StyledDiv />
      <StyledDiv />
    </StyledHome>
  )
}

export default Home
