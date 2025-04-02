export interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const webProjectsData: Project[] = [
  {
    title: 'A Search Engine',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

const gameProjectsData: Project[] = [
  {
    title: 'Eye of the Eclipse',
    description: `Survive the evil that appears during the solar eclipse. Don't get lost to the void. Made for the Godot Wild Jam #69`,
    imgSrc: '/static/images/games/m1dSo.jpg',
    href: 'https://itch.io/jam/godot-wild-jam-69/rate/2719016',
  },
  {
    title: "Don't give up",
    description: `Avoid hitting the police and keep going! Made for the ZenoJam`,
    imgSrc: '/static/images/games/BHcb2X.png',
    href: 'https://itch.io/jam/zeno-jam-8/rate/2688373',
  },
]

export { webProjectsData, gameProjectsData }
