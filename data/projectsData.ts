export interface Project {
  title: string
  description: string
  slug: string
  href?: string
  imgSrc?: string
}

const webProjectsData: Project[] = [
  {
    title: 'Youtube Live Music Player',
    description: `A simple web app that plays a video, and music on repeat.`,
    imgSrc: '/static/images/apps/youtube-live.jpg',
    href: 'https://github.com/BeardedBry/music-player',
    slug: 'youtube-live-music-player',
  },
  {
    title: 'Tailwind Shimmer Generator',
    description: `A simple web app that generates a shimmer effect for component loading, using Tailwind CSS.`,
    imgSrc: '/static/images/apps/shimmer.jpg',
    href: '',
    slug: 'shimmer-generator',
  },
]

const gameProjectsData: Project[] = [
  {
    title: 'Eye of the Eclipse',
    description: `Survive the evil that appears during the solar eclipse. Don't get lost to the void. Made for the Godot Wild Jam #69`,
    imgSrc: '/static/images/games/m1dSo.jpg',
    href: 'https://itch.io/jam/godot-wild-jam-69/rate/2719016',
    slug: 'eye-of-the-eclipse',
  },
  {
    title: "Don't give up",
    description: `Avoid hitting the police and keep going! Made for the ZenoJam`,
    imgSrc: '/static/images/games/BHcb2X.png',
    href: 'https://itch.io/jam/zeno-jam-8/rate/2688373',
    slug: 'dont-give-up',
  },
]

export { webProjectsData, gameProjectsData }
