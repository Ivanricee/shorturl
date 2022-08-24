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
    block-size: 3.2rem;
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
    padding: 1.7rem;
    border-radius: 0.7rem;
    background-position-y: -1rem;

    padding: 1.7rem;
    border-radius: 0.7rem;
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
      display: block;
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
`
