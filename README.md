# Backend challenge

# TODO APP

The TODO App allows a user to add reminders of thing he needs to do. Here are the requirement for the app.

- Users can add, delete and see their todos.
- All the todos are private, users can't see other user's todos.
- Users must be logged in order to add/delete/see their todos.

### Requirements
- Python 3.8 (Feel you free to choose another programming languages as PHP, Node JS and other).
- sqlite3
- A github account

### Instructions

You will be asked to improve the code of this app with the following tasks.

You can complete the tasks in any order.

### Tasks
1.- As a user I can't add a todo without a description.

2.- As a user I can mark a todo as completed.
    - Write a database migration script in `resources/`

3.- As a user I can view a todo in a JSON format.
    - Ex: /todo/{id} => {id: 1, user_id: 1, description: "My awesome app"}

4.- As a user I can see a confirmation message when I add/delete a todo.

5.- As a user I can see my list of todos paginated (Optional).

6.-  Implement an ORM database access layer so we don’t have SQL in the controller code.

### How to submit your work?

1. ##### First you need to fork this repository.

2. ##### Then clone your fork locally.

3. ##### Install the app locally.

4. ##### Once you've completed your work, you can submit a pull-request to the remote repository.