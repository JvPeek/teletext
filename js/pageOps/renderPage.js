function renderPage(pageContent) {

  let nextStream = false;

  function getNextStream() {

    const xhr = new XMLHttpRequest();
    const url = 'times.php';

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          nextStream = data;
        } else {
          console.error('Failed to fetch next stream date');
        }
      }
    };

    xhr.open('GET', url, false);
    xhr.send();
    window.setTimeout(getNextStream, 20000);
  }

  // get times from API.
  getNextStream();
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
  if (!pageContent.fullscreen) {
    console.log("header gets replaced");
    const weekday = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];

    let date = new Date(nextStream.nextUnix*1000);

    let nextStreamString = "";
    nextStreamString += weekday[date.getDay()];
    nextStreamString += " ";
    nextStreamString = nextStreamString.padEnd(22-6, " ")
    nextStreamString += " ";
    nextStreamString += (date.getHours()<10?'0':'') + date.getHours() + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes();
    nextStreamString = nextStreamString.padEnd(22, " ");
    
    
    pageContent.lines[0] = "²7³1               ³0 ²8³3                        ";
    pageContent.lines[1] = "²7³1   JvPeek TV   ³0 ²8³3 Nächster Stream:       ";
    pageContent.lines[2] = "²7³1  Twitch Text  ³0 ²8³3 " + nextStreamString + " ";
    pageContent.lines[3] = "²7³1               ³0 ²8³3                        ";
  }
  for (let i = 0; i < 24; i++) {
    let fontColor = 7;
    let fontBackground = 8;
    let lineChanged = false;
    const fgcount = (pageContent.lines[i].split("²").length - 1) * 2;
    const bgcount = (pageContent.lines[i].split("³").length - 1) * 2;
    const charcount = pageContent.lines[i].length - fgcount - bgcount;

    if (charcount > 40) {
      console.log("line", i, "too long");
      pageContent.lines[i] = pageContent.lines[i].substr(0, pageContent.lines[i].length - (charcount - 40));
    }
    if (charcount < 40) {
      console.log("line", i, "too short");
      for (let j = charcount; j < 40; j++) {
        pageContent.lines[i] += " ";
      }
    }
    for (let j = 0; j < pageContent.lines[i].length; j++) {
      let changed = false;
      if (pageContent.lines[i].charAt(j) == "²") {
        changed = true;
        lineChanged = true;

        fontColor = pageContent.lines[i].charAt(j + 1);
        pageContent.lines[i] = pageContent.lines[i].substr(0, j) + pageContent.lines[i].substr(j + 2);
      }
      if (pageContent.lines[i].charAt(j) == "³") {
        changed = true;
        lineChanged = true;
        fontBackground = pageContent.lines[i].charAt(j + 1);
        pageContent.lines[i] = pageContent.lines[i].substr(0, j) + pageContent.lines[i].substr(j + 2);
      }
      if (changed == true) {
        let fontString = "";
        if (lineChanged) {
          fontString += "</span>"
        }
        fontString += "<span class=\"f" + fontColor + " b" + fontBackground + "\">";
        pageContent.lines[i] = pageContent.lines[i].substr(0, j) + fontString + pageContent.lines[i].substr(j);
      }
    }
    if (lineChanged) {
      pageContent.lines[i] += "</span>";
    }
    //const regex = '\\d{3}';
    const regex = '[1-8][0-9][0-9]';
    const result = pageContent.lines[i].match(regex);
    if (result != null) {
      pageContent.lines[i] = pageContent.lines[i].substr(0, result.index) + "<span class=\"link\" onclick=\"PageManager.page='" + pageContent.lines[i].substr(result.index, 3) + "'\">" + pageContent.lines[i].substr(result.index, 3) + "</span>" + pageContent.lines[i].substr(result.index + 3);
      //console.log(i,pageContent.line[i]);
    }

    //pageContent.line[i] = "12345<span class=\"f" + (Math.floor(Math.random() * 8) + 1) + " b"+(Math.floor(Math.random() * 8) + 1)+"\">" + page + "</span>90123456789012345678901234567890";

  }
  let output = pageContent.lines.join("<br />");

  document.getElementById("content").innerHTML = output;

  window.location.hash = "#" + PageManager.page;
}

export default renderPage
