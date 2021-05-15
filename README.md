# Regex Show Go README
This is the README for the Visual Studio Code extension named "Regex Show Go".

## Features
When hovering a line in Visual Studio Code, the line is matched against one or several regex patterns. If a match is found, a hover box is shown with a link which is created from a match-prefix and the actual match and a match-postfix. See Extension Settings section for configuration.

## Extension Settings
To use the extension, you must configure a regex match pattern, match prefix, and match postfix. Note, for backward compatibility, if "search_at" is not defined, the default value is "false".

Configuration example:
```
"regex_show_go.config.match": [
    {
        "match_pattern": "TEST[0-9-]+",
        "prefix": "https://www.google.com/search?q=",
        "postfix": "-test",
        "search_at": false
    },
    {
        "match_pattern": "WIKI",
        "prefix": "https://en.wikipedia.org/wiki/",
        "postfix": "",
        "search_at": true
    }]
```
Example 1:
Hovering a line containing the text "TEST-1234", will generate the following link "https://www.google.com/search?q=TEST-1234-test".

Example 2:
Hovering a line containing the text "WIKI#test#", will generate the following link "https://en.wikipedia.org/wiki/test". Note, "match_pattern" is not included in the generated URL.

## Release Notes
#### Version 1.0.4
- Fix vulnerability: Bump lodash from 4.17.19 to 4.17.21

#### Version 1.0.3
- Fix underscore.sting vulnerability: https://github.com/advisories/GHSA-v2p6-4mp7-3r9v

#### Version 1.0.2
- Fix SSRI vulnerability: https://github.com/advisories/GHSA-vx3p-948g-6vhq

#### Version 1.0.1
- Security fixes. No functional changes.

#### Version 1.0.0
- [Feature] Possibility to leave match out of the generated URL. See the section "Extension Settings".

#### Version 0.2.0
- [breaking change] Added 'postfix' string. Update extension configuration with 'postfix' field
- Added icon.

#### Version 0.1.2
- Fix version numbering.

#### Version 0.1.1
- Updated README.md

#### Version 0.1.0
- Updated extension to meet Marketplace requirements.

#### Version 0.0.1
- Initial version with basic regex search, match and generate url link.

## Known Issues
None

## Support
<a href="https://buymeacoff.ee/Kjeldgaard" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## Credits
Icons made by <a href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx">xnimrodx</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
