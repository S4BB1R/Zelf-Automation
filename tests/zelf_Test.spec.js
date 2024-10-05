// @ts-check
require('dotenv').config();
const { test, expect } = require('@playwright/test');
const fs = require('fs');
let sliderValue;
const data = JSON.parse(fs.readFileSync('fixtures/data.json', 'utf8'));

test('Login to Zelf > update Account Settings > crosscheck Daily Usage account settings with Home page', async ({ page }) => {

  const email = process.env.EMAIL_ADDRESS;
  const password = process.env.PASSWORD;
  await page.goto('/settings');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill(email);
  await page.getByLabel('Email address').press('Tab');
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.locator('div').filter({ hasText: /^Settings$/ }).click();
  await page.goto('/settings');
  await page.getByPlaceholder('your full name').fill('');
  await page.getByPlaceholder('your full name').fill(data.fullName);
  console.log(data.fullName);
  await page.getByRole('combobox').selectOption(data.state);
  console.log(data.state);
  await page.getByLabel('Daily target').click();

  await page.locator('.SliderThumb').focus();
  let directionThumb;
  const isRightArrow = Math.random();
  console.log(isRightArrow)
  if (isRightArrow < .5) {
    directionThumb = 'ArrowRight'
  } else {
    directionThumb = 'ArrowLeft';
  }
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press(directionThumb);
  }

  await page.waitForTimeout(2000);
  sliderValue = await page.locator('.slider-tooltip').textContent();
  console.log(sliderValue)


  await page.waitForTimeout(4000);
  await page.goto('/home');
  const dailyProgressHomeText = await page.locator('.button-small-font').nth(1).textContent();
  console.log('Extracted Text:', dailyProgressHomeText);
  expect(dailyProgressHomeText).toContain(sliderValue);

});

