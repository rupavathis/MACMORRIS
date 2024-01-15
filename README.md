# About the project  

The MACMORRIS project seeks to capture the complexity and richness of early modern Ireland, by mapping the full range of cultural activity, across languages and ethnic groups, from 1541 to 1660. This largely bilingual resource provides the first inclusive account of creative, scholarly, and intellectual activity in a time of conquest, plantation, and colonisation. It opens a window on a world on the cusp of drastic change and puts in place the resources for understanding what stood to be lost in a time of dynamic and often violent encounter.

# Technologies used

We used React JS version 16 for this project. We have 2 major visualisation interfaces,

## Map Interface
For the Map UI we also used Mapbox, and deck.gl (a powerful and flexible library for data visualisation on web maps), employing a layered approach to Data visualisation.

## Network Interface

For the Network UI, we employed react-force-graph, a React library tailored for building compelling 2D and 3D network visualisations. 


To achieve a high level of responsiveness and interactivity, both the MAP UI and network visualisations leverage the power of Graphics Processing Unit (GPU). Using the computational capabilities of GPUs, these visualisations can efficiently handle complex rendering tasks, and smooth animations.

In addition, we also have Search interface, which is used to search the database using filter criterias. 


# To run the application

Run the backend application which expose the postgreSQL database on port 3000. And then run this application with 'npm run' on port 8000. 

# Deployment

There is a deploy.sh script which creates a singularity container, within which the project folder is converted to a tar file. The tar file is then placed inside the server and extracted. The docker will be restarted. 
