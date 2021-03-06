import styled, { css } from 'styled-components';
import { shade }  from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 46px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;

    border: 2px solid #fff;

    ${props => props.hasError && css`
      border: 2px solid #c53030;
      border-right: 0;
    `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    border: 0;
    background: #04d361;
    border-radius: 0px 5px 5px 0;

    color: #fff;
    font-weight: bold;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
  display: block;

  a {
    background: #fff;
    width: 100%;
    padding: 24px;
    border-radius: 5px;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: translateX(5px);
    }

    & + a {
      margin-top: 15px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        margin: 0;
        padding: 0;
        font-size: 18px;
        color: #a8a8b3;

        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;


export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 15px;
`;
