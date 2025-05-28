import { Given, When, Then } from "@wdio/cucumber-framework";
import * as chai from 'chai';

Given("Google page is opened",async()=>
{
    console.log('Before openeing browser')
    await browser.url("https://www.google.com/")
    await browser.pause(7000)
    console.log('After openeing browser')
})

When("Search with {string}", async(searchItem: string)=>
{
    console.log(`>> searchItem: ${searchItem}`)
    let ele = await $(`[name=q]`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")
    await browser.debug()
    chai.expect("exe").to.be.eq("exe")
})