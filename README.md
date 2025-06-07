# Interactive Quiz with Random Joke API

An engaging and responsive web application that combines an interactive multiple-choice quiz with live jokes fetched from a public API. Users answer questions one at a time, and below each question, a random joke is displayed dynamically to keep the experience fun and entertaining.

---

## Features

- **Multiple Questions:** Five thoughtfully designed quiz questions with multiple choice answers.
- **Interactive UI:** Smooth selection feedback with color-coded answers (green for correct, red for incorrect).
- **Random Jokes:** After each question is displayed, a fresh random joke is fetched from the JokeAPI and shown below the question.
- **Responsive Design:** The layout adjusts beautifully across desktop, tablet, and mobile devices using CSS media queries.
- **User Experience:** Clear navigation with a “Next” button to move through questions and a final result screen showing the score.
- **Restart Quiz:** Users can restart the quiz anytime without reloading the page.

---

## Technologies Used

- **HTML5** – Semantic markup structure
- **CSS3** – Modern styling with Flexbox and media queries for responsiveness
- **JavaScript (ES6)** – Dynamic DOM manipulation, API calls, and quiz logic
- **JokeAPI** – Public API for fetching random jokes ([https://v2.jokeapi.dev/](https://v2.jokeapi.dev/))

---

## How It Works

1. The quiz presents one question at a time with multiple answer options.
2. When the question loads, a random joke is fetched from the JokeAPI and displayed below the question area.
3. Users select their answer, and the system immediately highlights whether the choice is correct or wrong.
4. The "Next" button appears, allowing users to proceed to the next question.
5. After all questions are answered, a final score screen is displayed with the option to restart the quiz.

---

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mythrireddy21/Quiz-Joke-App.git
````

2. Navigate into the project folder:

   ```bash
   cd Quiz-Joke-App
   ```

3. Open the `index.html` file in your preferred web browser.

> *No backend or build tools are required — just open the HTML file!*

---

## Project Structure

```
Quiz-Joke-App/
│
├── index.html         # Main HTML file
├── style.css          # Stylesheet for layout and design
└── script.js          # JavaScript logic including quiz and API integration
```

---

## Customization

* You can easily update the quiz questions in `script.js` inside the `questions` array.
* The JokeAPI endpoint can be modified to fetch different types or categories of jokes.
* Styles can be customized in `style.css` to match your branding or preferences.

---

## License

This project is open-source and available under the MIT License.
Feel free to use, modify, and share!

---

## Acknowledgments

* [JokeAPI](https://jokeapi.dev/) for providing a free and easy-to-use joke service.
* Inspired by the challenge to build interactive, responsive web projects combining APIs and quizzes.

---

## Contact

For questions or feedback, you can reach me at:
**Name:** Mythri Reddy
**GitHub:** [https://github.com/Mythrireddy21](https://github.com/Mythrireddy21)

```