import styled, {css} from "styled-components";

export const DisplayXl = styled.h1`
    ${({theme}) => css`
        font-family: 'Rammetto One',serif;
        font-size: ${theme['display-xl']};
        font-weight: 400;
    `}
`

export const DisplayLg = styled.h1`
    ${({theme}) => css`
        font-family: 'Rammetto One',serif;
        font-size: ${theme['display-lg']};
        font-weight: 400;
    `}
`

export const DisplayMd = styled.h1`
    ${({theme}) => css`
        font-family: 'Rammetto One',serif;
        font-size: ${theme['display-md']};
        font-weight: 400;
    `}
`

export const TitleHg = styled.h1`
    ${({theme}) => css`
        font-family: 'Rajdhani',serif;
        font-size: ${theme['title-hg']};
        font-weight: bold;
    `}
`

export const TitleLg = styled.h1`
    ${({theme}) => css`
        font-family: 'Rajdhani',serif;
        font-size: ${theme['title-lg']};
        font-weight: bold;
    `}
`

export const ErrorMessage = styled.span`
  display: block;
  margin-top: 0.35rem;
  font-size: ${props => props.theme['text-xs']};
  color: ${props => props.theme['error-light']};
`;