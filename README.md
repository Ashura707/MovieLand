# MovieLand

MovieLand is a simple and elegant movie search application built with React. It allows users to search for movies using the OMDB API and displays relevant information about the movies, such as title, year, and poster.

## Features

- **Search Movies:** Users can search for movies by entering a title in the search bar.
- **Dynamic Display:** The app fetches movie data dynamically from the OMDB API and displays the search results in a clean, organized manner.
- **Responsive Design:** The application is responsive and works well on different screen sizes.

## Screenshots

![MovieLand Screenshot](./screenshots/screenshot-movieland-hom.png)
*MovieLand home screen with the search bar and sample results.*

![Search Results](./screenshot-movieland-searchresults.png)
*Search results for "Spiderman".*


## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **OMDB API:** The Open Movie Database API is used to fetch movie data.
- **CSS:** For styling the application.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/movieland.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd movieland
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the app:**
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Usage

- **Search for Movies:** Enter a movie title in the search bar and click the search icon or press Enter.
- **View Results:** The app will display a list of movies that match your search criteria, showing the title, year, and poster of each movie.

## API Integration

This project uses the [OMDB API](http://www.omdbapi.com/) to fetch movie data. Make sure to obtain your own API key and replace the placeholder in the code with your key.

```javascript
const API_URL = "http://www.omdbapi.com/?apikey=YOUR_API_KEY";
```

## Contributing

Contributions are welcome! If you have suggestions, ideas, or bug fixes, please submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OMDB API](http://www.omdbapi.com/) for providing the movie data.
- [React](https://reactjs.org/) for the amazing UI library.

---

Feel free to customize this README to suit your needs! Add more sections, such as "Known Issues" or "Future Enhancements," if necessary.