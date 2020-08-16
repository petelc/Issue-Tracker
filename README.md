# Issue-Tracker

# Description
This is my work through the book Pro MERN Stack by Vasan Subramanian. This version i have added Material-UI to the application which is contrary to the book. I might create a second repository and use React Bootstrap as described in the book.

## What I liked about the book and coding this application
/* TO DO */
This is my opinion only and you can take it for what its worth

Generally I liked the book and the way it was written. The content was presented well. 

## What i didn't like about the book and coding this application
/* TO DO */
First off let me say that the following statements do not reflect any dislike or other negative contention on my part

1) I spent a lot of time solving the date issue ***see my submitted issue*** which was kinda irratating. (not enough to try another book :) )

## What I wish was covered or wish I had added to the building of the Issue Tracker

/* TO DO */
This is what i personally want and does not reflect any other intentions except expressing my thoughts

1) I wish testing was put in  
  a) I should have added it to the project and ran the tests as we went along
    1) I wonder if that would have helped me with the issues i chased around

## Issues
I feel that I should talk about the issues that I had while coding and what the work around was. (at least what I remember)

1) The Date fields, created and due, are never formatted to mm/dd/yyyy because the jsonDateReviver function always broke my code. Furthermore when ever I try to call toDateString or toISOString the code explodes and says that created.toDateString() is not a function. I think this is because when the server returns the data the dates are already date objects but I really am just throwing noodles against the wall to see what happens.

2) Currently I am in Chapter10 just completed the Update API section. The code works per se in that the issue updates when running the mutation in the graphql playground but it returns an error stating "message": "Cannot return null for non-nullable field Mutation.issueUpdate.", So hopefully when i update the UI part this doesn't cause me a lot of grief.
