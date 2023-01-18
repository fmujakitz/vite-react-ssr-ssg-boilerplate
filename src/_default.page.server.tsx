import { App } from 'containers/App'
import { renderToString } from 'react-dom/server'

import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr'
import { getHtml, helmetCtx } from './html.utils'

const render = async (ctx: any) => {
  const { Page, pageProps, exports: { meta } } = ctx

  const page = (
    <App meta={meta} context={helmetCtx}>
      <Page {...pageProps} />
    </App>
  )

  const content = renderToString(page)

  return escapeInject`${dangerouslySkipEscape(getHtml(content))}`
}

const passToClient = [
  'pageProps', 'meta'
]

export { render, passToClient }
