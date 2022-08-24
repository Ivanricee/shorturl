import styled from 'styled-components'

export const StyledHeader = styled.header`
  .header__logomenu {
    display: flex;
    justify-content: space-between;
    position: relative;
    svg {
      font-size: 2.5rem;
    }
    .header__menu {
      button {
        background: transparent;
        border: 0;
        color: ${p => p.theme.gray1};
        cursor: pointer;
      }
    }
    nav {
      display: none;
      position: absolute;
      inset-block-start: 4rem;
      inset-inline-end: 0.5rem;
      inset-inline-start: 0;
      padding: 1rem 2rem;
      padding-block-end: 2rem;
      background: ${p => p.theme.purple};
      border-radius: 0.7rem;
      button {
        inline-size: 100%;
        block-size: 3.5rem;
        font-size: 1.4rem;
        font-weight: 600;
      }
      ul {
        text-align: center;
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: 1.4rem;
        font-weight: 600;
        li {
          margin-block-start: 1.6rem;
          margin-block-end: 0.5rem;
          padding: 0.3rem 0;
          color: white;
          cursor: pointer;
          :hover {
            color: #b6abdf;
          }
          a {
            color: white;
            text-decoration: none;
            :hover {
              color: #b6abdf;
            }
          }
        }
        hr {
          margin-block-start: 1.5rem;
          border: 1px solid ${p => p.theme.purpleHr};
        }
      }
    }
  }
  .header__img {
    margin-inline-end: -1.5rem;
  }
  .header__content {
    margin: 2.5rem 0.5rem;
    text-align: center;
    margin-block-end: 5rem;
    h1 {
      font-size: 2.6rem;
      line-height: 3rem;
      margin: 0;
      color: ${p => p.theme.black};
    }
    p {
      color: ${p => p.theme.gray1};
      font-size: 1.1rem;
      margin-block-end: 2rem;
      font-weight: 500;
    }
  }
`
