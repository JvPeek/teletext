import getPageImporter from './pageImporter.js'
import PageManager from './pageManager.js'

window.addEventListener('load', () => {
  getPageImporter()
  // Handle keys
  document.addEventListener('keypress', (event) => {
    keyPress(event.key);
  }, false);
  document.getElementById('teletextbutton').addEventListener('click', toggleTeletext)
  Array.prototype.forEach.call(document.getElementsByClassName('numpadbutton'), button => {
    button.addEventListener('click', (e) => {
      keyPress(e.target.value)
    })
  })
  // Prepare and refresh headline
  PageManager.updateHeadline();
  window.setInterval(PageManager.updateHeadline,1000);

  let initPage = 100
  // Handle location.hash (#100-#899)

  let startwithPage = /^#(\d{3})$/.exec(window.location.hash)
  if(startwithPage) {
    initPage = parseInt(startwithPage[1])
    if(initPage<100 || initPage>899) {
      initPage = 100
    }
  }
  PageManager.page = initPage
  // getPage(100);
})

window.nextPage = null
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
window.PageManager = PageManager

// Triggered by onClick events
function toggleTeletext() {
  document.getElementById("teletext").classList.toggle("invisible");
  getPage(100);

}
function keyPress(key) {
  // console.log('got key event',key);
  if (key == "+") {
    if (PageManager.page >= 900) {
      PageManager.page = 100;
    } else {
      PageManager.pageUp()
    }
    return;
  }
  if (key == "-") {
    if (PageManager.page <= 100) {
      PageManager.page = 899
    } else {
      PageManager.pageDown()
    }
    return;
  }
  pageAddNumber(key);
}

function pageAddNumber(num) {
  const parsedNum = parseInt(num, 10);
  if (isNaN(parsedNum)) { return false; }

  if (nextPage == null) {
    if (parsedNum != 0 && parsedNum != 9 ) {
      nextPage = String(parsedNum);
    }

  } else {
    nextPage += String(parsedNum);
  }
  if (PageManager.isValidPageNumber(nextPage)) {
    PageManager.page = nextPage
    nextPage = null
  }
  PageManager.updateHeadline();
}
