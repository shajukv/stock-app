import styled from '@emotion/styled'

export const RepoListItem = styled.div`
  display: flex;
  min-height: 16vh;
  border: 1px solid rgb(25, 25, 26);
  border-bottom-style: none;
  margin: -2px 20px 0px 20px;
  padding: 10px 10px 0px 10px;
`

export const RepoListItemLeft = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
export const RepoListItemRight = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
`

export const RepoListItemLeftDesc = styled.div`
  font-family: ui-monospace;
  font-size: 14px;
  color: slategrey;
`
export const RepoListItemLeftDetails = styled.div`
  font-family: ui-monospace;
  font-size: 13px;
  display: flex;
  justify-content: left;
  gap: 15px;
  margin-top: 6px;
  margin-bottom: 6px;
`

export const RepoListItemRightCreditTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 5px;
`
export const RepoListItemRightCredits = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: right;
  span {
    font-family: ui-monospace;
    font-size: 14px;
    color: slategrey;
  }
`

export const RepoListItemButton = styled.button`
  padding: 6px 16px;
  border-radius: 8px;
  border: 1px solid rgb(25, 25, 26);
  background: rgb(25, 25, 26);
  span {
    font-family: ui-monospace;
    font-size: 14px;
    color: slategrey;
  }
`

export const RepoAvatar = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  content: ${(props) => (props.src ? `url(${props.src})` : '')};
`
