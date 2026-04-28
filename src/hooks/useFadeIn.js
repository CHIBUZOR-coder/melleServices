import { useInView } from 'react-intersection-observer'

const useFadeIn = (delay = 0) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })
  return {
    ref,
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    transition: { duration: 0.6, ease: 'easeOut', delay }
  }
}

export default useFadeIn
