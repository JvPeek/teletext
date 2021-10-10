import PageManager from '../pageManager.js'

const updateHeadline = () => {
  let output = " ";
  if (nextPage == undefined)  {
    output += PageManager.page + " ";
  } else {
    output += nextPage + " ";
  }

  for (let i = output.length-2; i<3;i++) {
    output += " ";
  }
  output += PageManager.page + "   ";
  output += "JvPeek TV";
  let time = new Date;
  let timeString = time.toLocaleDateString('de-DE', { year: '2-digit', month: '2-digit', day: '2-digit' })
  timeString += " " + time.toLocaleTimeString('de-DE', {hours: '2-digit', minutes: '2-digit', seconds: '2-digit'})

  let spaces = "";
  for (let i = 0; i<(40-timeString.length-output.length);i++) {
    spaces += " ";
  }
  output += spaces + timeString;
  document.getElementById("headline").innerHTML = output;
  //history.pushState({}, null, "#" + PageManager.page);
  //TODO: use this output to actually set the headline hidden functionality bad >:(
  return output
}

export default updateHeadline
