# SBA-316

This will be updated over time, but this was originally an import of SBA-307's repository that will be modified to fulfill the criteria of
SBA-316. The added script.js file adds functionality to the forms found on the miscellaneous page of this website.

# First Form Functionality

The first form will require that certain criteria are met with the user's inputs before successfully submitting the information provided by the user.
The first and last names must be greater than or equal to 3 letters in length, the email will require the completion of a rigorous criteria before submission, and one
radio value must be submitted along with everything else.

The email criteria includes:

- The email field not being empty
- The @ symbol neither being the first character nor there being two or more @ symbols per email address
- After finding the @ symbol, assure that there is a '.' character afterwards to confirm a valid URL structure
- Confirming that the top-level domain suffix is valid

# Second Form Functionality
