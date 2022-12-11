/* eslint-disable no-undef */
Feature("Liking Resta");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restas", ({ I }) => {
  I.seeElement(".resta");
  I.see("Silahkan tambah resta favoritemu dulu di halaman utama", ".resta");
});

Scenario("liking one resta", ({ I }) => {
  I.see("Silahkan tambah resta favoritemu dulu di halaman utama", ".resta");

  I.amOnPage("/");

  I.seeElement(".resta__list a");
  I.click(locate(".resta__list a").first());

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".resta__list");
});
