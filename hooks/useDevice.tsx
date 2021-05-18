import { useContext } from 'react'
import { ResponsiveContext } from 'grommet'

export default function useDeviceSize() {
  const size = useContext(ResponsiveContext)
  return {
    size,
    small: size === 'small',
    medium: size === 'medium',
    large: size === 'large',
  }
}
