ToDoLists = function(){
	this.toDoLists = []
}

ToDoLists.prototype.addTask = function(task){
	this.toDoLists.push(task);
};
ToDoLists.prototype.getLength = function(){
	return this.toDoLists.length
};
ToDoLists.prototype.getTask = function(targetTask){
	var result = null
	    this.toDoLists.forEach(function(task){
			if (task.content == targetTask.content){
				// console.log(task.content)
				// console.log(targetTask.content)
				result = task;
			}
			else result = null;
			
		})
		return result;
		
}

ToDoLists.prototype.toMark = function(targetTask){
	var foundTask = this.getTask(targetTask)
	var result = false;
	if(foundTask!=null)
		foundTask.setMarked()
		result = true;
	return result; 
}
