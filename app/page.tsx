import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { webProjectsData, gameProjectsData } from '@/data/projectsData'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  // const projects = [...webProjectsData, ...gameProjectsData]
  return (
    <>
      <Main posts={posts} projects={webProjectsData} games={gameProjectsData} />
    </>
  )
}
