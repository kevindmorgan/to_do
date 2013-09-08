define('app', ['Backbone', 'underscore', 'tasks_view', 'nav_view'], function (Backbone, _, TasksView, NavView) {
//define('app', ['Backbone', 'underscore', 'tasks_view'], function (Backbone, _) {

	return Backbone.View.extend({

		initialize: function (options) {
			console.log('JS has been set up correctly ^.^');

			var tasks, nav;

			this.broker = _.extend({}, Backbone.Events);

			tasks = new TasksView({
				parent: this,
				el: this.$el.find('.tasks-list'),
				broker: this.broker
			});

			nav = new NavView({
				parent: this,
				el: this.$el.find('nav'),
				broker: this.broker
			});

			// Events:
			// this.broker.on('task:create', this.addTask, this);
			// this.broker.on('task:edit:view', this.editTasks, this);
			// this.broker.on('task:edit:save', this.saveTasks, this);
			// this.broker.on('task:status:change', this.changeStatusTasks, this);
			// this.broker.on('task:remove', this.removeTasks, this);
			//
			// this.broker.on('task:select', this.selectedItem, this);
		}
	});
});