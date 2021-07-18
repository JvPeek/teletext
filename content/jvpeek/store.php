<?php
header('Content-Type: application/json');
function readJSON($page) {
  // reads the JSON file from disk
  $file = file_get_contents($page . '.json');

  return json_decode($file);
}
function checkForFields($pageContent) {
  //iterates over the requested changes and applies them.

  return $pageContent;
}
function writeJSON($page, $json) {
  // writes the new JSON file to disk
  $fp = fopen($page . '_test.json', 'w');
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
if (!isset($_GET["page"])) {
  exit ("nope");
}
$page = $_GET["page"];
if (pageIsValid($page) == false) {
  exit ("ungültige Seitennummer");
}
$pageContent = readJSON($page);
$pageContent = checkForFields($pageContent);

writeJSON($page,json_encode($pageContent,JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE));

?>
