import { test, expect } from '@playwright/test';
test('home exposes both releases', async ({ page }) => { await page.goto('/'); await expect(page.getByRole('heading', { name: /Escape into/ })).toBeVisible(); await expect(page.getByRole('heading', { name: /Fantasie Alarm/ })).toBeVisible(); });
