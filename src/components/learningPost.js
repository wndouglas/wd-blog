import React from "react"
import { Link } from "gatsby"
import MetaData from "./postMetadata"
import { getLearnPostPath } from "../functions/getPaths"

function numberedTitle( node )
{
    if (node.frontmatter.index !== null && node.frontmatter.index !== undefined && node.frontmatter.index > 0)
    {
        return node.frontmatter.index + ". " + node.frontmatter.title
    }
    else
    {
        return node.frontmatter.title
    }
}

export default ({ pathEdges, node }) => (
    <div>
        <Link to={getLearnPostPath(node.frontmatter.category, 
                    node.frontmatter.sub_category,
                    node.frontmatter.path, pathEdges)}>
        <h3>{numberedTitle(node)}</h3>
        </Link>
        <MetaData 
        date={node.frontmatter.date}
        timeToRead={node.timeToRead}
        category={node.frontmatter.category}
        pathEdges={pathEdges}/>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }}/>
        <Link to={getLearnPostPath(node.frontmatter.category,
                              node.frontmatter.sub_category,
                              node.frontmatter.path, pathEdges)}>
            Read more...
        </Link>
        <br/><br/><br/>
    </div>
)