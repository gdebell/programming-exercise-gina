console.log('HI!');

// 1. Generate two random integers and print their mean, variance, and standard deviation.

// var num1 = Math.round(Math.random()*100);
// var num2 = Math.round(Math.random()*100);
//
// function mean (a, b) {
//   return ((a+b)/2);
// }
// mean(num1, num2);



// 1. Calculate the mean, variance, and standard deviation for a list/array containing 10 random integers
// var test = [10, 9, 8, 7, 6, 5, 6, 11, 20, 1];
//
// function arrayMean (arr) {
//   var total = 0;
//   for (var i = 0; i < arr.length; i++) {
//     total+= arr[i];
//   }
//   return total / arr.length;
// }
// console.log(arrayMean(test));



// 1. Generate twenty random integers from 0 to 100 and print the largest and smallest integers.
// var times = 20;
// function randomTwenty (times) {
//   var mixed = [];
//   for (var i = 0; i < times; i++) {
//     mixed.push(Math.round(Math.random()*100));
//   }
//   mixed.sort();
//   console.log(mixed);
//   console.log(mixed[0]);
//   console.log(mixed[19]);
// }
// randomTwenty(times);



// 1. Generate a single random number, from 0 to 100, then output all the even integers from 0 to the random number.

// var randomNum = Math.round(Math.random()*100);
//
// function evenInt(num) {
//   var evenArr = [];
//   for (var i = 0; i < num; i++) {
//     if(i % 2 == 0  &&  i != 0) {
//       evenArr.push(i);
//     }
//   }
//   console.log('highes number', num);
//   console.log(evenArr);
//   return evenArr;
// }
//
// evenInt(randomNum);


// 1. Generate a single random number, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the random number. If the number is less than 40, output all the odd integers from 0 to 40.

// var randomNum = Math.round(Math.random()*100);
//
// function checkSize (num) {
//   if (num > 40 ) {
//     greater(num);
//   } else {
//     less(num);
//   }
// }
//
// function greater(num) {
//   var bigArr = [];
//   for (var i = 40; i < num; i++) {
//     if ( i % 2 != 0) {
//       bigArr.push(i);
//     }
//   }
//   console.log('num', num);
//   console.log(bigArr);
//   return bigArr;
// }
//
// function less(num) {
//   console.log(num);
//   console.log('less func');
//   var smaArr = [];
//   for (var i = 0; i < num; i++) {
//     if (i % 2 != 0 ) {
//       smaArr.push(i);
//     }
//   }
//   console.log('num', num);
//   console.log(smaArr);
//   return smaArr;
// }
//
// checkSize(randomNum);




// 1. Generate a single random number, from 0 to 100. If the number is greater than 40 then output all the odd integers from that number down to 40. If the number is less than 40, output all the odd integers from that number down to 0.

// var randNum = Math.round(Math.random()*100);
//
// function outArray (num) {
//   console.log('random number', num);
//   if (num > 40) {
//     for (var i = num; i > 40; i-- ) {
//       if (i % 2 != 0 ) {
//         console.log(i);
//       }
//     }
//   } else {
//     for (var i = num; i > 0; i--) {
//       if (i % 2 != 0 ) {
//         console.log(i);
//       }
//     }
//   }
// }
// outArray(randNum);




// 1. **Discount Percentage**: Write a function that takes a dollar amount and a discount percentage and returns the total discount amount. Return a warning if the discount amount is greater than 100 or less that 0 percent. Test the results.

// function price(dollar, sale) {
//   if (sale > 100  || sale < 0 ) {
//     console.log('Warning: Discount amount is not valid!');
//   }
//   console.log(dollar * sale/100);
//   return dollar * sale/100;
// }
// price(100,20);
// 1. Class it up. Wrap a class around the last function. Instantiate the class and call the function. Then use unittests and rspec to test.





// 1. Generate n random integers from 0 to 100, then output them in ascending order.

// function randInt (n) {
//   var ascArray = [];
//   for (var i= 0; i < n; i++){
//     ascArray.push(Math.round(Math.random()*100));
//   }
//   ascArray.sort();
//   console.log(n);
//   console.log(ascArray);
//   return ascArray;
// }
// randInt(8);




// 1. Generate a random number from 1000 to 9999 and output the sum of its digits. For example, if the number is 1049, then the output should be 14.
// var random = Math.floor((Math.random() * (9999 - 1000) + 1000 ));
//
// function sumDig (num) {
//   console.log(num);
//   var numString = num.toString();
//   var sum = 0;
//   for (var i = 0; i < numString.length; i++) {
//     sum += parseInt(numString.charAt(i));
//   }
//   console.log(sum);
//   return sum;
// }
// sumDig(random);





// 1. Generate a random number from 1000 to 9999 and output the sum of its digits, repeatedly, dropping the left-most digit after each iteration, until there is only one digit only. For example, if the number is 1049, then the output should be 14, 13, 13, 9.

// var ranNum = Math.floor(Math.random() * (9999 - 1000) + 1000)
//
// function addList (num) {
//   console.log(num);
//   var numString = num.toString();
//   var sum = 0;
//   for (var i = 0; i < numString.length; i++){
//     sum += parseInt(numString.charAt(i));
//   }
//   for (var j = sum; j > 0; j--){
//     console.log(j);
//   }
// }
// addList(ranNum);







// 1. Generate two random integers from 0 to 100 and output the smallest number such that each shares a least common denominator (aside for 1). For example, 18 and 6 should return 6, while 9 and 4 should return False. Return False if the two numbers are equal.

// var twoNum = createNumb();
// //console.log(twoNum);
// var commonDenominators = checkDem(twoNum);
// //console.log(commonDenominators);
// matchDem(commonDenominators);
// function matchDem (array) {
// 	//console.log(array);
// 	console.log('two number array', twoNum);
// 	var match = [];
// 	if (array.length == 'undefined' || array.length === 0) {
// 		console.log('false');
// 	} else {
// 		for (var i = 0; i < array.length; i++) {
// 			//console.log(array[i]);
// 			if (twoNum[1]%array[i] === 0) {
// 				match.push(array[i]);
// 			};
// 		}
// 	}
// 	console.log('matches!', match);
// }
// function createNumb () {
// 	twoNumArray = [];
// 	var num1 = Math.floor(Math.random() * (100 - 0) + 0 );
// 	//console.log(num1);
// 	var num2 = Math.floor(Math.random() * (100 - 0) + 0 );
// 	//console.log(num2);
// 	if (num1 < num2) {
// 		twoNumArray.push(num1);
// 		twoNumArray.push(num2);
// 	} else {
// 		twoNumArray.push(num2);
// 		twoNumArray.push(num1);
// 	}
// 	return twoNumArray;
// }
//
// function checkDem (array) {
// 	//console.log(array[0]);
// 	//console.log(array[1]);
// 	var denomin = [];
// 	var smallNum = array[0];
// 	for (var i = 2; i < array[0]; i++) {
// 		if (smallNum%i === 0) {
// 			denomin.push(i)
// 		}
// 	}
// 	return denomin;
// }







// 1. Write a function that takes two random integers as arguments and returns the least common multiple.
// var int1 = Math.floor(Math.random());
// var int2 = Math.floor(Math.random());
// console.log(int1);
// console.log(int2);
// function strange (num, min, max) {
//   var arr = [];
//   for (var i = 0; i< num; i ++) {
//     arr.push(Math.floor(Math.random() * max) + min);
//   }
//   console.log(arr);
//   var largest = 0;
//   var smallest = 0;
//   arr.forEach((el) => {
//     if (el >= largest)
//     largest = el
//     if (el <= smallest)
//     smallest = el
//   })
//   console.log(largest, smallest);
//   return largest, smallest
// }
// strange(20, 0, 100);




// function percentage (num, den) {
//   var per = parseInt((num/den) * 100);
//   console.log(per);
//   return per
// }
//
// percentage(5, 20);




// function greater (arr, val) {
//   var gArr = [];
//   arr.forEach((el) => {
//     if (el > val) {
//       gArr.push(el);
//     }
//   })
//   console.log(gArr);
//   return gArr;
// }
// greater([10, 9, 7, 12, 15, 8], 9);




//bubble Sort
// var arr = [34, 203, 3, 746, 200, 984, 198, 764, 9];
//
// function bubbleSort (a) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > a[i+1]) {
//       var temp = arr[i];
//       a[i] = a[i+1];
//       a[i+1] = temp;
//     }
//   }
// }




// Bubble Sort Function
// var arr = [34, 203, 3, 746, 200, 984, 198, 764, 9];
//
// function bubbleSort(items) {
//     var length = items.length;
//     for (var i = (length - 1); i >= 0; i--) {
//         //Number of passes
//         for (var j = (length - i); j > 0; j--) {
//             //Compare the adjacent positions
//             if (items[j] < items[j - 1]) {
//                 //Swap the numbers
//                 var tmp = items[j];
//                 items[j] = items[j - 1];
//                 items[j - 1] = tmp;
//             }
//         }
//     }
// }
// bubbleSort(arr);
// console.log(arr);




// function newArrays (array, num) {
// 	var length = array.length;
// 	var numInArray = length/num;
// 	var unSortArray = [];
//
// 	while (array.length > 0) {
// 		var randomNum = Math.floor(Math.random() * array.length);
// 		var item = array.splice(randomNum, 1);
// 		unSortArray.push(item[0])
// 	}
// 	return unSortArray
// }
//
//
// console.log(newArrays ([1, 2, 3, 4 ], 2));




// var icecream= {
//     flavor: "vanilla",
//     getFlavor : function(){
//       //make this function return icecream.flavor
//       //without using the word: "icecream"
// 			return this.flavor
//     }
// }





//Implement the Fibonacci number calculator in JavaScript. Take a number as //input from the user, and then print out the Fibonacci value for that //number.
// var looping = function(n) {
//    var a = 0, b = 1, f = 1;
//    for(var i = 2; i <= n; i++) {
//        f = a + b;
//        a = b;
//        b = f;
// 			 console.log(f);
//    }
// 	 //console.log(f);
//    return f;
// };
// looping(7);

// console.log(Boolean(10 > 9));




//console.log('The sum of ' + 5 + ' and ' + 7 + ' is ' + parseInt(5 + 7));

// if () {
// 	console.log('it is false');
// }

// false
// null
// undefined
// 0
// ''
// NaN

// var test = 10;
// function scopeChallenge() {
//   console.log(test);
//   var test = 99;
// 	console.log(test);
// }
//
// scopeChallenge();




// var users = [
//     {
//       user_id: 1,
//       name: "Chris Rivers",
//       mention_name: "chris",
//       email: "chris@hipchat.com",
//       title: "Developer",
//       photo_url: "https:\/\/www.hipchat.com\/chris.png",
//       last_active: 1360031425,
//       created: 1315711352,
//       status: "away",
//       status_message: "gym, bbl",
//       is_group_admin :1,
//       is_deleted :0
//     },
//     {
//       user_id: 3,
//       name: "Peter Curley",
//       mention_name: "pete",
//       email: "pete@hipchat.com",
//       title: "Designer",
//       photo_url: "https:\/\/www.hipchat.com\/pete.png",
//       last_active: 1360031425,
//       created: 1315711352,
//       status: "offline",
//       status_message: "",
//       is_group_admin: 1,
//       is_deleted: 0
//     },
//     {
//       user_id: 5,
//       name: "Garret Heaton",
//       mention_name: "garret",
//       email: "garret@hipchat.com",
//       title: "Co-founder",
//       photo_url: "https:\/\/www.hipchat.com\/garret.png",
//       last_active: 1360031425,
//       created: 1315711352,
//       status: "available",
//       status_message: "Come see what I'm working on!",
//       is_group_admin: 1,
//       is_deleted: 0
//     }
//   ]
//
//
// console.log(users[0].email);





// var graphObject = {
//   version:1,
//   graph:{
//     viewport:{
//       xmin:-10,
//       ymin:-3.367158671586716,
//       xmax:10,
//       ymax:3.367158671586716
//     }
//   },
//   expressions:{
//     list:[
//       {
//         id:"1",
//         type:"expression",
//         latex:"y=x",
//         domain:{
//           min:0,
//           max:1
//         },
//         hidden:false,
//         color:"#C0504D",
//         style:"normal"
//       }, {
//         id:"2",
//         type:"expression",
//         latex:"y=2x",
//         domain:{
//           min:0,
//           max:1
//         },
//         hidden:false,
//         color:"#4F81BD",
//         style:"normal"
//       }, {
//         id:"4",
//         type:"text",
//         text:"Access me!"
//       }, {
//         id:"5",
//         type:"expression",
//         latex:"",
//         domain:{
//           min:0,
//           max:1
//         },
//         hidden:false,
//         color:"#8064A2",
//         style:"normal"
//       }
//     ]
//   }
// }
// console.log(graphObject.expressions.list[2].text);





// var speak = function (subject, phrase) {
//   console.log(subject + ' says: ' + phrase);
// }
//
// speak('Scott', 'hey!')
//
// var say = speak;
// say('Gina', 'hello!');







// 1. Write a program that calculates and shows the value of (x to the nth power). Let both integers fall within the range of 2 through 20.
//
// function factorial (a, b) {
// 	if (( a >= 2 && a <=20) && ( b >= 2 && b <=20)) {
// 		var answ = Math.pow(a,b);
// 		console.log(answ);
// 		return answ
// 	} else {
// 		console.log('Your numbers do not fall in the correct range!');
// 	}
// }
//
// factorial(2,2);
// factorial(2, 3);
// factorial(1, 3);
// factorial(0, 22);




// 1. **Triangle**: Write a function that takes a single number as an input and returns that many lines. On the first line there is one '#' character. On the second there are two. And so on.
// This will create a nice triangle.
//
// function triangle (num) {
// 	var paint = [];
// 	for (var i = 0; i < num; i++) {
// 		paint.push('#');
// 		console.log(paint);
// 	}
// }
// triangle(5);




// function compString (stringOne, stringTwo) {
// 	if (stringOne.length != 10  || stringTwo.length != 10  ) {
// 		console.log("Both strings should be 10 characters in length.");
// 	} else {
// 		if (stringOne.charAt(0) === stringTwo.charAt(0) || stringOne.charAt(0) === stringTwo.charAt(1)) {
// 			console.log('TRUE: You have got a match!');
// 		} else {
// 			console.log('FALSE: You do not have a match!');
// 		}
// 	}
// }
// compString('abcdefghij', 'laloiuytre');




// 1. Write a function that takes a paragraph as an argument and returns an array that contains each string as an element.
// function stringToArray (para) {
// 	newArray = [];
// 	splitPara = para.split(' ')
// 	splitPara.map(function(word) {
// 		newArray.push(word);
// 	})
// 	console.log(newArray);
// }
// stringToArray('The pig could fly.')
// stringToArray('The giant hippo was found eatting peanut butter and jelly sandwiches!')





// 1. Write a function that takes an object/hash/dictionary of people (keys) and their subsequent ages as its argument, and then it returns the name of the oldest living person.

// var people = {
// 	 "Scott": 35,
// 	 "Gina": 33,
// 	 "Mike": 65,
// 	 "Irene": 90,
// 	 "Nina": 32,
// 	 "Mason": 3
// };
//
// var morePeople = {
// 	 "Jenn": 42,
// 	 "Gina": 33,
// 	 "Camille": 65,
// 	 "List": 33,
// 	 "Ireneee": 90,
// 	 "Mason": 3
// };
//
// var oldestPerson = findOldest(people);
// var moreOldestPerson = findOldest(morePeople);
// console.log('oldest person in people', oldestPerson);
// console.log('oldest person in morePeople', moreOldestPerson);
//
// function findOldest(people) {
// 	var tempName = '';
// 	var tempAge = 0;
// 	for (var key in people) {
// 		//console.log(key, people[key]);
// 		if (people[key] > tempAge ) {
// 			tempName = key;
// 			tempAge = people[key]
// 		}
// 	}
// 	return tempName
// }


// Then write a function named flatten that takes in one argument, arr, (array of arrays) and returns a new array that combines all of elements of each inner array. For example, given [[1], [2, 3], [4]], then return [1, 2, 3, 4].
// function flatten (arr) {
// 	newArray= [];
// 	arr.map(function(el) {
// 		el.map(function(num) {
// 			newArray.push(num);
// 		})
// 	})
// 	return newArray;
// }
//
// var answer = flatten([[1], [2, 3], [4]]);
// console.log(answer);



// function candies(n, m) {
//   if(m%n === 0) {
//     return m;
//   } else {
// 		return candies(n, m-1);
//   }
// }
//
// var numOfCandies = candies(3, 10);
// console.log(numOfCandies);

// function seatsInTheater(nCols, nRows, col, row) {
//     return (nCols - (col -1)) * (nRows - row);
// }
//
// var seats = seatsInTheater(16, 11, 5, 3)
// console.log(seats);


// function maxMultiple(divisor, bound) {
// 	if(bound%divisor === 0) { return bound;}
// 	return maxMultiple(divisor, bound-1);
// }
//
// var answer = maxMultiple(3, 10);
// console.log(answer);

//
// function circleOfNumbers(n, firstNumber) {
// 	if(firstNumber < n/2) {
// 		console.log('smaller than 5');
// 		return firstNumber + (n/2)
// 	} else {
// 		console.log('greater than 5 or equal');
// 		return firstNumber- (n/2);
// 	}
//
// }
//
// var ans= circleOfNumbers(10, 9);
// console.log(ans);


// function lateRide(n) {
// 	var min =  parseInt(n/60).toString();
// 	//console.log('min', min);
// 	//console.log(min.length);
// 	var minTotal = 0;
// 	for (var j = 0; j < min.length; j++) {
// 		minTotal += parseInt(min[j]);
// 	}
// 	//console.log(minTotal);
//
// 	var sec = n-(min*60)
// 	var secString = sec.toString();
// 	var secTotal = 0;
// 	for (var i = 0; i < secString.length; i++) {
// 			secTotal += parseInt(secString[i])
// 	}
// 	//console.log('sec', secTotal);
// 	var total = minTotal + secTotal;
// 	return total;
// }
//
// answer = lateRide(808);
// console.log('answer', answer);



// function phoneCall(min1, min2_10, min11, s) {
// 	var totalMoney = s;
// 	var totalMin = 0;
// 	var count = 9;
//
// 	if (totalMoney >= min1) {
// 		totalMoney -= min1;
// 		totalMin += 1;
// 	}
// 	console.log('after min1', totalMoney, totalMin);
//
// 	while (totalMoney - min2_10 > 0 && count > 0) {
// 		count -=1;
// 		totalMoney -= min2_10;
// 		totalMin += 1;
// 		console.log('in loop', totalMoney, totalMin, count);
// 	}
//
// 	while ( totalMoney - min11 >= 0 && count === 0 ){
// 		console.log('last while');
// 		totalMoney -= min11;
// 		totalMin += 1;
// 		console.log('after 11 min', totalMoney, totalMin);
// 	}
// 	return totalMin;
// }
//
// var answ = phoneCall(1, 2, 1, 6);
// console.log(answ);


// function knapsackLight(value1, weight1, value2, weight2, maxW) {
//     var totalWeight = maxW;
//     var totalValue = 0;
//
// 		if (value1 > value2) {
// 			if (totalWeight - weight1 >= 0) {
// 				totalWeight -= weight1;
// 				totalValue += value1;
// 			}
// 			if (totalWeight - weight2 >= 0) {
// 				totalWeight -= weight2;
// 				totalValue += value2;
// 			}
// 		}
//
// 		if (value2 > value1) {
// 			if (totalWeight - weight2 >= 0) {
// 				totalWeight -= weight2;
// 				totalValue += value2;
// 			}
// 			if (totalWeight - weight1 >= 0) {
// 				totalWeight -= weight1;
// 				totalValue += value1;
// 			}
// 		}
// 		if (value1 === value2) {
// 			return value1;
// 		}
//
//
// 		return totalValue;
// }
// var ans = knapsackLight(10, 5, 6, 3, 8);
// console.log(ans);




// function tennisSet(score1, score2) {
//   if (score1 === 6 && score2 < 5) { return true; }
//   if (score2 === 6 && score1 < 5) { return true; }
//   if (score1 >= 5 && score2 >= 5) {
//     if ( score1 >= 7 || score2 >=7 ) {
// 			if ( score1 === score2 ) {
// 				return false;
// 			}
// 			if ( score1 > 7 || score2 > 7) {
// 				return false;
// 			}
// 		return true;
//     }
//     return false;
// 	}
// 	rerurn false;
// }
//
// var answer =  tennisSet(7, 7);
// console.log(answer);

// var myObj = {
//    firstName: "Tim",
//    lastName: "Garcia",
//    position: "Instructor",
//    getInfo: function() {
//      return this.firstName + " " + this.lastName + " - " + this.position;
//    }
// };
//
// var obj =  myObj.getInfo();
// console.log(obj);
//
// var anotherObj = {
//   firstName: "Matt",
//   lastName: "Lane",
//   position: "Math Guru/Instructor"
// };
//
// anotherObj.getInfo = myObj.getInfo;
// anotherObj.getInfo();  // returns "Matt Lane - Math Guru/Instructor"

// function Student(name, studentId) {
//     this.name = name;
//     this.studentId = studentId;
//     if (studentId > 1000) {
//       this.className = "Full Stack Immersive";
//     } else {
//       this.className = "Data Science Immersive";
//     }
// }
//
// var fsiStudent = new Student("Tim", 1050);
// var dsiStudent = new Student("Matt", 903);
// var gina = new Student("Gina", 1005);
// console.log(fsiStudent);
// console.log(dsiStudent);
// console.log(gina);

// function Dog(name, type, address, age) {
// 	this.name = name;
// 	this.type = type;
// 	this.address = address;
// 	this.age = age;
// }
//
// Dog.prototype.speak = function () {
// 	var sounds = ["bark", "woof", "oink, oink", "grrrr"];
// 	var rand = Math.floor(Math.random() * sounds.length);
// 	return this.name + " says " + sounds[rand] + "!!";
// }
//
// Dog.prototype.getDogTag = function () {
// 	var line1 = "##################";
// 	var line2 = "# " + this.name + " #";
// 	var line3 = "##################";
// 	return line1 + line2 + line3;
// }
//
//
// var meatball = new Dog("Meatball", "Terrier", '101 Bark Ave', 3);
// var myDog = new Dog("Tiny", "Bull Mastiff", "111111111111 Market Street", 1);
// var popcorn = new Dog("Popcorn", "Terrier", "102 Bark", 2);
// console.log(popcorn.getDogTag());
// console.log(popcorn.toString());
// console.log(myDog.name);
// console.log(myDog.age);
// console.log(meatball.speak());
// console.log(popcorn.speak());
//console.log(popcorn.speak === meatball.speak);

// var a = function boo (x, y, z) {}
// console.log(boo.length);
// console.log(a.name);

// function encloseInBrackets(inputString) {
// 	return '"' + '(' + inputString + ')' + '"';
// 	// var newString = inputString.slice(0,inputString.length);
// 	// return '"' + '(' + newString + ')' + '"';
// }
//
// var answer = encloseInBrackets("abacaba")
// console.log(answer);
//
//
//
// What is the best way to solve:
//
// - input: a string "Hello World!"
// - output: same string but each letter styled with a color of the rainbow in order

// function findShort(s){
//   var senArr = s.split(" ");
//   var shortest = 100;
//   var word;
//   for (var i = 0; i < senArr.length; i++) {
//     wordlen = senArr[i].length;
//     if(wordlen < shortest) {
//       shortest = wordlen;
//       word = senArr[i];
//     }
//   }
//   return word;
// }

// function findShort(s) {
//   var word = s.split(' ');
//   var item = word.sort(function(a, b) {
//   return b.length - a.length;
//   })
//   var lastWord = item.pop();
//   item.length;
// }
// var shortest = findShort("hello my name is gina");
// console.log(shortest);

// 1. **Time Difference**: Write a function that takes two times in hours and minutes and returns the difference.




// function timeDiff(hour, minutes) {
//   var toMin = hour * 60;
//   if (minutes > toMin) {
//     return minutes - toMin;
//   } else if (minutes < toMin) {
//     return toMin - minutes;
//   } else {
//     return 0;
//   }
// }
//
// console.log(timeDiff(1, 60) + ' No time difference!');
// console.log(timeDiff(1, 50) + ' minutes');
// console.log(timeDiff(1, 80) + ' minutes');


// 1. **Reverse**: Write a function that takes a string as an argument and returns the string in reversed order. Test if the string is the same reversed (Palindrome).
// function reverse (myString) {
//   var newArray = [];
//   var newString = myString.split('');
//   var newStringNum = myString.split('');
//   for (var i = 0; i < newStringNum.length; i++) {
//     newArray.push(newString.pop());
//   }
//   var finalString= (newArray.join()).replace(/,/g , "");
//   if (finalString == myString) {
//     console.log('You have a palidrome!');
//   }
//   return finalString;
// }
// console.log(reverse('racecar'));
// console.log(reverse('hello'));



// 1. **Password Generator**: Write a function that takes an integer as an input and returns a random password - with upper and lowercase letters, integers, and characters - the length of the integer.
// function randomPassword(num) {
//   var code = '';
//   var options = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*&%$#@!';
//   for (var i =0; i < num; i++) {
//     code += options.charAt(Math.floor(Math.random()*options.length));
//   }
//   return code;
// }
// console.log("Your random password of length 5 is " + randomPassword(5));
// console.log("Your random password of length 10 is " + randomPassword(10));



// 1. **Time Convert**: Write a function that takes an integer then returns the number in hours and minutes. For example, 63 should return 1:3.
// var timeConv = function (time) {
//   var hour = parseInt(time/60);
//   var minutes = parseInt(time - (hour*60));
//   return hour + ':' + minutes
// }
// console.log('time: ' + timeConv(123));  //2:3
// console.log('time ' + timeConv(240));   //4:0
// console.log('time ' + timeConv(93));   //1:33


// 1. **Longest Word**: Write a function that takes a string and returns the longest word in the string.

var longWord = function(someString) {
  return someString;
}

var answer = longWord('Hello to the world.');
console.log(answer);
