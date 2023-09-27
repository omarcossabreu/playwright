// @ts-check
const { test, expect } = require('@playwright/test');

test.use({
  viewport: { width: 1600, height: 1200 },
})

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')
}) 

test('Scroll', async ({ page }) => {
  const button = await page.getByRole('button', { name: 'Send Mail' })
  await button.click()
})

 test('Login com Sucesso @login', async ({ page }) => {
   await page.getByRole('link', { name: ' Login' }).click()
   await page.locator('#user').click()
   await page.locator('#user').fill('marcosabreu@teste.com.br')
   await page.locator('#password').click()
   await page.locator('#password').fill('123ASD')
   await page.getByRole('button', { name: 'login' }).click()
   await page.screenshot({ path: 'tests/evidencias/loginComSucesso.png' })
   await page.getByRole('button', { name: 'OK' }).click()
 })

 test('Tentato Logar Apenas com Email @teste1', async ({ page }) => {
   await page.getByRole('link', { name: ' Login' }).click()
   await page.locator('#user').click()
   await page.locator('#user').fill('marcosabreu@teste.com.br')
   await page.getByRole('button', { name: 'login' }).click()
   await page.screenshot({ path: 'tests/evidencias/falha1SemSenha.png' })
 })

 test('Tentato Logar Apenas com a Senha', async ({ page }) => {
   await page.getByRole('link', { name: ' Login' }).click()
   await page.locator('#password').click()
   await page.locator('#password').fill('123ASD')
   await page.getByRole('button', { name: 'login' }).click()
   await page.screenshot({ path: 'tests/evidencias/falha2SemEmail.png' })
 })

 test('Tentato Logar sem Email e sem Senha', async ({ page }) => {
   await page.getByRole('link', { name: ' Login' }).click()
   await page.getByRole('button', { name: 'login' }).click()
   await page.screenshot({ path: 'tests/evidencias/falha3SemDados.png' })
 })