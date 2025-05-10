const { expect, test } = require("@playwright/test");

test('Mocking API call', async ({ page }) => {
  // Mock the API route
  await page.route('https://randomuser.me/api/', async (route) => {
    const mockResponse = {
      results: [
        {
          name: {
            first: 'JHON'
          }
        }
      ]
    };

    await route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify(mockResponse)
    });
  });

  // Updated: Navigate to the correct port (5500)
  await page.goto('http://127.0.0.1:5500/apiCall.html');


  // Simulate button click
  await page.click('#btn');

  // Locate the paragraph element and assert the expected text
  const userData = await page.locator('p');
  await expect(userData).toHaveText('The new user name is JHON');
});