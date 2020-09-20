# Regex Show Go README
This is the README for the Visual Studio Code extension named "Regex Show Go".

## Features
When hovering a line in Visual Studio Code, the line text is matched against one or several regex patterns. If a match is found, a hover box is shown with a link which is created from a match-prefix and the actual match. See Extension Settings section for configuration.

## Extension Settings
To use the extension, you must configure a regex match pattern and a match prefix. See configuration example:
```
"regex_show_go.config.match": [
    {
        "match_pattern": "WIKI[0-9-]+",
        "prefix": "https://duckduckgo.com/?q="
    },
    {
        "match_pattern": "TEST[0-9-]+",
        "prefix": "https://www.imdb.com/find?q="
    }
```
If a line contains the word "WIKI-123", the following link is generated "https://duckduckgo.com/?q=WIKI-123" when hovering the line.

## Release Notes
#### Version 0.1.2
Fix version numbering.

#### Version 0.1.1
Updated README.md

#### Version 0.1.0
Updated extension to meet Marketplace requirements.

#### Version 0.0.1
Initial version with basic regex search, match and generate url link.

## Known Issues
None

## Support
<a href="https://buymeacoff.ee/Kjeldgaard" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
