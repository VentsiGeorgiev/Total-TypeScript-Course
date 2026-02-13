import { Equal, Expect } from './helpers/type-utils'

/**
 * How do we type onFocusChange?
 */

type Listener = (isFocused: boolean) => void

const addListener = (onFocusChange: Listener) => {
  window.addEventListener('focus', () => {
    onFocusChange(true)
  })

  window.addEventListener('blur', () => {
    onFocusChange(false)
  })
}

addListener((isFocused) => {
  console.log({ isFocused })

  type tests = [Expect<Equal<typeof isFocused, boolean>>]
})
