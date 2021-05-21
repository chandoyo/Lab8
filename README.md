# Lab8_Starter

# Author
Claudia Handoyo

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
   - 1 (Within a Github action that runs whenever code is pushed)

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   - No, unit tests are for testing smaller individual pieces of the code. A full "message" feature would require a few unit tests rather than just one for its own

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
   - Yes, max message length is just one part of the messaging feature to test, so a unit test would be suitable

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
   - The browser UI may not be created when the tests are run

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
   - We either have to click on the settings icon or use await page.click("img"); to navigate there first

