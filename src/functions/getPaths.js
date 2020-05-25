export function getPostPath(currCategory, currSubcategory, path, pathEdges)
{
    let sameCategoryEdges = pathEdges.filter(edge => edge.node.frontmatter.category === currCategory)
    let category_path = sameCategoryEdges.filter(edge => edge.node.frontmatter.sub_category === null).map(edge => edge.node.frontmatter.path)[0]

    let subcategory_path = sameCategoryEdges.filter(edge => edge.node.frontmatter.sub_category === currSubcategory).map(edge => edge.node.frontmatter.path)[0]
    if(subcategory_path === null)
    {
      subcategory_path = ""
    }
    if(subcategory_path === undefined)
    {
      console.error("Discrepency between config file and one of markdown files.")
    }

    return "/posts" + category_path + subcategory_path + path
}

export function getCategoryPath(currCategory, pathEdges)
{
    let sameCategoryEdges = pathEdges.filter(edge => edge.node.frontmatter.category === currCategory)
    let category_path = sameCategoryEdges.filter(edge => edge.node.frontmatter.sub_category === null).map(edge => edge.node.frontmatter.path)[0]

    return "/posts" + category_path
}

export function getSubcategoryPath(currCategory, currSubcategory, pathEdges)
{
  let sameCategoryEdges = pathEdges.filter(edge => edge.node.frontmatter.category === currCategory)
  let category_path = sameCategoryEdges.filter(edge => edge.node.frontmatter.sub_category === null).map(edge => edge.node.frontmatter.path)[0]

  let subcategory_path = sameCategoryEdges.filter(edge => edge.node.frontmatter.sub_category === currSubcategory).map(edge => edge.node.frontmatter.path)[0]
  if(subcategory_path === null)
  {
    subcategory_path = ""
  }
  if(subcategory_path === undefined)
  {
    console.error("Discrepency between config file and one of markdown files.")
  }

  return "/posts" + category_path + subcategory_path
}