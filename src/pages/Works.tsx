import WorkBody from "components/works/WorkBody"
import { FC, useEffect } from "react"

const Work: FC = () => {
  useEffect(() => {
    document.title = "My Works - Ruth Ikegah"
  }, [])
  return (
    <>
      <WorkBody />
    </>
  )
}

export default Work
