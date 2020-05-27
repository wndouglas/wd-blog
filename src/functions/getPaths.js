// Extract the path of a learning post, a subcategory page or a category page.
// Category is required for a sub-category and both are required for
// a path. If you are looking for a category, set subcategory and path to
// null and likewise set path to null if looking for a subcategory.
export function getLearnPostPath(currCategory, currSubcategory, currPath, pathEdges)
{
    let category_path = ""
    let subcategory_path = ""
    let path = ""
    if (currCategory !== null)
    {
        let sameCategoryEdges = pathEdges
            .filter(edge => edge.node.frontmatter.category === currCategory)
        category_path = sameCategoryEdges
            .filter(edge => edge.node.frontmatter.sub_category === null)
            .map(edge => edge.node.frontmatter.path)[0]

        if(currSubcategory !== null)
        {
            subcategory_path = sameCategoryEdges
                .filter(edge => edge.node.frontmatter.sub_category
                     === currSubcategory)
                .map(edge => edge.node.frontmatter.path)[0]

            if(currPath !== null)
            {
                path = currPath
            }
        }
    }
    return "/learn" + category_path + subcategory_path + path
}

// Extract the path of a post
export function getBlogPostPath(currPath)
{
    return "/posts" + currPath
}