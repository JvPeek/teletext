import PageManager from './pageManager.js'
import DnDFileController from './util/DnDFileController.js'

let pageImporter = null

const createPageImporter = () => {
  return new DnDFileController('html', function(data) {
    //console.log(data)
    //console.log(str)
    let files = data.files
    var f = files[0];
    
    //console.log(f)
    let str = data.getData("text/plain")
    if (f != undefined) {
      if (!f.type.match('application/json')) {
        alert('Not a JSON file!');
      }
  
      var reader = new FileReader();
      reader.onloadend = function(e) {
        console.log("raw: " + this.result)
        var result = JSON.parse(this.result);
        console.log("parsed: " + result.toString())
        PageManager.render(result)
      };
      reader.readAsText(f);
    }else if(str != undefined && str != "") {
      PageManager.render(JSON.parse(str))
    }
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
