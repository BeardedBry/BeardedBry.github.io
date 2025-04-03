import { Project, webProjectsData } from '@/data/projectsData'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  console.log(webProjectsData)

  return webProjectsData.map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    href: post.href,
    imgSrc: post.imgSrc,
  }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const project = webProjectsData.find((project) => project.slug === slug)
  if (!project) {
    return notFound()
  }

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="text-white-400 flex h-screen flex-col items-center justify-center">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.href}>{project.href}</a>
      <img src={project.imgSrc} alt={project.title} />
    </div>
  )
}
