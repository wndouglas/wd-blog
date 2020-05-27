import React from "react"
import { Link } from "gatsby"
import MetaData from "./postMetadata"
import { getBlogPostPath } from "../functions/getPaths"

export default ({ pathEdges, node }) => (
    <div>
        <Link to={getBlogPostPath(node.frontmatter.path)}>
        <h3>{node.frontmatter.title}</h3>
        </Link>
        <MetaData 
        date={node.frontmatter.date}
        timeToRead={node.timeToRead}/>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }}/>
        <Link to={getBlogPostPath(node.frontmatter.path)}>
            Read more...
        </Link>
        <br/><br/><br/>
    </div>
)