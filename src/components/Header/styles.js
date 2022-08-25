import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: white;
  padding: 3rem 1.5rem 6rem 1.5rem;
  margin-inline-start: -1.5rem;
  margin-inline-end: -1.5rem;
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
    overflow: hidden;
    svg {
      width: 138%;
    }
  }
  .header__content {
    margin: 2.5rem 0rem;
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

  @media ${p => p.theme.breakPointsDevice.desktop} {
    padding-inline-start: 5rem;
    padding-inline-end: 1rem;
    margin-inline-start: -5rem;
    margin-inline-end: -5rem;
    display: flex;
    flex-wrap: wrap;
    .header__logomenu {
      order: 1;
      inline-size: 100%;
      svg {
        width: 175px;
      }
    }
    .header__img {
      order: 3;
      inline-size: 50%;
      margin-inline-start: 2.5rem;
      svg {
        width: 370px;
      }
    }
    .header__content {
      order: 2;
      inline-size: 46%;
      text-align: left;
      p {
        font-size: 0.8rem;
        margin-block-end: 1rem;
      }
    }
  }
  @media ${p => p.theme.breakPointsDevice.desktopL} {
    padding-inline-start: 10rem;
    padding-inline-end: 5rem;
    margin-inline-start: -10rem;
    margin-inline-end: -10rem;
    .header__content {
      p {
        font-size: 1.2rem;
      }
    }
  }
  @media ${p => p.theme.breakPointsDevice.desktopL} {
    .header__content {
      p {
        font-size: 1rem;
      }
    }
  }
`
