import { Root, createRoot, hydrateRoot } from 'react-dom/client'

import { App } from 'containers/App'
import { helmetCtx } from './html.utils'

const clientRouting = true
const prefetchStaticAssets = { when: 'VIEWPORT' }
const hydrationCanBeAborted = true

let root: Root

const render = async (ctx: any) => {
  const { Page, isHydration, pageProps, exports: { meta } } = ctx

  const page = (
    <App meta={meta} context={helmetCtx}>
      <Page {...pageProps} />
    </App>
  )

  const container: Element = document.getElementById("root") as Element

  if (isHydration) {
    root = hydrateRoot(container, page)
  } else {
    if (!root) {
      root = createRoot(container)
    }
    root.render(page)
  }
}

const onPageTransitionStart = (ctx: any) => {
  console.log('onPageTransitionStart')
}

const onPageTransitionEnd = (ctx: any) => {
  console.log('onPageTransitionEnd')
}

export {
  clientRouting,
  prefetchStaticAssets,
  hydrationCanBeAborted,
  render,
  onPageTransitionStart,
  onPageTransitionEnd
}

