import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.4fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0 0;
  grid-template-areas:
    "Sidebar Main Main Main"
    "Sidebar Main Main Main"
    "Sidebar Main Main Main";
`

export const Main = styled.main`
  grid-area: Main;
`
