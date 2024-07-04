import { styled } from 'styled-components';

export const SeeImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    img {
        width: 100%;
        border-radius: 5px;
    }
    button {
        margin-bottom: 20px;
    }
    a {
        align-self: flex-start;
    }
`;
