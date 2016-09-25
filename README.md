# GarbleText  
JavaScript script to replace all alphanumeric text on a webpage with parallel garbled text  
  
Required:  
L> Web browser  
L> Access to the webpage that you want to garble  
  
Garbling text  
(1) Navigate to the webpage that you want to garble the text of.  
(2) Open your browser's JavaScript Console for that page.  
(3) Paste in the text from pixivScrape.js and run it.  
  
[see the JavaScript Console Help section of [https://github.com/sliceofcake/TechnicalHelp](https://github.com/sliceofcake/TechnicalHelp)]  
  
Use case  
I want to give a presentation in which I will be showing a screen capture of a webpage. I want to talk about the layout of the page, but the page has some potentially confidential text on it that I don't want my audience to see. I don't mind that they'll still be able to see letter-count for words or positioning of digits, I feel that it's good enough that the text is garbled while still retaining it's general appearance. I'll run this script on the webpage that I want to show, then I'll take screencaps of the garbled webpage to include in my presentation.  
  
Security Note  
This script intentionally keeps the general structure of the text. For most cases, this is safe, and for most cases, this is what you want. However, you're more-or-less playing a game of Wheel of Fortune with your audience, as the pattern "A'a Aaaaa" could be reasonably back-converted to "I'm Ready", since there aren't that many combinations that could fit that description. If you had the result of a Yes/No vote on the webpage, it would be fairly obvious that the pattern "Aaa" was "Yes" and the pattern "Aa" was "No".  For critically confidential text, you need to take more serious measures to protect the original text, at the cost of appearances.  
  
Completeness Note  
There are many ways of putting text on a webpage. You can include text through dynamically-generated images, the CSS "content" property, the HTML input "placeholder" property, and other ways. This script will address standard cases, and may not cover every case, for complexity reasons. Please always review the result of the garbling before using the garbled page further.  