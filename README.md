# SBA-316

This will be updated over time, but this was originally an import of SBA-307's repository that will be modified to fulfill the criteria of
SBA-316. The added script.js file adds functionality to the forms found on the miscellaneous page of this website.

# First Form Functionality

The first form will require that certain criteria are met with the user's inputs before successfully submitting the information provided by the user.
The first and last names must be greater than or equal to 3 letters in length and can only contain letters, the email will require the completion of
a rigorous criteria before submission, and one radio value must be submitted along with everything else.

The email criteria includes:

- The email field not being empty
- The @ symbol neither being the first character nor there being two or more @ symbols per email address
- After finding the @ symbol, assure that there is a '.' character afterwards to confirm a valid URL structure
- Confirming that the top-level domain suffix is valid

# Second Form Functionality

The second form will allow a user to select 1 of 3 options for their favorite manufacturer out of the given car brands. When a choice is selected, that value
will then be used to check for all cars in the table that belong to that manufacturer. The rows containing the respective cars will be highlighted by applying
a CSS class to the entire row, along with some asterisks to be added next to the original text of the car name.
