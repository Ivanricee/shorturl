import styled from 'styled-components'

export const StyledButton = styled.div`
  button {
    border: 0px;
    cursor: pointer;
    border-radius: 2rem;
    inline-size: 12.5rem;
    block-size: 3.7rem;
    background: ${p => p.theme.button};
    color: white;
    font-size: 1.4rem;
    :hover {
      background: ${p => p.theme.btnHover};
    }
    :active {
      background: ${p => p.theme.btnActive};
    }
  }
`
