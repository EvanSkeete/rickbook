import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'

import { Body } from 'base-components.js'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = (
      <style dangerouslySetInnerHTML={{ __html: styleSheet.rules().map(rule => rule.cssText).join('\n') }} />
    )
    return { ...page, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Rickbook</title>
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </html>
    )
  }
}
