import { Lottie } from 'lottie-react'

const LOTTIE_URL =
  'https://cdn.prod.website-files.com/66310a6d9862bf126bd9dfe7/6a69e646a7c78d0da3f5aeab_Models-and-Tools%20(1).json'

export default function Hsai() {
  return (
    <section className="hsai" id="hsai">
      <div className="container hsai-inner">
        <div className="hsai-intro">
          <p className="hsai-eyebrow">
            <em>Powered by H_SAI</em>
          </p>
          <h2 className="hsai-heading">Hyper-Supervised Assurance Intelligence</h2>
          <p className="hsai-body">
            H_SAI is the operating system that unifies your organization&apos;s context, the
            external demand signal, and foundational AI into a supervised, quality-assured execution
            engine. This is what turns general-purpose AI into security assurance intelligence that
            is uniquely yours.
          </p>
        </div>

        <div className="hsai-lottie">
          <Lottie src={LOTTIE_URL} loop autoplay className="hsai-lottie-player" />
        </div>
      </div>
    </section>
  )
}
