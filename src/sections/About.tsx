import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import BookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavacriptIcon from '@/assets/icons/square-js.svg';
import ReactIcon from '@/assets/icons/react.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import CSS3Icon from '@/assets/icons/css3.svg';
import mapImage from '@/assets/images/map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: 'Javascript',
    iconType: JavacriptIcon,
  },
  {
    title: 'HTML',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CSS3Icon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  {
    title: 'JS',
    iconType: JavacriptIcon,
  },
  {
    title: 'CSS',
    iconType: CSS3Icon,
  },
]
const hobbies = [
  {
    title: "Painting",
    emoji: '🎨',
    left: "5%",
    top: "5%"
  },
  {
    title: "Photography",
    emoji: '📷',
    left: "50%",
    top: "5%"
  },
  {
    title: "Hiking",
    emoji: '⛰',
    left: "35%",
    top: "40%"
  },
  {
    title: "Gaming",
    emoji: '🎮',
    left: "10%",
    top: "35%"
  },

  {
    title: "Music",
    emoji: '🎧',
    left: "70%",
    top: "45%"
  },
  {
    title: "Driving",
    emoji: '🚘',
    left: "5%",
    top: "65%"
  },
  {
    title: "Reading",
    emoji: '📖',
    left: "45%",
    top: "70%"
  },
]

export const AboutSection = () => {
  return (
    <div className="mt-8 py-20 mr-5 ml-5 lg:mr-20 lg:ml-20 lg:py-28 flex items-center justify-center">
      <div className="max-w-[1000px]">
        <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do and what inspires me" />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h-[240px] md:col-span-2 lg:col-span-1">
              <CardHeader title='My Reads' description="Explore the books shaping my perspective." />
              <div className="w-40 mx-auto mt-2 ">
                <Image src={BookImage} alt='book cover' />
              </div>
            </Card>
            <Card className="h-[240px] md:col-span-3 lg:col-span-2">
              <CardHeader title='My Toolbox' description="Exlore the technologies and tools I use to craft exceptional digital experiences." className="" />
              <ToolboxItems items={toolboxItems} className="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:20s]" />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8  lg:grid-cols-3">
            <Card className="h-[240px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title='Beyond the Code' description="Explore my interests and hobbies beyond digital world." className="py-6 px-6" />
              <div className='relative flex-1'>
                {hobbies.map(hobby => (
                  <div key={hobby.title} className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-200 to-sky-400 rounded-full py-1.5 absolute" style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}>
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[240px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt='map' className="h-full w-full object-conver"></Image>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-200 to-sky-400 after:content[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950">
                <Image src={smileMemoji} alt="smiling memo" className="size-20"></Image>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
};
