function Task(content){
	this.content = content
	this.completed = false
};

Task.prototype.isMarked = function(){
	return this.completed;
};
	
Task.prototype.setMarked =  function(){
	this.completed = true;
};