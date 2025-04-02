import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { special_elite } from '@/data/fonts'
import Image from 'next/image'
import { Project } from '@/data/projectsData'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'
const MAX_DISPLAY = 2

export default function Home({
  posts,
  projects,
  games,
}: {
  posts: CoreContent<Blog>[]
  projects: Project[]
  games: Project[]
}) {
  return (
    <>
      <div className="max-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-6">
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-300">
            {siteMetadata.description}
          </p>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1
                className={`dark:text-white-400 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-8 md:text-3xl md:leading-8 ${special_elite.className}`}
              >
                Projects
              </h1>
              {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p> */}
            </div>
            <div className="flex max-w-full flex-wrap justify-baseline gap-6 py-4">
              {projects.map((project) => (
                <div key={project?.title} className="group relative w-[250px] flex-shrink-0">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={project?.imgSrc || ''}
                      alt={project.title}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-all duration-300 group-hover:brightness-50 group-hover:grayscale"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <h3 className="mb-2 text-lg font-bold text-white">{project.title}</h3>
                      <p className="text-center text-base text-white">
                        {project.description.slice(0, 100)}...
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h1
            className={`dark:text-white-400 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 [text-shadow:_0_0_30px_rgb(var(--tw-color-primary-500))] sm:text-3xl sm:leading-8 md:text-3xl md:leading-8 ${special_elite.className}`}
          >
            Latest Posts
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-4">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-3 xl:col-span-3">
                      <div className="space-y-4">
                        <div>
                          <h2 className="text-xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="dark:text-white-400 text-gray-900"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
