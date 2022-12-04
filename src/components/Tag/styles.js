import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    padding: 5px 14px;
    border-radius: 5px;

    margin-right: 6px;
    color: ${({ theme }) => theme.COLORS.BACKGRAUND_700};
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
`;