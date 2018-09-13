## Homework Week 2

>[Here](/Week2/README.md) you find the readings you have to complete before the third lecture.

## Step 1: Recap/Read

- Have a look at [The Secret Life of JavaScript Primitives](https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)
- Go through the review of [last week](../Week1/review.md) (Work in progress, update this week :wrench:)
- Go through the review of [this week](../Week2/review.md) (work in progress, update this week :nut_and_bolt:)


## Step 2: Smart-ease - Goes Global!
Following the massive success of Smart-ease's first couple of products things have been quite hectic at Smart-ease's shared office space. The phone is constantly ringing from journalists wanting to interview the genius behind the success and the greatest developers want to work for you. Wired wrote an article with the headline "Smart-ease as good as Smarties"

BUT people are asking: What will be the next product that truly define Smart-ease as the startup of the century?

As always Smart-ease starts by helping people fix their problems. So lets venture out into the real world and see what we find:

### CactusIO-interactive (Smart phone usage app)
> After a long day you come home to relax. The first thing you do is smartphone. What if we could help users manage their smart phone usage?

Its going to work like this: A user can add activities on his smart phone. Then he can get a status on how his smartphone usage is going. 

Lets create the first part of the functionality that is adding activities.

Create a variable called activities that stores all activities of the day. What type of variable would you think would make sense?
Create a function called addActivity. It should have three paramters: date, activity and duration. The date should be a string, the activity a string and the duration a number. To save the activity push an object that contains the date, the activity and the duration as seperate key, value pairs to the activities variable. 

Now a user can add a activity by writing:
```
addActivity('23/7-18', 'Youtube', 30);
```

Just adding activities wont help the user very much, we need to add some functionality to show the user how his smart phone usage is going.

Create a function called getStatus with a paramtere called activities. This activities variable should be the one we created in the start. This function should use the activities parameter and return a string saying the following:
"You have added 3 activities. They amount to 78 min. of usage"
```
getStatus(activities);
```
Now what happens if we call get status and activities is empty? We need to take that into consideration: If activities is empty log out a string that says: "Add some activities before calling getStatus"  

What if a user wants to set a limit for smartphone usage. When he calls getStatus and the users usage is above the limit. Log out: "You have reached your limit, no more smartphoning for you!"


Come up with some feature you think would be helpful for this app.

EXTRA
* Lets improve the addActivity, so that we dont need to specify the date, but the function automatically figures out what the date is. Check out this link: https://stackoverflow.com/a/34015511
* Improve the getStatus function by only showing the number of actitivies for that specific day. 
* Create a function for seeing what activities the user spends the most time on. 



### NOnoN0nOYes (Note taking app)
> You are sitting at a meeting. A guy is presenting some interesting thought that you want to write down. You check your bag, but realise that you forgot to bring your notepad. Hmm you check the internet for an online solution. But you need to signup for them all, too bad... Maybe this could be a worthwhile problem so solve. Lets create a simple and easy to use notepad.

The first thing we will create is the functionality to save a note:
Create a variable called notes and assign it to an empty array.
Create a function called addNote. The addNote has two parameters: note and noteId. The note parameter is a string. and the noteId is a number.
The addNote function shall push an object to the notes array. This object has two keys: note and noteId, that corresponds to the parameters. The value of the keys should be the value of the corresponding parameters. 

Now a user can add a note, but what if a user wants to see a specific note, but only remembers the id? Lets create that functionality for him:
Create a function called getNoteFromId. The function has one parameter called id. When calling this function with an id it should return the relevant note object that corresponds to the id. If no id is specified or if the id is not a number, log out an error string. 
Hint: Use a for loop.

Now a user can both add and get a note. What if the user just wants to read all his notes? Lets also create that functionality:
Create a function showAllNotes. When calling it the function should log this string out for every note:
"The note with id: 1, has the following note text: "some example note"."

Suddenly you get this great idea for making the note app even better! 

Come up with a unique feature you think would make this app better.

---

So can smart-ease do it and rise to the challenge?? You will find out in the next homework!

## Step 3: **Finish basic freeCodeCamp challenges:**
Go back to FreeCodeCamp, start where you left of and finish the rest of the Basic JavaScript challenges.

Please make sure you REALLY understand the exercises below:
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/multiply-two-decimals-with-javascript/
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/store-multiple-values-in-one-variable-using-javascript-arrays/
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/build-javascript-objects/
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/add-new-properties-to-a-javascript-object/
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/delete-properties-from-a-javascript-object/


## Step 4

**1**   
Today is Sunday and you ask your friend in how many days you are meeting. If the friend says
I will see you in 9 days. The output should be Tuesday.

You should get the today's day from the system.

So typical console output is:


``Today is: Sunday``    
``How many days to meet : 9``  
``We are meeting on : Tuesday``  



Hint: ask each other for help/ask the right questions to the mentors.

**2**  

1. Write a JavaScript program
    - Create an object of ``Students`` with properties: ``firstName``, ``lastName``, ``address``, ``telephone``, ``postCode``, ``course``, ``grade``.
    - Create array of objects of students that reflects  your class. Give random grades to each students
    anything between 60 and 95. Makes sure students names reflects your class mates. Assume everybody
    lives in Copenhagen area.
    - Create a function for finding average class grade.
    - Create a function for finding student who has got the lowest grade. Put an encouraging message.
    - Create a function for for finding student who got the highest grade. Put a celebration message.

2. Write a JavaScript program which iterates the integers from 1 to 1000. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
For numbers which are multiples of both three and five print "FizzBuzz".

3. Write a JavaScript program to construct the following pattern, using a nested for loop. This might be bit of a challenge but read on nested for loop.
    ````js
        *
        * *
        * * *
        * * * *
        * * * * *
        * * * * * *
    ````


**3 (Challenge - only do this one once you have finished 1 and 2). Please work closely with your pair we identified in class.**

I would strongly recommend play the game couple of times and adjust the step below if 
necessary. See also the flow chart we gave you.

1. Create an object of ``card``
2. Create an object of ``player`` with the following : ``name``, ``age``, ``winner``
3. Create an object for ``game`` with the following variables: array of four players and four arrays of cards.
4. Each array belongs to one player.
5. Create a function to distribute the cards to the four arrays.
6. Take the next player in the array. 
7. Find cards with highest frequency.
8. Go to the next player and see if the player has the card you want
9. If it does continue and go to 7. If not go to 6.
10. If at any point there is one happy family in one of the array change the winner key to "true"
declare winner.


## Step 5: Rover the Robot (fun side thing)
Go and try out this cool game: [roverjs.com](http://roverjs.com), written by one of our HYF teachers, Joost Lubach. There are different levels, see how far you can get!

## Step 6: Hand in Homework:
Steps:
* Inside the hyf-homework repo in the folder JavaScript1 create a folder called Week2. Here you can commit your homework files!
* The folders follow the same structure as the javascript modules!
* To finish the homework use the link in the top of your classes slack channel. 
---

And thats it your are done 🎉