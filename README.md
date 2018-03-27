# OTC-drug-tracker

## Group Project #3 for GWU Bootcamp March 2018
### Chandler Dibble, Nicole Yoon, Al Curry, Tim Hill, Adam Specker

# Overview
* a project intended to help consumers find and keep track of over-the-counter drugs they've used
* why? either a young person who doesn't take medicine much or an old person who takes a lot
    * they need to know what's out there, and they need to know what they've taken
* what? an MVC model app using a database and the FDA open api to allow users to:
    * keep track of their OTC medication use, with easy access to information about those drugs
        * set those medications to active or inactive, with data logged based on time of administration
    * search the open FDA api for the right OTC drug for you

### March 27 - Adding on Core Functions
* basic site flow and functionality is in place
* nicole is adding css and design elements
* chandler is working on the search function integrated into site flow
* al is working on contact form
* adam is working on med page
* tim is wrangling the ajax calls, moving some to backend
* EOD - core function of site is in place
    * search, login/register, add med all working
    * user flow is continuous around the page
    * needs MUCH more refinement in all areas

### March 26 - Integrating Files
* the goal today is to have all the files integrated and working in a base functional level by EoD
    * we were not successful at this today
    * users can login and signup
    * users can see their meds displayed in a crude form on their myotc hub
* functionality needed - 
    * users need to add a medicine from the search page to their hub
    * SOLVE ERROR of can't set headers after theyre sent
    
    
### March 23 - Planning and Setup
* Morning
    * al and chandler are discussing the data structure
    * nicole is building the wireframes and converting those into html
    * adam and tim are looking into the api endpoints
        * modelling how we want to query the api
        * building our query strings
    

### March 22 - Project Initialize 
* role distribution:
    * al: database- data structure and models
    * nicole: UI/front end - handlebars for our views, making the site very usable and readable
    * chandler: middleware, resource point man - finding and learning new tech, documenting our resources
    * tim: encryption and authentication - handling routing and using passport and bcrypt
    * adam: project direction/management, flex role - maintain trello, project notes, assist whichever groups need help

* assignments for the night
    * everyone will do a deep dive on the homework to understand:
        * routing for a full stack app
        * file structure for an MVC model app
        * examine usage of passport and bcrypt modules
    * al - will muse on data structure and look into API querying and documentation
    * nicole - will design a few wireframe options based on todays whiteboard
    * chandler - explore lunr for fuzzy searches and WRITE GOOD NOTES
    * tim - will look into bcrypt 
    * adam - will set up trello and look into agile project management



