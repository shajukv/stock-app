import { useQuery } from 'react-query'
import axios from 'axios'
import { GoRepo, GoStar, GoFlame, GoHeart } from 'react-icons/go/'
import loaderImage from '../../../images/load.svg'
import { API_URL } from '../../../constant/apiUrls'
import { fetchData } from '../../../api/_dataService'
import * as Styled from './developers.styles'
import * as CommonStyled from '../../../style/common.styles'

const apiUrl = 'DEVS' in API_URL && API_URL.DEVS
const Developers = () => {
  const { isLoading, error, data } = useQuery('devs', () => fetchData(apiUrl))
  console.log(data)
  if (isLoading) {
    return (
      <CommonStyled.Loader>
        <img src={loaderImage} width="30" height="30" alt="" />
      </CommonStyled.Loader>
    )
  }
  if (error) return <h2> `An error has occurred: ${error.message}` </h2>

  return (
    <>
      {data && data?.data.map((dev) => {
        return (
          <Styled.DevListItem key={dev.rank}>
            <Styled.DevListItemRank>
              <span>{dev?.rank}</span>
            </Styled.DevListItemRank>
            <Styled.DevListItemLeft>
              <div className="title">
                <Styled.Avatar src={dev?.avatar} />
                <Styled.Profile>
                  <span>
                    {' '}
                    <a href={dev?.url}>{dev?.name}</a>
                  </span>
                  <p> {dev.username}</p>
                </Styled.Profile>
              </div>
            </Styled.DevListItemLeft>
            <Styled.DevListItemPopular>
              <span>
                <GoFlame size={12} /> <span className="repo">POPULAR REPO</span>
              </span>
              <span>
                {
                  dev?.popularRepository?.repositoryName &&
                  <GoRepo size={12} />
                }
                {' '}
                <a href={dev?.popularRepository?.url}>
                  {dev?.popularRepository?.repositoryName}
                </a>
              </span>
              <span>{dev?.popularRepository?.description}</span>
            </Styled.DevListItemPopular>
            <Styled.DevListItemRight>
              <Styled.DevListItemRightCreditsTitle>
                <Styled.DevListItemButton>
                  <span>
                    <GoHeart size={12} />
                  </span>{' '}
                  <span>{'Sponsor'}</span>
                </Styled.DevListItemButton>
                <Styled.DevListItemButton>
                  <span></span> <span>{'Follow'}</span>
                </Styled.DevListItemButton>
              </Styled.DevListItemRightCreditsTitle>
            </Styled.DevListItemRight>
          </Styled.DevListItem>
        )
      })}
    </>
  )
}

export default Developers
