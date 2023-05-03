
<?php
header('Content-Type: application/json; charset=utf-8');

function parseEntry($entry)
{
    $days = array(
        "MO" => "monday",
        "TU" => "tuesday",
        "WE" => "wednesday",
        "TH" => "thursday",
        "FR" => "friday",
        "SA" => "saturday",
        "SU" => "sunday"
    );
    $thisEntry = explode("\n", $entry);
    $thisEntryArray = array();
    foreach ($thisEntry as $key => $thisEntryLine) {
        $thisLine = explode(":", $thisEntryLine);
        $thisEntryArray[$thisLine[0]] = $thisLine[1];
    }
    $now = new DateTime('now');
    $day = explode("BYDAY=", $thisEntryArray["RRULE"])[1];
    $time = explode("T", $thisEntryArray["DTSTART;TZID=/Europe/Berlin"])[1];
    $nextOccasion = new DateTime("next " .  $days[$day] . " " . substr($time, 0,4));
    
    if ($now->modify("+1 week") < $nextOccasion) {
        $nextOccasion->modify("-1 week");
    }
    return array("summary" => $thisEntryArray["SUMMARY"], "time" => $time, "day" => $day, "next" => $nextOccasion->format("c"),"nextRaw" => $nextOccasion, "nextUnix" => $nextOccasion->format("U"));
}
$url = "https://api.twitch.tv/helix/schedule/icalendar?broadcaster_id=549112855";
$file_contents = file_get_contents($url);
$events = explode("BEGIN:VEVENT", $file_contents);
$eventList = array();

foreach ($events as $key => $event) {
    if ($key == 0) {
        continue;
    }
    $eventList[$key] = parseEntry($event);

}

usort($eventList, function($a, $b) {
    return $a['nextRaw'] <=> $b['nextRaw'];
});
echo(json_encode($eventList[0]));
?>