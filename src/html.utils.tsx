import { FilledContext } from 'react-helmet-async'

export const helmetCtx = {} as FilledContext

export const getHtml = (content: string) => {
  const {
    htmlAttributes, bodyAttributes, ...rest
  } = helmetCtx.helmet

  const head = Object.keys(rest)
    .map((k: string) => rest[k as keyof typeof rest].toString())
    .join('')
    .split('/>').join('/>\n')

  return (`<!DOCTYPE html>
<html>
  <head>
  ${head}
  </head>
  <body>
    <div id="root">${(content)}</div>
  </body>
</html>`)
}