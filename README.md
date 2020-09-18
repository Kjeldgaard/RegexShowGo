# Regex Show Go README

This is the README for the Visual Studio Code extension named "Regex Show Go".

## Features

When hovering a line in Visual Studio Code, the line text is matched against several regex patterns. If a match is found, a hover box is shown with a link which is created from a match-prefix and the actual match. See Extension Settings section for configuration.

## Requirements

To be updated

## Extension Settings

To use the extension, you must configure a regex match pattern and a match prefix. See configuration example:
* "regex_show_go.config.match": [
    {
        "match_pattern": "WIKI[0-9-]+",
        "prefix": "https://duckduckgo.com/?q="
    },
    {
        "match_pattern": "TEST[0-9-]+",
        "prefix": "https://duckduckgo.com/?q="
    }

If a line contains the word "WIKI-123", the following link is generated "https://duckduckgo.com/?q=WIKI-123" when hovering the line.

## Known Issues

None

## Release Notes

To be updated
