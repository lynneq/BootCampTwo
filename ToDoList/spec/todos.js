describe('to do list adder',function(){
	var newTask = "first task";
	var toDoLists = [];
	toDoLists.push(newTask);
  
  beforeEach(function(){
	var actualList = addTask(newTask)
  });

  it('should create a new task', function(){
	actualList = addTask(newTask)
	expect(actualList.length).toEqual(2)	
	expect(actualList).toNotEqual(toDoLists)
  });

  it('should find the created task', function(){
	expect(actualList).toContain(newTask);
  }); 
});

// describe('to do list marker', function(){
// 	var newTask = "first task";	
// 	beforeEach(function(){
// 		var actualList = addTask(newTask)
//     });
// 	
// 	it('should mark the task as completed', function(){
// 		
// 	});
// });
