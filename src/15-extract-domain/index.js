/*
URL: https://www.codewars.com/kata/extract-the-domain-name-from-a-url-1/train/javascript

Instructions:
Extract the domain name from a URL

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

*/

/*
Notes:
- 
*/

/*
Top Result:
*/
const regex = /(?:http[s]{0,1}:\/\/){0,1}(?:www\.){0,1}([\w-]*)(?:\.\w{2,3})*[/\w.-]*/i;

function domainName(url) {
  return url.match(regex)[1];
}

module.exports = { domainName };
