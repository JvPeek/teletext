/**
 *  @typedef {Object} PageContent
 *  @property {string} title
 *  @property {Array} lines
 */

/**
 * The preferred way to get Pages from the backend. This also implements:
 * - fetching data from the server
 * - chaching in a variable
 * - invalidating pages after cacheTime
 * - flushing cache
 * - disabling cache
 * 
 * @property {number} cacheTime time a page stays valid in cache in ms - defaults to 100s
 * @property {boolean} keepCache disregard cache alltogether if false - defaults to true
 * @property {Array} pages the actual cache in memory
 */
const PageStore = {
  // 100 seconds
  cacheTime: 100000,
  keepCache: true,
  pages: {},
  /**
   * get a PageContent either from cache or from the backend
   *
   * @param {number} pageNumber
   *
   * @returns {PageContent} page
   */
  async get(pageNumber) {
    // TODO: Persistence
    if (!this.keepCache ||
      (this.pages[pageNumber] == null
        || this.pages[pageNumber].validUntil < new Date().getTime())
    ) {
      await this.update(pageNumber)
    }
    // Deep copy pageContent because *someone* likes to mutate input references
    const cachedPageContent = this.pages[pageNumber].pageContent
    return {
      title: cachedPageContent.title,
      lines: [...cachedPageContent.lines]
    }
  },

  /**
   * set a page in cache - not implemented jet
   *
   * @param {number} pageNumber
   * @param {PageContent} pageContent
   */
  set(pageNumber, pageContent) { 

  },

  /**
   * flush the entire page cache
   */
  flush() {
    this.pages = {}
  },

  /**
   * update one page in cache from the backed - automatically resets validity based on
   * this.cacheTime
   *
   * @param {number} pageNumber
   *
   * @returns {Promise<PageContent>} pageContent
   */
  update(pageNumber) {
    return this.fetch(pageNumber)
      .then(pageContent => {
        this.pages[pageNumber] = {
          pageContent,
          validUntil: new Date().getTime() + this.cacheTime
        }
        return pageContent
      })
  },

  /**
   * fetch diretly from the backend
   *
   * @param {number} pageNumber
   *
   * @returns {Promise<PageContent>} pageContent
   */
  fetch(pageNumber) {
    let returnObj = {};
    let random = Math.floor(Math.random()*50000)
    const requestURL = "content/jvpeek/" + pageNumber + ".json?r=" + random
    returnObj.lines = []


    let json = fetch(requestURL)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return fetch('content/jvpeek/404.json?r=' + random).then(res => res.json())
        }
      }).catch(e => console.log(e.message))
    return json
  }
}

export default PageStore
