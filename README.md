# Issue-Tracker

# Description
This is my work through the book Pro MERN Stack by Vasan Subramanian. This version i have added Material-UI to the application which is contrary to the book. I might create a second repository and use React Bootstrap as described in the book.

---

## What I liked about the book and coding this application

*This is my opinion only and you can take it for what its worth*

Generally I liked the book and the way it was written. The content was presented well. 

---

## What i didn't like about the book and coding this application

*First off let me say that the following statements do not reflect any dislike or other negative contention on my part*

1) I spent a lot of time solving the date issue ***see my submitted issue*** which was kinda irritating. (not enough to try another book :) )

---

## What I wish was covered or wish I had added to the building of the Issue Tracker

*This is what i personally want and does not reflect any other intentions except expressing my thoughts*

1) I wish testing was put in  
  a) I should have added it to the project and ran the tests as we went along  
    1) I wonder if that would have helped me with the issues i chased around

---

## Changes to what i have been working with

*This is solely a shift in UI Libraries*

I had decided to use React Material-UI. I have to say that i did like it for the most part. I did have to do a lot of work to make it work within the current project.

I have decided to shift gears and remove the Material-UI code and replace it with bootstrap which is covered in the book and I am already somewhat familiar with it.

## Issues

I feel that I should talk about the issues that I had while coding and what the work around was. (at least what I remember)

1) The Date fields, created and due, are never formatted to mm/dd/yyyy because the jsonDateReviver function always broke my code. Furthermore when ever I try to call toDateString or toISOString the code explodes and says that created.toDateString() is not a function. I think this is because when the server returns the data the dates are already date objects but I really am just throwing noodles against the wall to see what happens.

2) Currently I am in Chapter10 just completed the Update API section. The code works per se in that the issue updates when running the mutation in the graphql playground but it returns an error stating "message": "Cannot return null for non-nullable field Mutation.issueUpdate.", So hopefully when i update the UI part this doesn't cause me a lot of grief.  
3) Every time I write a function like closeIssue or deleteIssue the callback does not work, It does what is was supposed to but it does not show it on the UI. But when I copy the authors code for the functions it works. Yet I cant see a difference.

**Here is my deleteIssue function**  
```javascript
async deleteIssue(index) {    
      const query = `mutation issueDelete($id: Int!) {    
        issueDelete(id: $id)    
      }`;    
      const { issues } = this.state;    
      const { location: { pathname, search }, history } = this.props;    
      const { id } = issues[index];    
      const data = await graphQLFetch(query, { id });    
      if (data && data.issueDelete) {    
        this.setState((prevState) => {    
          const newList = [...prevState.issues];    
          if (pathname === `/issues/${id}`) {    
            history.push({ pathname: '/issues', search });    
          }    
          newList.slice(index, 1);    
          return { issues: newList };    
        });    
      } else {    
        this.loadData();    
      }    
    }
```
    

**Here is the Author's deleteIssue Function**

```javascript
async deleteIssue(index) {
    const query = `mutation issueDelete($id: Int!) {
      issueDelete(id: $id)
    }`;
    const { issues } = this.state;
    const { location: { pathname, search }, history } = this.props;
    const { id } = issues[index];
    const data = await graphQLFetch(query, { id });
    if (data && data.issueDelete) {
      this.setState((prevState) => {
        const newList = [...prevState.issues];
        if (pathname === `/issues/${id}`) {
          history.push({ pathname: '/issues', search });
        }
        newList.splice(index, 1);
        return { issues: newList };
      });
    } else {
      this.loadData();
    }
  } 
  ```
  
---
  
## BOOTSTRAP implementation thoughts


---
## Authentication
So I can genuinely say that I found the whole chapter on Authentication to be infuriating. I could not get google authentication to work, just trying to register the application to get the keys was imposible in that it never let me past the first step. So I did try using Auth0 and that was promising but it broke also and by then I was frustrated enough to say #^@& it and move on. I do plan on swinging back around and setting up some type of authentication, currently i am looking at using Passport and Github strategy. 

---
## Final Thoughts
So I know i need to go back and do some more write up about my experiences working through this book but right now I am "happy" with where I am with this. I have deployed the application to Heroku but I don't know how long i will leave it running. If you have any thoughts or questions please reach out. 

Find Peace and Stay Safe!

  
