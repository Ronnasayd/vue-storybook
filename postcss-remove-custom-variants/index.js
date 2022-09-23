const plugin = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-remove-custom-variants',
    Once(root, { result, Declaration }) {},

    Declaration(decl, { Rule }) {
      const regex = /^(\[data-.*\])/gi
      const regex2 = /^(\[data-.*\])(.+)(\[data-.*\])$/gi
      if (decl.parent.selector.includes('data-')) {
        const splitted = decl.parent.selector.split(' ')
        if (!regex.test(decl.parent.selector)) {
          decl.parent.remove()
        }
        if (splitted.length > 2) {
          decl.parent.remove()
        }
        if (splitted?.[1]?.includes('data-')) {
          decl.parent.remove()
        }
        if (regex2.test(decl.parent.selector)) {
          decl.parent.remove()
        }
      }
    },
  }
}
plugin.postcss = true

module.exports = plugin
