import styled from 'styled-components'
import short from '../../images/bg-shorten-mobile.svg'

export const StyledMain = styled.main`
  color: white;
  display: block;
  input {
    box-sizing: border-box;
    inline-size: 100%;
  }
  button {
    border-radius: 0.5rem;
    block-size: 3rem;
    font-size: 1.1rem;
    font-weight: 600;
    inline-size: 100%;
  }
  .form__input {
    background: ${p => p.theme.purple};
    background-image: url(${short});
    background-repeat: no-repeat;
    background-position-x: right;
    background-size: 76%;
    background-position-y: -1rem;
    padding: 1.4rem;
    border-radius: 0.7rem;
    margin-block-start: -6rem;
    input {
      color: ${p => p.theme.red};
      border-radius: 0.25rem;
      padding: 0.8rem;
      font-size: 1rem;
      font-weight: 600;
      border: 0;
      .active {
        border: 3px solid ${p => p.theme.red};
      }
    }
    small {
      visibility: ${p => (p.errorVisibility ? 'visible' : 'hidden')};
      block-size: auto;
      display: block;
      font-size: 0.75rem;
      color: ${p => p.theme.red};
      margin-block-end: 1rem;
      margin-block-start: 0.25rem;
      font-style: italic;
    }
  }
  .form__result {
    background: white;
    margin-block-start: 1.5rem;
    border-radius: 0.4rem;
    padding: 1rem;
    p {
      color: ${p => p.theme.button};
      font-size: 1rem;
      font-weight: 500;
    }
    .result__url p {
      color: ${p => p.theme.black};
      margin: 0;
      margin-block-end: 1rem;
    }
    hr {
      border: 1px solid ${p => p.theme.bg};
      margin: 0 -1rem;
    }
    button {
      block-size: 2.8rem;
      //background-color: ${p => p.theme.purple};
    }
  }
  @media ${p => p.theme.breakPointsDevice.desktop} {
    .form__input {
      margin-block-start: -3.5rem;
      form {
        display: flex;
        gap: 1rem;
        div:nth-child(1) {
          flex: 1;
          small {
            margin-block-end: -1rem;
          }
        }
        div:nth-child(2) {
          inline-size: 8rem;
          button {
            block-size: 2.8rem;
            font-size: 1rem;
          }
        }
      }
    }
    .form__result {
      display: flex;
      padding: 0rem 0.7rem 0rem 0.7rem;
      margin-block-start: 1rem;
      .result__url {
        flex: 1;
        display: flex;
        align-items: center;
        p {
          margin: 0;
          font-size: 0.8rem;
        }
      }
      .result__btn-url {
        display: flex;
        gap: 1rem;
        justify-content: right;
        align-items: center;
        p {
          font-size: 0.8rem;
        }
        button {
          inline-size: 6rem;
          block-size: 2rem;
          font-size: 0.8rem;
        }
      }
      hr {
        display: none;
      }
    }
  }
  @media ${p => p.theme.breakPointsDevice.desktop} {
    .form__result {
      .result__url {
        p {
          font-size: 1rem;
        }
      }
      .result__btn-url {
        p {
          font-size: 1rem;
        }
        button {
          font-size: 1rem;
        }
      }
    }
  }
  @media ${p => p.theme.breakPointsDevice.large} {
    .form__result {
      .result__url {
        p {
          font-size: 1rem;
        }
      }
      .result__btn-url {
        p {
          font-size: 1rem;
        }
        button {
          font-size: 1rem;
        }
      }
    }
  }
`
