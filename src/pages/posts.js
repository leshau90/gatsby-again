import React from "react"
import {Link, graphql } from "gatsby"
import Layout from "../components/layout"


export default function Posts({ data }) {
    console.log(data);
    // console.log(data.allFile.edges[0].relativePath);
    return (
        <Layout>
            <div>
                <h4>Posts list</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Relative Path</th>
                            <th>Pretified Size</th>
                            <th>Extension</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map(({ node }, index) => (
                            <tr key={index}>
                                <td>  <Link to={`/${node.name}/`}>{node.relativePath}</Link>   </td>
                                <td>   {node.prettySize} </td>
                                <td>   {node.extension} </td>
                                <td>   {node.birthTime} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}


export const query = graphql`
    query{
        allFile{
            edges{
                node{
                    name
                    relativePath
                    prettySize
                    extension
                    birthTime(fromNow: true)
                }
            }
        }
    }
`

// export const query = graphql`
//   query {
//     allFile {
//       edges {
//         node {
//           relativePath
//           prettySize
//           extension
//           birthTime(fromNow: true)
//         }
//       }
//     }
//   }
// `