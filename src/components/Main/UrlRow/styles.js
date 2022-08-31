import styled from 'styled-components'

export const StyledCopyButton = styled.section`
  button {
    background: ${p => p.isCopied && p.theme.purple};
    :hover {
      background: ${p => p.isCopied && p.theme.btnHoverP};
    }
    :active {
      background: ${p => p.isCopied && p.theme.btnActiveP};
    }
  }
`
