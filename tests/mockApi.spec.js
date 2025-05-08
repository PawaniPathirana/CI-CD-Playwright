const{expect,test}= require ("@playwright/test")

test('Mocking api call', async ({ page }) => {
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
  
    await page.goto('http://127.0.0.1:5500/tests/apiCall.html');
  
    await page.click('#btn');
  
    const userData = await page.locator('p');
  
    await expect(userData).toHaveText('The new user name is JHON');
  });
  