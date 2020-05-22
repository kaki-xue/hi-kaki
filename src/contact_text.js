import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring';
import {Waypoint } from 'react-waypoint';


function Text() {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#C23369' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#A64AC9' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#9F85FF' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#FCCD04' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['HEY', "COME", 'CONNECT!']), 2000))
    ref.current.push(setTimeout(() => set(['HEY', 'CONNECT!']), 5000))
    ref.current.push(setTimeout(() => set(['HEY', 'WHY NOT', "CONNECT!"]), 8000))
  }, [])

  useEffect(() => void reset(), [])

  return (
    <div>
    <Waypoint
      topOffset = "20%"
      onEnter={reset}

    />

    <div>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="contact-item" key={key} style={rest} >
          <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
        </animated.div>
      ))}
    </div>
    </div>
  )
}

export default Text;
