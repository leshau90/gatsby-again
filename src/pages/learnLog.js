import React from 'react'
import Layout from '../components/layout'

export default function LearnLog() {
    return (
        <Layout>
            <div>
                <h3>
                    two ways to do css in gatsby
            </h3>
                <ul>
                    <li>create global css a traditional css and import it, using gatsby-browser.js at root folder of garsby project</li>
                    <li>to emulate locality or or applying it as child of a certain tagged custom gatsby component,
                    <br />we can create module.css file which will be autocompiled,
                    than import it in another Container component,
                    then import that componen again to a page file using it, <br />it can act as wrapper or root element anything in it will be styled accordingly,it's what we do in this page </li>

                </ul>
            </div>
        </Layout>
    )
}
