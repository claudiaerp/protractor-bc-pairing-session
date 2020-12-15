const { browser, element } = require('protractor');
var angularHomepage = require('../pages/angularHome.page');

describe('angularjs homepage', function() {
  xit('should greet the named user', function() {
    angularHomepage.get();
    angularHomepage.setName('Claudia');
    expect(angularHomepage.getGreetingText()).toEqual('Hello Claudia!');
  });
  
  xit('should add a todo', async function() {
    var text = 'write first protractor test';   
    angularHomepage.setTodo(text);
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });

  xit('should login successfully', function(){
    browser.get('http://the-internet.herokuapp.com/login');
    element(by.id('username')).sendKeys('tomsmith');
    element(by.id('password')).sendKeys('SuperSecretPassword!');
    element(by.className('radius')).click();
    expect(browser.getCurrentUrl()).toBe('http://the-internet.herokuapp.com/secure');
  });

  xit('should logout of the application', function(){
    element(by.className('secondary')).click();
    expect(browser.getCurrentUrl()).toBe('http://the-internet.herokuapp.com/login');
  });

  xit('should not login successfully - wrong credentials', function(){
    browser.get('http://the-internet.herokuapp.com/login');
    element(by.id('username')).sendKeys('Claudia');
    element(by.id('password')).sendKeys('Claudia17!');
    element(by.className('radius')).click();
    //Still in the same Login page
    expect(browser.getCurrentUrl()).toBe('http://the-internet.herokuapp.com/login');
  });

  xit('should login and logout using more than one user set of credentails', function(){
    var users  = [
                  {
                    "username": "tomsmith",
                    "password": "SuperSecretPassword!"
                  },
                  {
                    "username": "NotAnEmail@qwery.com",
                    "password": "245g245g245g"
                  },
                  {
                    "username": "NotAnEmail@qwery.com",
                    "password": "WrongPassword"
                  }
                ];
    browser.get('http://the-internet.herokuapp.com/login');

    

    users.forEach(function (item){
      console.log(item.username, item.password);
      element(by.id('username')).sendKeys(item.username);
      element(by.id('password')).sendKeys(item.password);
      element(by.className('radius')).click();
      expect(browser.getCurrentUrl()).toBe('http://the-internet.herokuapp.com/secure');
      element(by.className('secondary')).click();
      expect(browser.getCurrentUrl()).toBe('http://the-internet.herokuapp.com/login');

    });
  });

  it('should find a person in the list by their name', function(){
    browser.get('http://the-internet.herokuapp.com/tables');
    var table1 = element(by.id('table1'));
    table1.then(function(table){
      table.element(by.tagName('tbody')).then(function(tbody){
        tbody.element(by.tagName('tr')).then(function(rows){
          array.forEach(function(item){
            console.log(item);
          });
        });
      });
    });

  });
});