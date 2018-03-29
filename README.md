# Angular_Articles

Task is to create the admin panel using latest AngularJS:

	1. Add AngularJS 1.6.1 to a project
	2. Add minimum functionality
		a. Create a component for displaying amount of articles and list of their titles
		b. Create a form (using native directives) to add an article
	3. Add more functionality
		a. Add validation to the form
			i. Fields "Title" and "Content" should be mandatory
			ii. Create a custom validator that check the minimum length of an article 20 symbols (optional).
		b. Reuse the form above to edit an article by clicking on article title.
			i. Hint: you may probably need to pass an action to the button using "&"
		c. Create a component-button "Add an article" and open appropriate form on click
	4. Add routes and resource
		a. "Add article"/"Edit article" forms should be opened inside different views.
		b. Make sure that "Add article"/"Edit article" views have different routes, i.e.
			i. /admin/article/<articleId>/edit
			ii. /admin/article/add
		c. Use Resource to make requests to a server.
	5. To have more experience *
		a. Create pagination component and use it to display a list of articles
		b. List of numbers for pagination buttons on should be generated using custom Filter

* Making  #5 without part (b) can be also considered as "excellent"
# Angular_Articles
# Angular_Articles_Server
