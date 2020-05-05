import Typography from "typography"
import KirkhamTheme from "typography-theme-kirkham"

KirkhamTheme.bodyFontFamily = ["Georgia", "serif"]
KirkhamTheme.headerFontFamily = ["Roboto", "Avenir Next", "Helvetica Neue", "Segoe UI", "Helvetica", 
    "Arial", "sans-serif"]
const typography = new Typography(KirkhamTheme)

export default typography
export const rhythm = typography.rhythm