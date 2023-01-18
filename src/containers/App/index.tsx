import React from 'react'
import { Helmet, HelmetProvider, HelmetServerState } from 'react-helmet-async'
import './index.css'

const DEFAULT = {
  title: 'Vite SSG',
  description: 'Vite+React boilerplate +SSR/SSG +TS +TailwindCSS'
}

interface AppProps extends React.PropsWithChildren {
  meta: {
    title: string,
    description: string
  },
  context: {
    helmet: HelmetServerState
  }
}
const App: React.FunctionComponent<AppProps> =
  ({ children, meta, context }) => {
    return (
      <HelmetProvider context={context}>
        <Helmet
          defaultTitle={DEFAULT.title}
          titleTemplate='%s | ViteSSG'
        >
          <html lang="en" />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{meta?.title}</title>
          <meta name="description" content={meta?.description || DEFAULT.description} />
        </Helmet>
        <div>
          {children}
        </div>
      </HelmetProvider>
    )
  }

export { App }
