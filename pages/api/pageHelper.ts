import { useState } from 'react'

const usePageSet = () => {
  const [pageSet, setPageSet] = useState<number>(0)

  return {
    pageSet,
    setPageSet
  }
}

export default usePageSet