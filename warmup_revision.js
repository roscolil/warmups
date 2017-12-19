// Check for palindromes
// Return true if the given string is a palindrome. Otherwise, return false.
//
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// var palindrome = 'bar an arab';
// var palindromeArr = palindrome.split('');
// var palindromeReverse = palindrome.split('').reverse();
//
// if (palindrome === palindromeReverse) {
//   console.log('true');
// } else {
//   console.log('false');
// }

//-----------------------------------------------------------

// Add each random combo that gets generated into an array. When the array contains 5 random combos, print them out in order with a number prefixing each one e.g.
//
// 1. Skynet for Pandas
// 2. Playboy for Coffee Shops
// 3. Netflix for Pets
// 4. Fitbit for Funeral Homes
// 5. KickStarter for Pounding Jagger Bombs

// var thisArray = ["Skynet","Digital Music Distribution",
// "FitBit","Realtime Data","ManPacks","Landing Page",
// "Conversion Funnel","Social Network","Airbnb","SnapChat",
// "Bang With Friends","HTML5 App","Google Analytics","Mapreduce Query",
// "Node.js Server","KickStarter","Match.com","Adultfriendfinder",
// "Pinterest","Amber Alert System","Groupon","Appstore","Digital Magazine",
// "Distributed Social Network","Quadcopter","Daring Fireball",
// "Content Distribution Network","Analytics Platform","OpenTable",
// "LinkedIn","Brick and Mortar Solution","Aggregator","Social Game","jQuery Plugin","Game-based Incentive","Foursquare","YouTube","WeedMaps","Texts From Last Night","Ponzi Scheme","1-800-Flowers","Cash4Gold","Online Marketplace","Viral Marketer","Wearable Computer","Google Glass App","Facebook Marketplace","Zivity","Playboy","Cloud Storage Provider","Kindle Fire App","Pandora","Green Tech Program","Eco-Friendly Marketplace",
// "Netflix","Amazon","Zappos","Reddit","Enron","Wordpress","iPhone App","Android App","Meme Generator","Crowdsourcing App","Mac App","SEO Optimizer","Apartment Guide","Social CRM","Database Abstraction Layer","Microblogging Service","Product Curation Service","API","New Social Platform","Tumblr","Deal Finder","CPA Ad Network","Collaborative Filter","Shopping Site","Digg 2.0",
// "Recommendation Engine","News Recommender","Neural Network","Tesseract OCR engine","Unreadable CAPTCHA","Mobile Ecosystem","Flickr","Salesforce.com","Twitter Filter","Wikipedia","Yelp"];
//
// var thatArray = ["Facebook Platform","Erlang Enthusiasts","Ex-Girlfriends",
// "Mitt Romney's Hair","Laundromats","Celebrity Gossip","Endangered Species","Pandas","Middle Schoolers","Alpha Phi Girls","Funeral Homes","Chinese Take-out","Ex-Convicts","Fast Casual Restaurants","Marketers","Qualifying Leads","Funeral Homes","Farmers","Cougars","Pilots","Gynecologists",
// "Cracked iPhone Apps","Stolen Goods","Adult Dancers","People Who Hate Groupon","Hunters","Sysadmins","Bath Salts","Nootropics","California","Government Corruption","Political Attack Ads","Whiskey Lovers","Parking Tickets","Highway Accidents","Traveling","Airlines","Presentation Tools","Your Boss","Ponzi Schemes","Your Finances","Restroom Attendants","Your Aquarium","Your Cat's Litter Box","Pets","Alcoholics",
// "Camp Counselors","Nature Blogs","World of Warcraft","Models","Family Guy Enthusiasts","The Army","Cheap Vodka","Tech Incubators","Star Trek Conventions","Presentation Tools","Small Businesses","Beer","Nightclub Lines","Semi-Active Volcanoes", "Sanctimonial Artifacts","Traveling Abroad","Your Mom","Billionaires","Happy Hours","Ugg Boots","The Homeless","Blacking Out","Red Wine","Happy Families","Social Outcasts",
// "Surgeons","Pounding Jagger Bombs","Textbooks","Coffee Shops","Baristas"];
//
//
//
// for (var i = 1; i <= 5; i++) {
//   var thisRandom = thisArray[Math.floor(Math.random() * thisArray.length)];
//   var thatRandom = thatArray[Math.floor(Math.random() * thatArray.length)];
//
//   console.log(i + '. ' + thisRandom + ' for ' + thatRandom);
// }

//-----------------------------------------------

// Print out all the leap years in the last 100 years.
//
// For numbers between 0 and 200:
// a) print out multiples of 7.
// b) print out every second odd number.
// c) print out all prime numbers.

// var year = 2004;
//



// if (year % 4 === 0)  {
//   console.log('This is a leap year');
// } else if (year % 100 === 0 && year % 400 === 0) {
//   console.log('This is a leap year');
// } else {
//   console.log('This is not a leap year');
// }

//-----------------------------------------------

// for (var i = 0; i <= 200; i++) {
//   if (i % i === 0) {
//     console.log(i);
//   }
// }



//--------------------------------------------------

// Write a program that creates a string that represents an 8×8 grid, using new- line characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. Passing this string to console.log should show something like this:
//
// # # # # # # # #
//  # # # # # # # #
// # # # # # # # #
//  # # # # # # # #
//
// bonus When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. Then, define a variable 'symbol' that generates the board using the specified character instead.

var columns = 8;
var rows = 8;
var symbol = '#';
var board = '';

for (var i = 2; i <= rows; i++) {
  if (i % 2 === 0) {
    var pattern = symbol + ' ';
  } else {
    pattern = ' ' + symbol;
  }
  board += pattern.repeat(columns) + '\n';
}
console.log(board);
