import React from 'react'
import ResultDetail from '../../components/ResultDetail/ResultDetail'
import ResultFor11 from '../../components/ResultDetail/ResultFor11'
import ResultForInternal from '../../components/ResultDetail/ResultInternal'
import EntranceResult from '../../components/ResultDetail/EntranceResult'

const Result = () => {
  return (
    <div>
        <ResultFor11/>
        <ResultForInternal/>
        <EntranceResult/>
    </div>
  )
}

export default Result