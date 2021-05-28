import PageManager from './pageManager.js'
import DnDFileController from './util/DnDFileController.js'

let pageImporter = null

const createPageImporter = () => {
  return new DnDFileController('html', function(files) {
    var f = files[0];

    if (!f.type.match('application/json')) {
      alert('Not a JSON file!');
    }

    var reader = new FileReader();
    reader.onloadend = function(e) {
      var result = JSON.parse(this.result);
      PageManager.render(result)
    };
    reader.readAsText(f);
  });
}

const getPageImporter = () => {
  if (pageImporter ==! null) {
    return pageImporter
  } else {
    pageImporter = createPageImporter()
    return pageImporter
  }
}

export default getPageImporter
