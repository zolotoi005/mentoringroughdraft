$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/amazonTitle.feature");
formatter.feature({
  "name": "amazon title",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Amazon url verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@amazon"
    }
  ]
});
formatter.step({
  "name": "user goes to amazon Website",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonTitle.user_goes_to_amazon_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should validate url",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonTitle.user_should_validate_url()"
});
formatter.result({
  "status": "passed"
});
});