/*
 * TODO: proper JSDoc
 *
 * this store incorporates:
 * - fetching data from the server
 * - chaching in a variable
 * - invalidating pages after cacheTime
 * - flushing cache
 * - disabling cache
 *
 * Cache structure:
 * {
 *  <pageNumber>: {
 *    // if invalid date, keep forever
 *    validUntil: <number>,
 *    pageContent: <JSON>
 *  }
 * }
 **/

const pageStore = {
  cacheTime: 10000,
  keepCache: true,
  pages: {},
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
      line: [...cachedPageContent.line]
    }
  },
  set(pageNumber, pageContent) { 

  },
  flush() {
    this.pages = {}
  },
  update(pageNumber) {
    return this.fetch(pageNumber)
      .then(pageContent => {
        this.pages[pageNumber] = {
          pageContent,
          validUntil: new Date().getTime() + this.cacheTime
        }
      })
  },
  fetch(pageNumber) {
    let returnObj = {};
    let random = Math.floor(Math.random()*50000)
    const requestURL = "content/jvpeek/" + pageNumber + ".json?r=" + random
    returnObj.line = []

    return fetch(requestURL)
      .then(res => res.json())
  }
}

export default pageStore
