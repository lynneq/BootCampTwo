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
				console.log(task.content)
				console.log(targetTask.content)
				result = task;
			}
			else result = null;
			
		})
		return result;
		
}
// 
// function getTask(entryContent){
// 	for(var task in toDoLists){
// 		if(task.content == entryContent)
// 			return task;
// 		else return null;
// 	}
// }
// function toMark(entryContent){
// 	var foundTask = getTask(entryContent)
// 	if(foundTask!=null)
// 		foundTask.setMarked
// }
