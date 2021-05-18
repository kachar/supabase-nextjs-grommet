import { ServerStyleSheet } from 'styled-components'
import Document, { DocumentContext, DocumentInitialProps } from 'next/document'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />))
    return {
      ...page,
      styles: sheet.getStyleElement(),
    }
  }
}
