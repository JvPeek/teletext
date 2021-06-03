function renderPage(pageContent) {
  if (pageContent.lines.length > 24) {
    pageContent.lines.splice(24, pageContent.lines.length - 24)
    console.log("cutting excess lines")
  }
  while (pageContent.lines.length > 24) {
    pageContent.lines.pop();
    console.log("too many lines");

  }
  while (pageContent.lines.length < 24) {
    pageContent.lines.push("²1³8");
    console.log("needs more lines");
  }
  for (let i=0;i<24;i++) {
    let fontColor = 7;
    let fontBackground = 8;
    let lineChanged=false;
    const fgcount = (pageContent.lines[i].split("²").length -1) * 2;
    const bgcount = (pageContent.lines[i].split("³").length -1) * 2;
    const charcount = pageContent.lines[i].length - fgcount - bgcount;
    //console.log(charcount);
    if (charcount > 40) {
      console.log("line",i,"too long");
      pageContent.lines[i] = pageContent.lines[i].substr(0,pageContent.lines[i].length - (charcount - 40));
    }
    if (charcount < 40) {
      console.log("line",i,"too short");
      for (let j=charcount;j<40;j++) {
        pageContent.lines[i] += " ";
      }
    }
    for (let j=0;j<pageContent.lines[i].length;j++) {
      let changed = false;
      if (pageContent.lines[i].charAt(j) == "²") {
        changed=true;
        lineChanged=true;

        fontColor = pageContent.lines[i].charAt(j+1);
        pageContent.lines[i] = pageContent.lines[i].substr(0,j) + pageContent.lines[i].substr(j+2);
      }
      if (pageContent.lines[i].charAt(j) == "³") {
        changed=true;
        lineChanged=true;
        fontBackground = pageContent.lines[i].charAt(j+1);
        pageContent.lines[i] = pageContent.lines[i].substr(0,j) + pageContent.lines[i].substr(j+2);
      }
      if (changed==true) {
        let fontString = "";
        if (lineChanged) {
          fontString += "</span>"
        }
        fontString += "<span class=\"f" + fontColor + " b" + fontBackground + "\">";
        pageContent.lines[i] = pageContent.lines[i].substr(0,j) + fontString + pageContent.lines[i].substr(j);
      }
    }
    if (lineChanged) {
      pageContent.lines[i] += "</span>";
    }
    //const regex = '\\d{3}';
    const regex = '[1-8][0-9][0-9]';
    const result = pageContent.lines[i].match(regex);
    if (result != null) {
      pageContent.lines[i] = pageContent.lines[i].substr(0,result.index) + "<span class=\"link\" onclick=\"PageManager.page='" + pageContent.lines[i].substr(result.index,3) + "'\">" + pageContent.lines[i].substr(result.index,3) + "</span>" + pageContent.lines[i].substr(result.index+3);
      //console.log(i,pageContent.line[i]);
    }

    //pageContent.line[i] = "12345<span class=\"f" + (Math.floor(Math.random() * 8) + 1) + " b"+(Math.floor(Math.random() * 8) + 1)+"\">" + page + "</span>90123456789012345678901234567890";

  }
  let output = pageContent.lines.join("<br />");

  document.getElementById("content").innerHTML = output;
}

export default renderPage
