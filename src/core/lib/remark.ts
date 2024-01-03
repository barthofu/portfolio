import { visit } from 'unist-util-visit'

export const remarkAdmonition = () => {
    return (tree: any) => {
        visit(tree, (node) => {

            if (
                node.type === 'textDirective' ||
                node.type === 'leafDirective' ||
                node.type === 'containerDirective'
              ) {

                const status = node.name.split('_')[0]
                const title = node.name.split('_')[1]

                const data = node.data || (node.data = {})
        
                data.hName = 'Admonition'
                data.hProperties = {
                    status,
                    title
                }
            }
        })
    }
}