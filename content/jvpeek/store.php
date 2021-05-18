<?php
function pageIsValid($page) {
  if ($page >= 100 && $page < 900) {
    //return "true";
    return true;
  };
  //return "false";
  return false;
}
if (!isset($_GET["page"])) {
  exit ("nope");
}
$page = $_GET["page"];
if (pageIsValid($page) == false) {
  exit ("ungültige Seitennummer");
}
$fp = fopen($page . '.json', 'w');
fwrite($fp, "aaaaa");
fclose($fp);

 ?>
