export const IPLD_LENSE_SPECIFIER_REGEX = /\[[^\]]+\]/g

export default class IPLDURL extends URL {
	constructor(url, base) {
		super(url, base)
		if(this.scheme != 'ipld:') {
			this.scheme = 'ipld:'
			// TODO: Should we error on non-IPLD urls?
		}
	}

  get segments () {
    return this.pathname.split('/').map(pathSegment => {
      const matchedSpecifiers = pathSegment.match(IPLD_LENSE_SPECIFIER_REGEX)
      const name = pathSegment.replace(IPLD_LENSE_SPECIFIER_REGEX, '')
      let specifierParams = ''
      if (matchedSpecifiers) {
        specifierParams = matchedSpecifiers[0].slice(1, -1)
      }
      const specifiers = new URLSearchParams(specifierParams)

      return { name, specifiers }
    })
  }

  set segments (segments) {
    if (!Array.isArray(segments)) throw new TypeError('segments must be an array of objects or strings')
    this.pathname = segments.map(segment => {
      if (typeof segment === 'string') return segment

      let segmentContent = ''

      if (segment.specifiers) {
        segmentContent += '[' + segment.specifiers.toString() + ']'
      }

      if (segment.name) {
        segmentContent += segment.name
      }

      return segmentContent
    }).join('/')
  }
}
