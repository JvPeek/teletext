import PageStore from './pageStore.js'
import renderPage from './pageOps/renderPage.js'
import updateHeadline from './pageOps/updateHeadline.js'

const pageManager = {
  currentPage: 100,
  isValidPageNumber: page => (page > 99 && page < 900),
  updateHeadline: () => updateHeadline(),
  fetch: pageNumber => PageStore.get(pageNumber),
  render: pageContent => renderPage(pageContent),
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
