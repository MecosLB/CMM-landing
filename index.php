<?php

$sections = [
    'cursor',
    'pre-loader',
    'top',
    'protokol',
    'members',
];

$main = file_get_contents('./index.html');

if(!function_exists('load_page')) {
    function load_page() {
        // Reference to global vars
        global $sections, $main;

        foreach ($sections as $section) {
            // Get component content
            $sectionContent = file_get_contents('./_components/' . $section . '.html');
            // Replace in main.html
            $main = str_replace('{% ' . $section . ' %}', $sectionContent, $main);
        }
        // Load content
        echo $main;
    }
}

load_page();