import React from 'react'

function YellowButton(props) {

    const onclick = props.onclick
    const text = props.text

  return (
    <div className=''>
        <button onClick={onclick} className="bg-ayurveda-yellow hover:opacity-70 text-ayurveda-red px-7 py-1 rounded-2xl font-open-sans font-medium md:text-xl text-sm">{text}</button>
    </div>
  )
}

export default YellowButton