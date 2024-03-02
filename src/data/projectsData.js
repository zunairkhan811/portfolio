import one from '../assets/img/reactbookscreenshot.png';
import two from '../assets/png/Space-X-projects.jpeg';
import three from '../assets/img/javascript project.png';
import four from '../assets/png/Budget-App.png';
import five from '../assets/img/weblyeducationscreenshot.png';
import six from '../assets/img/react-stocks-screenshot.png';
import seven from '../assets/img/foodrecipescreenshot.png';

export const projectsData = [
  {
    id: 1,
    projectName: 'Hotel Booking',
    projectDesc: 'This is my Hotel Booking Project. In this project both Rails is used as backend and React is used as frontend. Project is made according to the requirements in the form of Pair Programming',
    tags: [
      'Ruby on Rails',
      'Reactjs',
      'Devise',
      'Bootstrap',
      'Authorization',
      'Rspec testing',
    ],
    code: 'https://github.com/zunairkhan811/Hotel-Booking',
    demo: 'https://hotel-booking-frontend-7f76.onrender.com/',
    image: 'https://www.savills.co.uk/_images/adobestock-539646437.jpg',
  },
  {
    id: 2,
    projectName: 'Make your financial budget easy',
    projectDesc: 'Take control of your finances effortlessly with the Budget App, empowering users to manage expenses, track spending, and plan for financial goals with ease and precision.',
    tags: [
      'CSS',
      'Bootstrap',
      'Ruby on Rails',
      'PostgreSql',
      'Devise',
      'Authorization',
    ],
    code: 'https://github.com/zunairkhan811/budget-app',
    demo: 'https://budget-app-1wmp.onrender.com/',
    image: four,
  },
  {
    id: 3,
    projectName: 'Space-X the SpaceShip',
    projectDesc: 'This is a web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions. The project consumes real live data from the SpaceX API.',
    tags: [
      'HTML',
      'CSS',
      'React-Redux',
      'Javascript',
    ],
    code: 'https://github.com/zunairkhan811/react-space-project',
    demo: 'https://zunairkhan811.github.io/react-space-project/',
    image: two,
  },
  {
    id: 4,
    projectName: 'Stocks APP',
    projectDesc: 'In this Project, Stocks Data is presented using Stocks API, and the details of every stock are shown when the user clicks on the specific stock, and the project is completed using React-Redux',
    tags: [
      'CSS',
      'HTML',
      'React-Redux',
      'JavaScript',
    ],
    code: 'https://github.com/zunairkhan811/react-stocks-project',
    demo: 'https://zunairkhan811.github.io/react-stocks-project/',
    image: six,
  },
  {
    id: 5,
    projectName: 'Leaderboard Record',
    projectDesc: 'This is a project of creating a Leaderboard scores record using Api thereby sending and receiving data from Api.',
    tags: [
      'HTML',
      'CSS',
      'Javascript',
    ],
    code: 'https://github.com/zunairkhan811/Leaderboard-project',
    demo: 'https://zunairkhan811.github.io/Leaderboard-project/dist/',
    image: 'https://img.freepik.com/free-vector/leaderboard-with-abstract-background_52683-51486.jpg',
  },

  {
    id: 6,
    projectName: 'Math Magicians',
    projectDesc: 'This project is a basic calculator Responsive app that allows users to perform simple calculations as well as quotes shown using the API.',
    tags: [
      'CSS',
      'HTML',
      'Reactjs',
    ],
    code: 'https://github.com/zunairkhan811/math-magicians',
    demo: 'https://zunairkhan811.github.io/math-magicians/',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQix8EKu8-t-xjj617oH3Q1ocPr3LiB9YP8weOGt5bA&s',
  },
  {
    id: 7,
    projectName: 'Movie Shows',
    projectDesc: 'This is a movie and TV show listing Pair-Programming project that retrieves all data from an API, and allows you to like and comment on them.',
    tags: [
      'CSS',
      'HTML',
      'JavaScript',
    ],
    code: 'https://github.com/AbbasSarwar/Shows',
    demo: 'https://abbassarwar.github.io/Shows/dist/',
    image: three,
  },
  {
    id: 8,
    projectName: 'To do List',
    projectDesc: 'In this project user can add and remove his daily tasks as well as can edit and upon completion can delete it.',
    tags: [
      'CSS',
      'HTML',
      'JavaScript',
    ],
    code: 'https://github.com/zunairkhan811/To-do-list',
    demo: 'https://zunairkhan811.github.io/To-do-list/dist/',
    image: 'https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?height=474&width=711&fit=bounds',
  },
  {
    id: 9,
    projectName: 'BookStore',
    projectDesc: 'In this project users can add and delete Books and Books are stored and deleted through API. BookList and Category Section are made. In the Category section only categories are shown when the user clicks on a specific type then only books of that category are shown',
    tags: [
      'CSS',
      'HTML',
      'React-Redux',
      'JavaScript',
    ],
    code: 'https://github.com/zunairkhan811/react-book-store',
    demo: 'https://zunairkhan811.github.io/react-book-store/',
    image: one,
  },
  {
    id: 10,
    projectName: 'Webly Education',
    projectDesc: 'This is the project made for Education purpose by connecting tutors and students around the world to get education remotely.',
    tags: [
      'CSS',
      'HTML',
      'JavaScript',
    ],
    code: 'https://github.com/zunairkhan811/Web-development-course-Project',
    demo: 'https://zunairkhan811.github.io/Web-development-course-Project/',
    image: five,
  },
  {
    id: 11,
    projectName: 'Food Recipe',
    projectDesc: 'In this project, Food recipes is made based on the logged in user and generate the shopping list for that items which are missing for recipes. App has the authorization and authentications features. A user can create and delete recipes if he is the owner of that Recipe.',
    tags: [
      'Ruby on Rails',
      'Devise',
      'Authorization',
      'PostgreSql',
      'BootStrap',
      'Rspec testing',
    ],
    code: 'https://github.com/zunairkhan811/food-recipe',
    demo: 'https://github.com/zunairkhan811/food-recipe',
    image: seven,
  },

];

/*
 * Do not remove any fields.
 * Leave it blank instead as shown below
 */

/*
 *{
 *    id: 1,
 *    projectName: 'Car Pooling System',
 *    projectDesc: '',
 *    tags: ['Flutter', 'React'],
 *    code: '',
 *    demo: '',
 *    image: ''
 *},
 */
