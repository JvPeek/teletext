function renderPage(pageContent) {
  if (pageContent.line.length > 24) {
    pageContent.line.splice(24, pageContent.line.length - 24)
    console.log("cutting excess lines")
  }
  while (pageContent.line.length > 24) {
    pageContent.line.pop();
    console.log("too many lines");

  }
  while (pageContent.line.length < 24) {
    pageContent.line.push("²1³8");
    console.log("needs more lines");
  }
  for (let i=0;i<24;i++) {
    let fontColor = 7;
    let fontBackground = 8;
    let lineChanged=false;
    const fgcount = (pageContent.line[i].split("²").length -1) * 2;
    const bgcount = (pageContent.line[i].split("³").length -1) * 2;
    const charcount = pageContent.line[i].length - fgcount - bgcount;
    //console.log(charcount);
    if (charcount > 40) {
      console.log("line",i,"too long");
      pageContent.line[i] = pageContent.line[i].substr(0,pageContent.line[i].length - (charcount - 40));
    }
    if (charcount < 40) {
      console.log("line",i,"too short");
      for (let j=charcount;j<40;j++) {
        pageContent.line[i] += " ";
      }
    }
    for (let j=0;j<pageContent.line[i].length;j++) {
      let changed = false;
      if (pageContent.line[i].charAt(j) == "²") {
        changed=true;
        lineChanged=true;

        fontColor = pageContent.line[i].charAt(j+1);
        pageContent.line[i] = pageContent.line[i].substr(0,j) + pageContent.line[i].substr(j+2);
      }
      if (pageContent.line[i].charAt(j) == "³") {
        changed=true;
        lineChanged=true;
        fontBackground = pageContent.line[i].charAt(j+1);
        pageContent.line[i] = pageContent.line[i].substr(0,j) + pageContent.line[i].substr(j+2);
      }
      if (changed==true) {
        let fontString = "";
        if (lineChanged) {
          fontString += "</span>"
        }
        fontString += "<span class=\"f" + fontColor + " b" + fontBackground + "\">";
        pageContent.line[i] = pageContent.line[i].substr(0,j) + fontString + pageContent.line[i].substr(j);
      }
    }
    if (lineChanged) {
      pageContent.line[i] += "</span>";
    }
    //const regex = '\\d{3}';
    const regex = '[1-8][0-9][0-9]';
    const result = pageContent.line[i].match(regex);
    if (result != null) {
      pageContent.line[i] = pageContent.line[i].substr(0,result.index) + "<span class=\"link\" onclick=\"PageManager.page='" + pageContent.line[i].substr(result.index,3) + "'\">" + pageContent.line[i].substr(result.index,3) + "</span>" + pageContent.line[i].substr(result.index+3);
      //console.log(i,pageContent.line[i]);
    }

    //pageContent.line[i] = "12345<span class=\"f" + (Math.floor(Math.random() * 8) + 1) + " b"+(Math.floor(Math.random() * 8) + 1)+"\">" + page + "</span>90123456789012345678901234567890";

  }
  let output = pageContent.line.join("<br />");

  document.getElementById("content").innerHTML = output;
}

export default renderPage
