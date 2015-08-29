# Gmail Domain Highlighter

Automatically highlights email addresses based on their domain in Gmail.

You can define three domain RegEx patterns (including negation) to highlight email address in red, blue or green.

*Example:*
Ever accidentally emailed somebody outside of your company? Now you can make sure that external addresses look clearly different to avoid this problem.
Simply mark all email addresses outside of your company as red, use the following negated RegEx Pattern:
```
^((?!(company.com|companyalias.com)).)*$
```
where company.com and companyalias.com are email domains of your company.

This extension is available in the Chrome Webstore at:
https://chrome.google.com/webstore/detail/gmail-domain-highlighter/ajfgpjfndlbicmphdbgbhcfjmmbkcbpa
