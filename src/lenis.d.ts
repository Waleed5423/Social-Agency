declare module '@studio-freight/lenis' {
    export default class Lenis {
      constructor(options?: {
        wrapper?: HTMLElement | Window
        content?: HTMLElement
        duration?: number
        easing?: (t: number) => number
        direction?: 'vertical' | 'horizontal'
        gestureDirection?: 'vertical' | 'horizontal' | 'both'
        smooth?: boolean
        mouseMultiplier?: number
        smoothTouch?: boolean
        touchMultiplier?: number
        infinite?: boolean
      })
      raf(time: number): void
      on(
        event: 'scroll',
        handler: ({ scroll, limit, velocity, direction, progress }) => void
      ): void
      scrollTo(
        target: HTMLElement | string | number,
        options?: {
          offset?: number
          duration?: number
          easing?: (t: number) => number
          immediate?: boolean
          lock?: boolean
          onComplete?: () => void
        }
      ): void
      start(): void
      stop(): void
      destroy(): void
    }
  }