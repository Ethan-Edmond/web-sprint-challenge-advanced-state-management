# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve? 

The context api solves the problem of making information available to components
without prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

In redux, reducers are functions which take a state and an action and return an
updated state, actions are objects which tell the reducer what to do and the
information that the reducer needs to do it. The store in redux is where the
state, reducer and middleware are held in memory. The store is known as a single
source of truth in a redux application because it is the place where global information is held.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to write actions which are functions instead of objects
and do more complicated things, such as dispatching other actions asynchronously
based on an api call's result. It changes some of our action creators to return
functions which take a dispatch argument.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

So far, my favorite state management system is the reducer pattern. I like that
it's actually pretty easy to make new or modify old functionality. The thing
that I don't like about it is how much it takes to set up, and how it's not
immediately obvious where to put the state in the components. I didn't like it
at first because it seemed so complicated, but after messing around with it more
I liked it more.
