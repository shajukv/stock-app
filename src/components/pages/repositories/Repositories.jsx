import { useQuery } from 'react-query'
import { GoRepo, GoStar, GoRepoForked, GoHeart } from 'react-icons/go/'
import loaderImage from '../../../images/load.svg'
import { API_URL } from '../../../constant/apiUrls'
import { fetchData } from '../../../api/_dataService'
import * as Styled from './repositories.styles'
import * as CommonStyled from '../../../style/common.styles'

const apiUrl = 'REPOS' in API_URL && API_URL.REPOS

const Repositories = () => {
  const { isLoading, error, data, isFetching } = useQuery('repos', () =>
    fetchData(apiUrl)
  )
  console.log(data)
  if (isLoading) {
    return (
      <CommonStyled.Loader>
        <img src={loaderImage} width="30" height="30" alt="" />
      </CommonStyled.Loader>
    )
  }
  if (error) return <h2> An error has occurred: {error.message} </h2>

  return (
    <>
      {data && data?.data.map((repo) => {
        return (
          <Styled.RepoListItem key={repo?.rank}>
            <Styled.RepoListItemLeft>
              <div className="title">
                <GoRepo size={12} />{' '}
                <a
                  href={repo?.url}
                >{`${repo?.username} / ${repo?.repositoryName}`}</a>
              </div>
              <Styled.RepoListItemLeftDesc>
                <p>{repo.description}</p>
              </Styled.RepoListItemLeftDesc>
              <Styled.RepoListItemLeftDetails>
                <span
                  style={{
                    color: repo.languageColor ? repo.languageColor : '#fff',
                  }}
                >
                  {repo?.language}
                </span>
                <span>
                  <GoStar size={12} /> {repo?.totalStars}
                </span>
                <span>
                  <GoRepoForked size={12} /> {repo?.forks}
                </span>
                <span>Built by </span>
                <span>
                  {repo &&
                    'builtBy' in repo &&
                    repo.builtBy.map((dev, index) => {
                      return (
                        <Styled.RepoAvatar
                          src={dev.avatar}
                          key={index}
                          alt={dev.username}
                        />
                      )
                    })}
                </span>
              </Styled.RepoListItemLeftDetails>
            </Styled.RepoListItemLeft>
            <Styled.RepoListItemRight>
              <Styled.RepoListItemRightCreditTitle>
                <Styled.RepoListItemButton>
                  <span>
                    <GoHeart size={12} />
                  </span>{' '}
                  <span>{'Sponsor'}</span>
                </Styled.RepoListItemButton>
                <Styled.RepoListItemButton>
                  <span>
                    <GoStar size={12} />
                  </span>{' '}
                  <span>{'Star'}</span>
                </Styled.RepoListItemButton>
              </Styled.RepoListItemRightCreditTitle>

              <Styled.RepoListItemRightCredits>
                <span>
                  <GoStar size={12} />
                </span>{' '}
                <span>{repo.starsSince} Stars since a day</span>
              </Styled.RepoListItemRightCredits>
            </Styled.RepoListItemRight>
          </Styled.RepoListItem>
        )
      })}
    </>
  )
}
export default Repositories
