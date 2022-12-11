/* eslint-disable no-undef */
Feature("Liking Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.seeElement(".resta");
  I.see("Silahkan tambah resta favoritemu dulu di halaman utama", ".resta");
});
