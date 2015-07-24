jest.dontMock('../app/javascript/src/todo_item.jsx');
jest.dontMock('../app/javascript/src/todo.js');

describe('Todo Item', function () {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;

    jest.setMock('../app/javascript/src/todo_actions.js', {
        completeTodo: jest.genMockFn(),
        removeTodo: jest.genMockFn()
    });

    var TodoActions = require('../app/javascript/src/todo_actions.js');
    var Todo  = require('../app/javascript/src/todo.js');
    var TodoItem = require('../app/javascript/src/todo_item.jsx');

    var todo = new Todo(1, 'Crazy baby talk', false, new Date());

    describe('renders', function () {
        var todoItem;
        var input;
        var label;
        var p;

        it('unchecked', function () {
            todoItem = TestUtils.renderIntoDocument(<TodoItem todo={todo} />);
            input = TestUtils.findRenderedDOMComponentWithTag(todoItem, 'input');
            expect(input.getDOMNode().checked).toBe(false);
        });

        it('checked', function () {
            todo.isChecked = true;

            todoItem = TestUtils.renderIntoDocument(<TodoItem todo={todo} />);
            input = TestUtils.findRenderedDOMComponentWithTag(todoItem, 'input');
            label = TestUtils.findRenderedDOMComponentWithTag(todoItem, 'label');
            p = TestUtils.findRenderedDOMComponentWithTag(todoItem, 'p');

            expect(input.getDOMNode().checked).toBe(true);
            expect(label.props.className).toBe('icon-ok');
            expect(p.props.className).toBe('text striked');
        });

        it('a title', function () {
            todoItem = TestUtils.renderIntoDocument(<TodoItem todo={todo} />);
            p = TestUtils.findRenderedDOMComponentWithTag(todoItem, 'p');

            expect(p.getDOMNode().textContent).toBe('Crazy baby talk');
        });
    });

    describe('handles change', function () {
        var todoItem;
        var input;

        it('checks itself when clicked', function () {
            todoItem = TestUtils.renderIntoDocument(<TodoItem todo={todo} />);
            input = TestUtils.findRenderedDOMComponentWithTag(todoItem, 'input');
            p = TestUtils.findRenderedDOMComponentWithTag(todoItem, 'p');

            TestUtils.Simulate.change(input.getDOMNode()); 
            expect(input.getDOMNode().checked).toBe(true);
            expect(p.props.className).toBe('text striked');
        });
    });

    describe('calls Action', function () {
        var todoItem;
        var trashIcon;

        it('#completeTodo', function () {
            todoItem = TestUtils.renderIntoDocument(<TodoItem todo={todo} />);
            input = TestUtils.findRenderedDOMComponentWithTag(todoItem, 'input');

            TestUtils.Simulate.click(input.getDOMNode());

            expect(TodoActions.completeTodo).toBeCalledWith(1);
        }); 

        it('#removeTodo', function () {
            todoItem = TestUtils.renderIntoDocument(<TodoItem todo={todo} />);
            trashIcon = TestUtils.findRenderedDOMComponentWithClass(todoItem, 'icon-trash');

            TestUtils.Simulate.click(trashIcon.getDOMNode());

            expect(TodoActions.removeTodo).toBeCalledWith(1);
        }); 
    });
});
