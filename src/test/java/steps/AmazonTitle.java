package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import utilities.ConfigurationReader;
import utilities.Driver;

import java.util.Properties;

public class AmazonTitle {

    @When("user goes to amazon Website")
    public void user_goes_to_amazon_Website() {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
    }

    @Then("user should see proper title")
    public void user_should_see_proper_title() {
    String title = "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more";
        Assert.assertEquals(Driver.getDriver().getTitle(),title);

    }

    @Then("user should validate url")
    public void user_should_validate_url() {
        Assert.assertTrue(Driver.getDriver().getCurrentUrl().contains("amazon.com"));
    }
}
