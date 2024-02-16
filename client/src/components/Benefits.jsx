import { FaBrain, FaBoltLightning, FaRegHourglassHalf, FaScaleBalanced } from "react-icons/fa6";
import IMAGES from "../images/Images";

const features = [
  {
    name: 'Cognitive skills.',
    description:
      'the mental abilities enabling us to process information, think, learn, and solve problems effectively.',
    icon: FaBrain,
  },
  {
    name: 'Critical Thinking.',
    description: 'The disciplined and analytical approach to evaluating information, ideas to form reasoned judgments or decisions.',
    icon: FaBoltLightning,
  },
  {
    name: 'Memory, Concentration.',
    description: 'The capacity to retain information and sustain focused attention, crucial for learning, problem-solving, and effective functioning.',
    icon: FaRegHourglassHalf ,
  },
  {
    name: 'Intellectual maturity.',
    description: 'The culmination of experience, wisdom, and a deep understanding of complex ideas, reflecting a sophisticated level of intellectual development.',
    icon: FaScaleBalanced ,
  },
]

export default function Benefits() {
  return (
    <div className="overflow-hidden py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-accent">Learn from master</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Benefits of Learning</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The Game of Improves young children to develop:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-accent" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={IMAGES.chessben}
            alt="Product screenshot"
            className="w-[30rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[35rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}