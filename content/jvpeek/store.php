<?php
header('Content-Type: application/json');
$page = getPageNum();

$pageContent = readJSON($page);
$pageContent = checkForFields($pageContent);
$pageContent = setContents($pageContent);
$pageContent = stripForTemplate($pageContent);
echo (json_encode($pageContent));
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
  };
  return false;
}
function stripForTemplate($pageContent) {
  unset($pageContent->dynamicSections);
  //echo(json_encode($pageContent));
  return $pageContent;
}
function setContent($pageContent, $line ,$pos, $string, $orientation) {
  $thisLine = $pageContent->lines[$line];
  $pageContent->lines[$line] = substr($thisLine,0,$pos) . $string . substr($thisLine,$pos + strlen($string));
  return $pageContent;
}
function setContents($pageContent) {
  //var_dump($pageContent->dynamicSections);

  foreach($pageContent->dynamicSections as $key => $value) {
    if (isset($_GET[$value->id])) {
      //var_dump($value);
      $pageContent = setContent($pageContent, $value->row , $value->from, $_GET[$value->id],  $value->align);

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
