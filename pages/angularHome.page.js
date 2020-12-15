var AngularHomepage = function() {
    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));
    var todo = element(by.model('todoList.todoText'));
    var add = element(by.css('[value="add"]'));
    var todoList = element.all(by.repeater('todo in todoList.todos'));


    this.get = async function() {
        browser.get('http://www.angularjs.org');
    };

    this.setName = async function(name) {
        nameInput.sendKeys(name);
    };

    this.getGreetingText = function() {
        return greeting.getText();
    };

    this.getGreeting = function() {
        return greeting;
    };

    this.setTodo = function(text){
        todo.sendKeys(text);
    }
};
module.exports = new AngularHomepage();