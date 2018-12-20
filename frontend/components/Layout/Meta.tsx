import Head from 'next/head'

interface Props {
  title?: string
}

const Meta: React.SFC<Props> = ({ title = 'Flashy ⚡' }): JSX.Element => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <title>{title}</title>
  </Head>
)

export default Meta