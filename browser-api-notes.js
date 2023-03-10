/* 
==> to change test of any site
        document.body.contentEditable = True
*/

/* 
    ==== Local Storage ====

localStorage.setItem('key', 'value')
localStorage.getItem('key')
localStorage.removeItem('key')

localStorage.clear()
localStorage.length

****** for object ==> use JSON.stringify(object) to convert object to string
****** for object ==> use JSON.parse(object) to convert string to object


*/

/* 
        === session storage ===
*/

/* 
                             cookie ------      local storage ------ session storage
    Expires                 -Manually set -     never           - on tab close 
    storage location        -browser & server  -browser only    - browser only
    sent with requests      - yes               - no            - no
    capacity                - 4kb               - 10mb          - 5mb
    browser                 -HTML4/HTML5        -HTML5          - HTML5

*/