/* eslint-disable no-undef */
Feature("Liking Resta");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restas", ({ I }) => {
  I.seeElement(".resta");
  I.see("Tidak ada film untuk ditampilkan", ".resta");
});
