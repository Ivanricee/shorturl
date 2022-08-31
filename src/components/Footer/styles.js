import styled from 'styled-components'
import boost from '../../images/bg-boost-mobile.svg'
import boostDesk from '../../images/bg-boost-desktop.svg'

export const StyledFooter = styled.footer`
  text-align: center;
  margin-block-start: 4rem;
  margin-block-start: 5.5rem;

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
        inset-block-end: -3.2rem;
        block-size: 3.2rem;
        inline-size: 0.5rem;
        transform: translateX(-50%);
        background-color: ${p => p.theme.button};
      }

      .footer__cards-header {
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
    background-repeat: round;
    background-size: 100%;
    h2 {
      color: white;
      margin-block-end: 1rem;
    }
  }
  .footer__links {
    background-color: ${p => p.theme.purple2};
    margin: 0 -1.5rem;
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
    .footer__social {
      display: inline-flex;
      gap: 1.5rem;
      margin-block-start: 3rem;
      img {
        inline-size: 1.5rem;
        block-size: 1.5rem;
      }
    }
  }
  @media ${p => p.theme.breakPointsDevice.desktop} {
    margin-block-start: 4rem;
    .footer__presentation {
      margin-block-end: 3.5rem;
      p {
        font-size: 0.9rem;
        padding-inline-start: 5.5rem;
        padding-inline-end: 5.5rem;
      }
    }
    .footer__cards {
      display: flex;
      justify-content: center;
      align-items: start;
      gap: 1rem;

      & > section {
        flex: 1;
        text-align: left;
        padding: 1rem;
        padding-block-start: 2rem;
        min-block-size: 8rem;
        max-block-size: 10rem;
        .footer__cards-header {
          inline-size: 1.5rem;
          block-size: 1.5rem;
          inset-block-start: 0rem;
          inset-block-start: -3.5rem;
          transform: translateX(0);
          transform: translateY(50%);
          img {
            inline-size: 1.8rem;
            block-size: 1.8rem;
          }
        }
        :not(:last-child):before {
          inset-block-end: 5rem;
          inset-inline-end: -1rem;
          transform: translateX(0);
          block-size: 0.5rem;
          inline-size: 1rem;
        }
        h3 {
          font-size: 1rem;
          margin-inline-start: 0;
        }
        p {
          font-size: 0.7rem;
          line-height: 1rem;
        }
        :nth-child(2) {
          margin-block-start: 1.8rem;
          :before {
            inset-block-end: 6.8rem;
          }
        }
        :nth-child(3) {
          margin-block-start: 3.6rem;
        }
      }
    }
    .footer__boost {
      margin: -1rem -5rem 0 -5rem;
      padding: 2rem 1.5rem;
      background-image: url(${boostDesk});
    }
    .footer__links {
      display: flex;
      margin: 0 -5rem;
      padding-inline-start: 5rem;
      padding-inline-end: 5rem;
      text-align: left;
      p {
        font-size: 0.7rem;
        line-height: 1rem;
      }
      .footer__links-header {
        inline-size: 10rem;
        h2 {
          text-align: left;
          font-size: 1.5rem;
        }
      }
      .footer__link_main {
        flex: 1;
        display: flex;
        justify-content: space-evenly;
        section {
          min-inline-size: 6rem;
          max-inline-size: 22rem;
          div {
            h3 {
              font-size: 0.8rem;
              margin-block-start: 0rem;
            }
            inline-size: max-content;
          }
        }
      }
      .footer__social {
        align-self: start;
        justify-content: center;
        text-align: center;
        margin-block-start: 0rem;
        img {
          inline-size: 1.2rem;
          block-size: 1.2rem;
        }
      }
    }
  }
  @media ${p => p.theme.breakPointsDevice.desktopL} {
    .footer__presentation {
      p {
        font-size: 1rem;
        padding-inline-start: 7.5rem;
        padding-inline-end: 7.5rem;
      }
    }
    .footer__boost {
      margin: -1rem -10rem 0 -10rem;
    }
    .footer__links {
      padding-inline-start: 10rem;
      padding-inline-end: 10rem;
      margin-inline-start: -10rem;
      margin-inline-end: -10rem;
    }
    .footer__cards {
      display: flex;
      justify-content: center;
      align-items: start;
      gap: 1rem;
      & > section {
        .footer__card-main {
          p {
            font-size: 0.85rem;
            line-height: 1.1rem;
          }
        }
      }
    }
  }
  @media ${p => p.theme.breakPointsDevice.large} {
    .footer__presentation {
      p {
        font-size: 1rem;
      }
    }
    .footer__cards {
      & > section {
        .footer__card-main {
          p {
            font-size: 0.8rem;
            line-height: 1.1rem;
          }
        }
      }
    }
  }
`
