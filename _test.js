/* eslint-disable */

Feature("blitz初期ページテストをテストしてみる！") // このテスト全体の名前

Scenario("blitz初期ページに対象のテキストが表示されているかどうかをテスト！", ({ I }) => {
  I.amOnPage("http://localhost:3000/")
  I.see("Congrats!")
})
