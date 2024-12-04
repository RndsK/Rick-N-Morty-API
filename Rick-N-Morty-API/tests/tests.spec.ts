import { test, expect } from '@playwright/test';

test.describe('Rick and Morty App Tests', () => {
    test('Home page loads correctly', async ({ page }) => {
      await page.goto('http://localhost:5173/');
      const title = await page.textContent('h1');
      expect(title).toBe('Rick and Morty Characters');
    });
  
    test('Character list displays', async ({ page }) => {
      await page.goto('http://localhost:5173/');
      const characterCards = await page.$$('.character');
      expect(characterCards.length).toBeGreaterThan(0);
    });
  
    test('Can add character to favorites', async ({ page }) => {
      await page.goto('http://localhost:5173/');
      const addToFavoritesButton = await page.locator('.add-favorites-button').first();
      await addToFavoritesButton.click();
      const buttonText = await addToFavoritesButton.textContent();
      expect(buttonText).toBe('Remove from Favorites');
    });
  
    test('Favorites page displays added character', async ({ page }) => {
      await page.goto('http://localhost:5173/');
      await page.locator('.add-favorites-button').first().click();
      await page.goto('http://localhost:5173/favorites');
      const favoriteCharacters = await page.$$('.character');
      expect(favoriteCharacters.length).toBeGreaterThan(0);
    });
  
    test('Can remove character from favorites', async ({ page }) => {
      await page.goto('http://localhost:5173/');
      const addToFavoritesButton = await page.locator('.add-favorites-button').first();
      await addToFavoritesButton.click();
      await addToFavoritesButton.click();
      const buttonText = await addToFavoritesButton.textContent();
      expect(buttonText).toBe('Add to Favorites');
    });
  });