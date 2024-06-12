import React from 'react'

function GreenOutlineButton(props) {

    const text = props.text
    const onclick = props.onclick

  return (
    <div>
        <button onClick={onclick} className='sm:text-5xl min-[933px]:text-3xl text-sm bg-transparent hover:bg-white text-ayurveda-yellow font-semibold p-4 border border-ayurveda-gold hover:border-transparent rounded-md'>
            {text}
        </button>
    </div>
  )
}

export default GreenOutlineButton