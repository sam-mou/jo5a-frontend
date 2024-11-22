import AddedValue from "../sections/AddedValue"
import HeroHeader from "../sections/HeroHeader"
import HowItWorks from "../sections/HowItWorks"
import WhereToPlay from "../sections/WhereToPlay"

function HomePage() {
  return (
    <>
      <HeroHeader></HeroHeader>
      <HowItWorks></HowItWorks>
      <WhereToPlay></WhereToPlay>
      <AddedValue></AddedValue>
    </>
  )
}

export default HomePage