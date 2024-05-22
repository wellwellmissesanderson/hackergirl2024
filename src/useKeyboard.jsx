import { useRef, useEffect } from 'react'

const EVENTS = [
  'mouseup',
  'mousedown',
  'keyup',
  'keydown',
]

// handles keyboard and mouse events
export default function useKeyboard() {
  const keyMap = useRef({})

  useEffect(() => {
    const onDocumentAction = (e) => {
      // console.log({ innerText: e.target.innerText, tagName: e.target.tagName })
      keyMap.current[e.code] = e.type === 'keydown'

      if (e.target?.tagName === 'BUTTON' && e.target.innerText.toLowerCase() === 'jump') {
        keyMap.current['mousedown'] = e.type === 'mousedown'
      }
    }
    EVENTS.forEach(event => document.addEventListener(event, onDocumentAction))

    return () => {
      EVENTS.forEach(event => document.removeEventListener(event, onDocumentAction))
    }
  })

  return keyMap.current
}