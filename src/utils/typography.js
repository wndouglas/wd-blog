import Typography from "typography"
import KirkhamTheme from "typography-theme-kirkham"

KirkhamTheme.headerFontFamily = ['Roboto']
const typography = new Typography(KirkhamTheme)

export default typography
export const rhythm = typography.rhythm