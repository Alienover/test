// @flow
import React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'

import Header from '../HeroHeader'
import Footer from '../Footer'

import { rhythm } from '../../utils/typography'
import type { Node } from 'react'

const Layout: any = styled('div')`
  @media screen and (min-width: 800px) {
    max-width: 750px;
  }
  width: 100vw;
  margin: auto;

  && footer {
    text-align: center;
    margin: ${rhythm(3 / 2)} 0;
  }
`
const globalStyle = css`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Remove the list style */
  ul {
    margin: unset;
  }
  li {
    list-style: none;
  }

  /* Remove the link style */
  a {
    text-decoration: none;
  }
`
type Props = {
  children: Node,
}
export default ({ children }: Props) => {
  return (
    <Layout>
      <Global styles={globalStyle} />
      <Header />
      {children}
      <footer>
        <Footer />
      </footer>
    </Layout>
  )
}
