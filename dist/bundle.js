!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);const a=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory (the)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands (the)","Central African Republic (the)","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands (the)","Colombia","Comoros (the)","Congo (the Democratic Republic of the)","Congo (the)","Cook Islands (the)","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czechia","Côte d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic (the)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands (the) [Malvinas]","Faroe Islands (the)","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories (the)","Gabon","Gambia (the)","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (the)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (the Democratic People's Republic of)","Korea (the Republic of)","Kuwait","Kyrgyzstan","Lao People's Democratic Republic (the)","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands (the)","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (the Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands (the)","New Caledonia","New Zealand","Nicaragua","Niger (the)","Nigeria","Niue","Norfolk Island","Northern Mariana Islands (the)","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines (the)","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation (the)","Rwanda","Réunion","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan (the)","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands (the)","Tuvalu","Uganda","Ukraine","United Arab Emirates (the)","United Kingdom of Great Britain and Northern Ireland (the)","United States Minor Outlying Islands (the)","United States of America (the)","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","Åland Islands"];function i(){return a}function o(e,n,t){const a=document.getElementById(e),o=document.getElementById(n),r=document.getElementById(t);function u(){o.className="error"}a.addEventListener("input",(function(e){!function(){if(!i().includes(a.value))return o.textContent="Country must start with capital letter and exist.",!1;return!0}()&&""!==a.value?u():(o.innerHTML="Good",o.className="valid")})),r.addEventListener("click",(function(e){i().includes(a.value)||""===a.value||(u(),e.preventDefault())}))}function r(e,n,t){const a=document.getElementById(e),i=document.getElementById(n),o=document.getElementById(t),r=/^\d{4,6}$/;function u(){i.className="error"}a.addEventListener("input",(function(e){!function(){if(!r.test(a.value))return i.textContent="Zipcode must be from 4 to 6 digits.",!1;return!0}()&&""!==a.value?u():(i.innerHTML="Good",i.className="valid")})),o.addEventListener("click",(function(e){r.test(a.value)||""===a.value||(i.textContent="Zipcode must be from 4 to 6 digits.",u(),e.preventDefault())}))}!function(e,n,t){const a=document.getElementById(e),i=document.getElementById(n),o=document.getElementById(t),r=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;function u(){return a.validity.valueMissing?(i.textContent="Please fill out this field",!1):r.test(a.value)?a.validity.tooShort?(i.textContent=`Email should be at least ${a.minLength} characters; you entered ${a.value.length}.`,!1):!a.validity.tooLong||(i.textContent=`Email should be less than ${a.maxLength} characters; you entered ${a.value.length}.`,!1):(i.textContent="Entered value needs to be an e-mail address.",!1)}function l(){i.className="error"}a.addEventListener("input",(function(e){u()?(i.innerHTML="Good",i.className="valid"):l()})),o.addEventListener("click",(function(e){u()||(l(),e.preventDefault())}))}("usermail","mailerror","submit"),function(e,n,t){const a=document.getElementById(e),i=document.getElementById(n),o=document.getElementById(t),r=/^[A-Za-z][A-Za-z0-9]*$/;function u(){return a.validity.valueMissing?(i.textContent="Please fill out this field",!1):r.test(a.value)?a.validity.tooShort?(i.textContent=`Name should be at least ${a.minLength} characters; you entered ${a.value.length}.`,!1):!a.validity.tooLong||(i.textContent=`Name should be less than ${a.maxLength} characters; you entered ${a.value.length}.`,!1):(i.textContent="First letter must be english letter, then english letters or numbers.",!1)}function l(){i.className="error"}a.addEventListener("input",(function(e){u()?(i.innerHTML="Good",i.className="valid"):l()})),o.addEventListener("click",(function(e){u()||(l(),e.preventDefault())}))}("username","nameError","submit"),function(e,n,t,a){const i=document.getElementById(e),o=document.getElementById(n),r=document.getElementById(a),u=document.getElementById(t);function l(){return i.validity.valueMissing?(o.textContent="Please fill out this field",!1):i.value==r.value||(o.textContent="Value is not the same as in E-mail field",!1)}function s(){o.className="error"}r.addEventListener("input",(function(e){l()?(o.innerHTML="Good",o.className="valid"):s()})),i.addEventListener("input",(function(e){l()?(o.innerHTML="Good",o.className="valid"):s()})),u.addEventListener("click",(function(e){l()||(s(),e.preventDefault())}))}("usermail-confirmation","usermail-confirmation-error","submit","usermail"),o("usercountry","usercountry-error","submit"),r("userzipcode","userzipcode-error","submit"),function(e,n,t){const a=document.getElementById(e),i=document.getElementById(n),o=document.getElementById(t),r=/^[A-Za-z0-9]*$/;function u(){return a.validity.valueMissing?(i.textContent="Please fill out this field",!1):r.test(a.value)?a.validity.tooShort?(i.textContent=`Password should be at least ${a.minLength} characters; you entered ${a.value.length}.`,!1):!a.validity.tooLong||(i.textContent=`Password should be less than ${a.maxLength} characters; you entered ${a.value.length}.`,!1):(i.textContent="Password must onclude only english letters and numbers.",!1)}function l(){i.className="error"}a.addEventListener("input",(function(e){u()?(i.innerHTML="Good",i.className="valid"):l()})),o.addEventListener("click",(function(e){u()||(l(),e.preventDefault())}))}("userpassword","userpassword-error","submit"),function(e,n,t,a){const i=document.getElementById(e),o=document.getElementById(n),r=document.getElementById(a),u=document.getElementById(t);function l(){return i.validity.valueMissing?(o.textContent="Please fill out this field",!1):i.value==r.value||(o.textContent="Value is not the same as in Password field",!1)}function s(){o.className="error"}r.addEventListener("input",(function(e){l()?(o.innerHTML="Good",o.className="valid"):s()})),i.addEventListener("input",(function(e){l()?(o.innerHTML="Good",o.className="valid"):s()})),u.addEventListener("click",(function(e){l()||(s(),e.preventDefault())}))}("userpassword-confirmation","userpassword-confirmation-error","submit","userpassword")}]);