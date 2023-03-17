import { FaDesktop, FaMoon, FaSun } from 'react-icons/fa'



const ThemeIcon = ({ theme, ...props }) => {
  switch (theme) {
    case 'light':
      return <FaSun {...props} />

    case 'dark':
      return <FaMoon color='#ddd' {...props} />

    default:
      return <FaDesktop {...props} />
  }
}

export default ThemeIcon