describe('when i create a new task',function(){
  var newTask = new Task("first task");
  var actualList = new ToDoLists();
 
  beforeEach(function(){
	actualList.addTask(newTask);
  });

  it('should add a new task to the to do list', function(){
	actualList.addTask(newTask)
	expect(actualList.getLength()).toEqual(2)	
  });

  it('should find the created task', function(){
	expect(actualList.toDoLists).toContain(newTask);
  }); 
});

describe('when I want to find task', function(){
  var newTask = new Task("first task");
  var actualList = new ToDoLists();

  beforeEach(function(){
	actualList.addTask(newTask);
  });

	it('should be able to find task if the task exists', function(){
		expect(actualList.getTask(newTask)).toEqual(newTask);
	});
	
	it('should be not able to find task if the task doesnt exist', function(){
	    var taskTwo = new Task("second task");
		expect(actualList.getTask(taskTwo)).toBeNull();
	});

});
// 
// describe('when i keep track of completion of tasks', function(){
// 	var newTask = new Task("first task");
// 	var actualList = new ToDoLists();
// 
// 	beforeEach(function(){
// 		actualList.addTask(newTask);
// 	});
// 
// 	it('should be able to mark as a completed task', function(){
// 		toMark(newTask);
// 		var taskEntry = actualList.getTask(newTask)
// 		expect(taskEntry.isMarked()).toEquals(true)
// 	});
// 	
// 	it('task should be marked as a completed task', function(){
// 		
// 	});
// 	
// 	it('should not be able to mark if the task is completed', function(){
// 		
// 	});
// });
