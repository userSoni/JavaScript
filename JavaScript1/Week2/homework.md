## Homework Week 2

>[Here](/Week2/README.md) you find the readings you have to complete before the third lecture.

## Step 1: Recap/Read

- Have a look at [The Secret Life of JavaScript Primitives](https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)
- Go through the review of [last week](/Week1/REVIEW.md) (Work in progress, update this week :wrench:)
- Go through the review of [this week](/Week2/REVIEW.md) (work in progress, update this week :nut_and_bolt:)

## Step 3: Rover the Robot (fun side thing)

Go and try out this cool game: [roverjs.com](http://roverjs.com), written by one of our HYF teachers, Joost Lubach. There are different levels, see how far you can get!


## Eye Scream - Goes Global!
Following the massive success of Eye Scream's first couple of products things have been quite hectic at Eye Scream's shared office space. The phone is constantly ringing from journalists wanting to interview the genius behind the success and the greatest developers want to work for you. Wired wrote an article with the headline "I Scream for more from Eye Scream"

BUT people are asking: What will be the next product that truly define Eye Scream as the startup of the century?

As always Eye Scream starts by helping people fix their problems. So lets venture out into the real world and see what we find:

### EZ Horoscope



## Step 3: **Finish basic freeCodeCamp challenges:**

Go back to FreeCodeCamp, start where you left of and finish the rest of the Basic JavaScript challenges.

Please make sure you REALLY understand the exercises below:
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/multiply-two-decimals-with-javascript/
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/store-multiple-values-in-one-variable-using-javascript-arrays/
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/build-javascript-objects/
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/add-new-properties-to-a-javascript-object/
- https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/delete-properties-from-a-javascript-object/

```
How to hand in your homework:
• Upload your homework in your "hyf-javascript1" Github repository. Make sure to create a new folder "week2" first. 
• Upload your homework files inside the week2 folder and write a description for this “commit”.
• Your hyf-javascript1/week2 should now contain all your homework files.
• Place the link to your repository folder in Trello.
```

:star: Additional resources and review: [here](/JavaScript1//Week2/REVIEW.md) (work in progress):star:

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
