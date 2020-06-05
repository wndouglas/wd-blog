import React from "react"
import { getLearnPostPath } from "../functions/getPaths"
import { Link } from "gatsby"

const getLinkedItem = (currIndex, node, pathEdges) => {
    if (node.frontmatter.index !== currIndex)
    {
        return (
        <Link to={getLearnPostPath(node.frontmatter.category, node.frontmatter.sub_category, node.frontmatter.path, pathEdges)}>{node.frontmatter.title}</Link>
        )
    }
    else
    {
        return (
            <span style={{ fontWeight: 'bold' }}>{node.frontmatter.title}</span>
        )
    }
}

export default ({ props }) => {
    const currIndex = props.currIndex
    const allIndexedPosts = props.allIndexedPosts
    const pathEdges = props.pathEdges
    const filteredPosts = allIndexedPosts.filter(({ node }) => 
        node.frontmatter.index > 0 && node.frontmatter.index !== undefined)
    return (
    <ol>
        {filteredPosts.map(({ node }) => (
            <li key={node.frontmatter.path}>{getLinkedItem(currIndex, node, pathEdges)}</li>
        ))}
    </ol>
    )
}