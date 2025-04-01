import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Card from '@/components/Card'
import siteMetadata from '@/data/siteMetadata'
import { webProjectsData, gameProjectsData } from '@/data/projectsData'

const MAX_DISPLAY = 5

export default function Projects() {
  // Combine both project arrays
  const allProjects = [...webProjectsData, ...gameProjectsData]

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="dark:text-white-400 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {!allProjects.length && 'No projects found.'}
            {allProjects.slice(0, MAX_DISPLAY).map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                href={project.href}
              />
            ))}
          </div>
        </div>
      </div>
      {allProjects.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/projects"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All projects"
          >
            All Projects &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
