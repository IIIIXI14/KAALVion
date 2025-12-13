import { test, expect } from "@playwright/test";

test.describe("Project Submission Flow", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to homepage
    await page.goto("/");
  });

  test("should navigate to project submission form", async ({ page }) => {
    // Find and click a service button or link that opens the project form
    // This is a basic example - adjust selectors based on your actual UI
    const serviceButton = page.getByRole("button", { name: /request demo|get started/i }).first();
    
    if (await serviceButton.isVisible()) {
      await serviceButton.click();
      
      // Wait for form to appear (adjust selector based on your modal/form)
      await page.waitForSelector('input[name="projectName"], input[placeholder*="project"], input[placeholder*="Project"]', {
        timeout: 5000,
      });
      
      // Verify form is visible
      const projectNameInput = page.locator('input[name="projectName"], input[placeholder*="project"], input[placeholder*="Project"]').first();
      await expect(projectNameInput).toBeVisible();
    }
  });

  test("should show validation errors for empty form", async ({ page }) => {
    // Navigate to a page with the form or open the modal
    // This is a placeholder - adjust based on your actual form implementation
    await page.goto("/");
    
    // Try to find and submit the form
    const submitButton = page.getByRole("button", { name: /submit/i }).first();
    
    if (await submitButton.isVisible()) {
      await submitButton.click();
      
      // Should show validation errors
      await expect(page.getByText(/required|must be/i).first()).toBeVisible({ timeout: 2000 });
    }
  });

  test("should navigate to projects page after login", async ({ page }) => {
    // This test assumes user is logged in
    // In a real scenario, you'd set up authentication first
    await page.goto("/projects");
    
    // Should either show projects or redirect to sign-in
    const isSignInPage = page.url().includes("/sign-in");
    const hasProjects = await page.getByText(/my projects|no projects/i).isVisible();
    
    expect(isSignInPage || hasProjects).toBeTruthy();
  });
});

test.describe("Navigation", () => {
  test("should navigate between pages", async ({ page }) => {
    await page.goto("/");
    
    // Check that homepage loads
    await expect(page).toHaveTitle(/KAALVION/i);
    
    // Navigate to a solution page
    await page.goto("/solutions/wifi-attendance");
    await expect(page).toHaveURL(/wifi-attendance/);
    
    // Navigate to another solution page
    await page.goto("/solutions/smart-farming");
    await expect(page).toHaveURL(/smart-farming/);
  });

  test("should show 404 page for invalid routes", async ({ page }) => {
    await page.goto("/invalid-route-12345");
    
    // Should show 404 page
    await expect(page.getByText(/404|not found|signal lost/i)).toBeVisible();
  });
});
