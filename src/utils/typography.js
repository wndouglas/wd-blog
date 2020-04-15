import Typography from "typography"
import KirkhamTheme from "typography-theme-kirkham"
KirkhamTheme.baseFontSize = '18px' // was 20px.

const typography = new Typography(KirkhamTheme)

export default typography
export const rhythm = typography.rhythm