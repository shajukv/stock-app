import styled from '@emotion/styled'

export const DevListItem  = styled.div`
display: flex;
    min-height: 11vh;
    border: 1px solid rgb(25, 25, 26);
    border-bottom-style: none;
    margin: -2px 20px 10px 20px;
    padding: 10px 10px 10px 10px;;
    flex-direction: row;
    font-family: ui-monospace;
    font-size: 14px;
    color: slategrey;
`;

export const DevListItemRank  = styled.div`
width : 2%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

export const DevListItemLeft  = styled.div`
width : 30%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
`;

export const DevListItemPopular  = styled.div`
width : 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    span .repo{
        font-size: 11px;
    }
`;
export const DevListItemRight  = styled.div`
width : 18%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
`;


export const DevListItemRightCreditsTitle  = styled.div`
display: flex;
    align-items: center;
    justify-content: right;
    gap: 5px;
`;

export const DevListItemButton  = styled.button`
padding: 6px 16px;
    border-radius: 8px;
    border: 1px solid rgb(25, 25, 26);
    color:lightgray;
    background: rgb(25, 25, 26);
    span {
        font-family: ui-monospace;
    font-size: 14px;
    color: slategrey;
    }
`;

export const Avatar  = styled.img`
object-fit: cover;
border-radius:50%;
width: 40px;
height: 40px;
content: ${props => props.src ? `url(${props.src})`: ''}; 

`;

export const Profile  = styled.div`
display: inline-block;
align-content:space-around;
justify-items: right;
padding-left: 25px;
position:absolute;
padding-top: 6px;
content: ${props => props.src ? `url(${props.src})`: ''}; 
p{
    padding-top: 0px;
    margin-top: 1px;
}
span{
    color: blue;
}
`;

