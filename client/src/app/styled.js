import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1.6fr 1fr 1fr;
  grid-template-rows: 0.2fr 1.8fr 1fr;
  gap: 0 0;
  grid-template-areas:
    "Header Header Header Header"
    "Sidebar Main Main Main"
    "Sidebar Main Main Main";
}`