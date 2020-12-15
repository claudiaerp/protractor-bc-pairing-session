var angularHomepage = require('../pages/angularHome.page');

describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    angularHomepage.get();
    angularHomepage.setName('Claudia');
    expect(angularHomepage.getGreetingText()).toEqual('Hello Claudia!');
  });
  
  it('should add a todo', async function() {
    var text = 'write first protractor test';   
    angularHomepage.setTodo(text);
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
  
});