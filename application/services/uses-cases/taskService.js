class TaskService {
    constructor(taskRepository) {
      this.taskRepository = taskRepository;
    }
  
    async createTask(taskData) {
      return await this.taskRepository.create(taskData);
    }
  
    async getAllTasks() {
      return await this.taskRepository.findAll();
    }
  
    async getTaskById(id) {
      return await this.taskRepository.findById(id);
    }
  
    async updateTask(id, taskData) {
      return await this.taskRepository.update(id, taskData);
    }
  
    async deleteTask(id) {
      return await this.taskRepository.delete(id);
    }
  }
  
  module.exports = TaskService;