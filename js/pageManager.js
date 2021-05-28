import renderPage from './pageOps/renderPage.js'
import updateHeadline from './pageOps/updateHeadline.js'

const pageManager = {
  currentPage: 100,
  isValidPageNumber: page => (page > 99 && page < 900),
  updateHeadline: () => updateHeadline(),
  render: pageContent => renderPage(pageContent),
  fetch: (pageNumber) => {
    let returnObj = {};
    let random = Math.floor(Math.random()*50000)
    const requestURL = "content/jvpeek/" + pageNumber + ".json?r=" + random;
    returnObj.line = [];

    return fetch(requestURL)
      .then(res => res.json())
      .catch(err => { throw err })

    for (let i=0;i<24;i++) {
      //returnObj.line[i] = "                        a" + page + "            ";
    }
  },
  pageUp() {
    this.page = this.currentPage + 1
  },
  pageDown() {
    this.page = this.currentPage - 1
  }
}

Object.defineProperty(pageManager, 'page', {
  get: () => pageManager.currentPage,
  set: async (pageNumber) => {
    pageManager.currentPage = parseInt(pageNumber, 10)
    if (pageManager.isValidPageNumber(pageNumber)) {
      pageManager.updateHeadline()
      pageManager.render(await pageManager.fetch(pageNumber))  
    }
  }
})

export default pageManager
