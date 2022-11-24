import reportWebVitals from '../../webVitals'

const runInDev = (func: () => void) => {
  if (import.meta.env.MODE === 'development') {
    func instanceof Function && func()
  }
}

export const log = (...args: any[]) => {
  runInDev(() => console.log(...args))
}

export const warn = (...args: any[]) => {
  runInDev(() => console.warn(...args))
}

export const error = (...args: any[]) => {
  runInDev(() => console.error(...args))
}

export const logWebVitals = () => {
  runInDev(() => reportWebVitals(console.log))
}
