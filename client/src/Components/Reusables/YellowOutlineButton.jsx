import React from 'react'

function YellowOutlineButton(props) {

    const text = props.text
    const onclick = props.onclick

  return (
    <div>
        <button onClick={onclick} className='sm:text-5xl min-[933px]:text-3xl text-sm bg-transparent hover:bg-white hover:text-smoke-brown text-ayurveda-yellow font-semibold p-4 border border-ayurveda-yellow hover:border-transparent rounded-3xl px-7 py-3'>
            {text}
        </button>
    </div>
  )
}

export default YellowOutlineButton