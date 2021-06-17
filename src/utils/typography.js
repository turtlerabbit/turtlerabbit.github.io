import Typography from 'typography'
//import altonTheme from 'typography-theme-alton'
import bootstrapTheme from 'typography-theme-bootstrap'
//import githubTheme from 'typography-theme-github'

bootstrapTheme.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  }
}

delete bootstrapTheme.googleFonts

const typography = new Typography(bootstrapTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale