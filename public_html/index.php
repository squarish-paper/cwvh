<?php
    header('Location: index.html');
    $fh = fopen('/tmp/track.txt', 'a');
    fwrite($fh, $_SERVER['REMOTE_ADDR'] . ' ' . date('c') . "\n");
    fclose($fh);
?>