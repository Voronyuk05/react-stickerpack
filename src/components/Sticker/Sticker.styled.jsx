import styled from 'styled-components';

export const StickerItem = styled.li`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    list-style: none;
    border-radius: 30px;
    border: 1px solid black;
    padding: 5px;
    transition: 0.3s;
    &:active {
        transition:0.1s;
        background: black;
        color: white;
    }
`