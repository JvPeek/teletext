<?php
header('Content-Type: application/json');

$charset = json_decode(file_get_contents('../../fonts/EuropeanTeletext.json')); // Valid Char-Array

$page = getPageNum();
$pageContent = readJSON($page);
$pageContent = checkForFields($pageContent);
$pageContent = setContents($pageContent);
$pageContent = stripForTemplate($pageContent);
//echo (json_encode($pageContent));

writeJSON($page,json_encode($pageContent,JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE));

function readJSON($page) {
  // reads the JSON file from disk
  $filepath = 'templates/' . $page . '.json';
  if (file_exists($filepath)) {
    $file = file_get_contents($filepath);
  } else {
    return false;
  }

  return json_decode($file);
}
function checkForFields($pageContent) {
  //iterates over the requested changes and applies them.

  return $pageContent;
}
function writeJSON($page, $json) {
  // writes the new JSON file to disk
  $fp = fopen($page . '.json', 'w');
  fwrite($fp, $json);
  fclose($fp);
}

// mommy's little helper pills go here:
function pageIsValid($page) {
  if ($page >= 100 && $page < 900) {
    return true;
  }
  return false;
}

function validChars($text) {
   global $charset;
   for($i=0;$i<mb_strlen($text,'utf8');$i++) {
     if(!in_array(mb_substr($text,$i,1,'utf8'),$charset)) {
       $text = mb_substr($text,0,$i,'utf8') . '?' . mb_substr($text,$i+1,mb_strlen($text,'utf8')-$i,'utf8');
     }
   }
   return $text;
}

function stripForTemplate($pageContent) {
  unset($pageContent->dynamicSections);
  //echo(json_encode($pageContent));
  return $pageContent;
}
function setContent($pageContent, $line ,$from, $to, $string, $orientation) {
  $thisLine = $pageContent->lines[$line];
  $string = validChars($string); // Text pruefen ob Chars im Zeichensatz
  $string = mb_substr($string,0,$to-$from,'utf8'); // Zu langen Text kuerzen
  $textlen = mb_strlen($string,'utf8');  // Strlen
  if ($orientation == "left") {
    $pageContent->lines[$line] = substr($thisLine,0,$from) . $string . substr($thisLine,$from + $textlen);
  }
  if ($orientation == "right") {
    $fillSpace = $to - $from - $textlen;
    echo $fillSpace;
    $pageContent->lines[$line] = substr($thisLine,0,$from+$fillSpace) . $string . substr($thisLine,$from + $textlen+$fillSpace);
  }
  return $pageContent;
}
function setContents($pageContent) {
  foreach($pageContent->dynamicSections as $key => $value) {
    if (isset($_GET[$value->id])) {
      $line = $_GET[$value->id];
      $pageContent = setContent($pageContent, $value->row , $value->from, $value->to, $line,  $value->align);
    }

  }
  return $pageContent;
}
function getPageNum() {

  if (!isset($_GET["page"])) {
    exit ("nope");
  }
  $page = $_GET["page"];
  if (pageIsValid($page) == false) {
    exit ("ungültige Seitennummer");
  }
  return $page;
}

?>
