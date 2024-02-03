# Data-Table-and-Bar-Chart-Visualization-React-Project

Theis is a React app designed to display a searchable and paginated table of user data fetched from an API. It also includes a bar chart visualization (using Plotly.js) of selected users'.

## Features

- Dynamic Data Fetching: Fetches user data from a remote API based on the current search term and page.
- Pagination: Supports navigating through pages of data.
- Search Functionality: Allows filtering users based on a search term.
- Selectable Rows: Users can select rows in the table, which dynamically updates the data visualized in the bar chart.
- Data Visualization: Displays a bar chart showing the age distribution of selected users.

## Dependencies

- `react` and `react-dom` for building the UI.
- `axios` for making HTTP requests.
- `react-plotly.js` and `plotly.js-basic-dist` for rendering the bar chart.
- Custom CSS styles defined in `app.module.scss`.

## Usage

1. `react`, `react-dom`, `axios`, and `react-plotly.js` is installed in this project.
2. Placing the `DataTableWithChart` component in our React application.
3. The component will automatically fetch user data from `https://dummyjson.com/users/search` and display it in a table.
4. Users can search for specific entries using the search input and navigate through the results using the pagination controls.
5. Selecting or deselecting table rows updates the bar chart to reflect the ages of the selected users.

## Component Structure

- An input field allows users to enter search terms, which updates the table data in real time.
- A table displays the fetched user data, including a checkbox for selecting rows, user ID, name, age, and email.
- Pagination controls ('Prev' and 'Next' buttons) to navigate through pages of data.
- A `Plot` component from `react-plotly.js` visualizes the selected users' age distribution.

## Styling

The component uses CSS modules for styling. The styles are defined in `app.module.scss` and applied using `className` attributes.
