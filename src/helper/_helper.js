import * as c from '../constant/title'
export const getTitle = (activeTab) => {
  return activeTab && activeTab === 'repos' ? c.REPO_SUB_TITLE : c.DEV_SUB_TITLE
}
