import defaultSettings from '@/settings'

const title = defaultSettings.title || '新闻实时报'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
