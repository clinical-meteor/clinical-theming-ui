describe('clinical:theming-ui', function () {
  var server = meteor();
  var client = browser(server);

  it('Theming pages should exist on client.', function () {
    return client.execute(function () {

      expect(Template.themingActionButtons).to.exist();
      expect(Template.themingCard).to.exist();
      expect(Template.themingPage).to.exist();
    });
  });
});
