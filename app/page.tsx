import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { webProjectsData, gameProjectsData } from '@/data/projectsData'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import siteMetadata from '@/data/siteMetadata'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const projects = [...webProjectsData, ...gameProjectsData]
  return (
    <>
      <Main posts={posts} />

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="dark:text-white-400 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p> */}
        </div>
        {projects.map((project) => (
          <div key={project?.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </>
  )
  // return <Main posts={posts} />
}
