import styled from 'styled-components'
import boost from '../../images/bg-boost-mobile.svg'

export const StyledFooter = styled.footer`
  text-align: center;
  margin-block-start: 4rem;

  h2 {
    font-size: 1.75rem;
    color: ${p => p.theme.black};
    margin: 0;
  }
  p {
    color: ${p => p.theme.gray1};
    line-height: 1.8rem;
    font-weight: 500;
    font-size: 1.03rem;
  }
  .footer__presentation {
    margin-block-start: 5.5rem;
    margin-block-end: 6rem;
  }
  .footer__cards {
    & > section {
      position: relative;
      background: white;
      margin-block-end: 6rem;
      padding: 1.7rem;
      padding-block-end: 2rem;
      border-radius: 0.3rem;
      padding-block-start: 4.5rem;
      :not(:last-child):before {
        position: absolute;
        content: '';
        inset-inline-start: 48.2%;
        inset-inline-end: 48.2%;
        block-size: 3rem;
        inset-block-end: -3rem;
        background-color: ${p => p.theme.button};
      }

      header {
        display: inline-flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        background: ${p => p.theme.purple};
        inline-size: 4rem;
        block-size: 4rem;
        padding: 1rem;
        border-radius: 50%;
        inset-block-start: -3rem;
        transform: translateX(-50%);
        img {
          inline-size: 3rem;
          block-size: 3rem;
        }
      }
    }
    p {
      font-size: 0.98rem;
      margin: 0;
    }
    h3 {
      font-size: 1.4rem;
      margin: 0.8rem;
      color: ${p => p.theme.black};
    }
  }
  .footer__boost {
    margin-block-start: -1rem;
    margin: -1rem -1.5rem 0 -1.5rem;
    padding: 5.5rem 1.5rem;
    background-color: ${p => p.theme.purple};
    background-image: url(${boost});
    h2 {
      color: white;
      margin-block-end: 1rem;
    }
  }
  .footer__links {
    background-color: ${p => p.theme.purple2};
    margin: 0 -1.5rem -1.5rem;
    padding-block-start: 2.5rem;
    padding-block-end: 2.5rem;
    color: white;
    h2 {
      color: white;
      font-size: 2rem;
      margin-block-end: 2rem;
    }
    p {
      font-size: 0.9rem;
      line-height: 1.2rem;
    }
    footer {
      display: inline-flex;
      gap: 1.5rem;
      margin-block-start: 3rem;
      img {
        inline-size: 1.5rem;
        block-size: 1.5rem;
      }
    }
  }
`
