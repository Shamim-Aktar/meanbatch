(function newFact() {
  var facts = ['Have a GOOD day', 'Have a BAD day'];
  var randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById('factDisplay').innerHTML = facts[randomFact];
})();