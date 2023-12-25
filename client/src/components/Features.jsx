import { FaBook, FaPuzzlePiece, FaTrophy, FaChessKing   } from "react-icons/fa6";
import { FaTools, FaChalkboardTeacher  } from "react-icons/fa";

const features = [
  {
    name: 'Structured Lessons',
    description:
      'Curated curriculum and structured lessons for players of varying skill levels, from beginners to advanced players.',
    icon: FaBook,
  },
  {
    name: 'Interactive Training',
    description:
      'Live or Online video lessons, lectures, and tutorials conducted by experienced chess coaches and grandmasters.',
    icon: FaChalkboardTeacher ,
  },
  {
    name: 'Practice Exercises',
    description:
      'Access to a variety of practice exercises, puzzles, and tactics to enhance strategy and critical thinking.',
    icon: FaPuzzlePiece ,
  },
  {
    name: 'Tournaments and Competitions',
    description:
      ' Opportunities to participate in online or offline tournaments and competitions to apply learned skills and gain practical experience.',
    icon: FaTrophy ,
  },
  {
    name: 'Personalized Coaching',
    description:
      'One-on-one coaching sessions tailored to individual strengths and weaknesses, providing personalized guidance for improvement.',
    icon: FaChessKing ,
  },
  {
    name: 'Analysis Tools',
    description:
      'Access to chess analysis software or tools that help players analyze their games, identify mistakes, and improve their strategies.',
    icon: FaTools,
  },
]

export default function Features() {
  return (
    <div className="py-4 sm:py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-accent">Learn faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to become a master of Chess
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Evolve your strategy, and embark on the journey to becoming a chess master with our all-encompassing resources.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
  