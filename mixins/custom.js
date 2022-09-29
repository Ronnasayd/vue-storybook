export default {
  methods: {
    /**
     * @param {string} attr
     * @returns {string} attribute
     */
    getAttr(attr) {
      return this.$attrs?.[attr] ?? ''
    },
  },
}
