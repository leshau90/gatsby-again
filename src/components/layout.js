import React from "react"
import { css } from '@emotion/react'
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
export default function Layout({ children }) {
  return (
    <div css={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};`}>
      <Link to={'/'}>
        <h3 css={css`margin-bottom:${rhythm(2)};display: inline;font-style:normal;`}>Home</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to='/contact/' >contact</ListLink>
        <ListLink to='/learnLog/' >log</ListLink>
        <ListLink to='/pandas/' >pandas</ListLink>
        <ListLink to='/seaweed/' >seaweed</ListLink>
        <ListLink to='/posts/' >all-posts</ListLink>
      </ul>

      {children}
    </div>)
}














// export default function Layout({ children }) {
//   return (
//     <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
//       <header style={{ marginBottom: `1.5rem` }}>
//         <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
//           <h3 style={{ display: `inline` }}>MySweetSite</h3>
//         </Link>
//         <ul style={{ listStyle: `none`, float: `right` }}>
//           <ListLink to="/">Home</ListLink>
//           <ListLink to="/about/">About</ListLink>
//           <ListLink to="/contact/">Contact</ListLink>
//           <ListLink to="/learnLog/">log</ListLink>
//         </ul>
//       </header>
//       {children}
//     </div>
//   )
// }