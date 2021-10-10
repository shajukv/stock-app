import { useQuery } from 'react-query'
import axios from 'axios'
import { GoRepo, GoStar, GoFlame, GoHeart } from 'react-icons/go/'
import loaderImage from '../../images/load.svg'
import { API_URL } from '../../constant/apiUrls'
import { fetchData } from '../../api/_dataService'

const apiUrl = 'DEVS' in API_URL && API_URL.DEVS
const Developers = () => {
  const { isLoading, error, data } = useQuery('devs', () => fetchData(apiUrl))
  console.log(data)
  if (isLoading) {
    return (
      <div className="loader">
        <img src={loaderImage} width="30" height="30" className="loader-img" />
      </div>
    )
  }
  if (error) return <h2> `An error has occurred: ${error.message}` </h2>

  return (
    <>
      {data?.data.map((dev) => {
        return (
          <div key={dev.rank} className="dev-list-item desc">
            <div className="left">
              <div className="title">
                <img src={dev.avatar} className="avatar" />
                <div className="profile">
                  <span className="pname">{dev.name}</span>
                  <p className="username"> {dev.username}</p>
                </div>
              </div>
            </div>
            <div className="popular">
              <span>
                <GoFlame size={12} />
                POPULAR REPO
              </span>
              <span>
                <GoRepo size={12} />
                <a href="#">{dev.popularRepository?.repositoryName}</a>
              </span>
              <span>{dev.popularRepository?.description}</span>
            </div>
            <div className="right">
              <div className="repo-credits-title">
                <button className="btn desc">
                  <span>
                    <GoHeart size={12} />
                  </span>{' '}
                  <span>{'Sponsor'}</span>
                </button>
                <button className="btn desc">
                  <span>
                    <GoStar size={12} />
                  </span>{' '}
                  <span>{'Star'}</span>
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Developers
