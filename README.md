# Todo Application

A full-stack Todo application built with React, Node.js, Express, and MongoDB, containerized with Docker for easy development and deployment.

## 🚀 Features

- ✅ Create, read, update, and delete todos
- 📝 Add titles and descriptions to todos
- ✔️ Mark todos as completed/incomplete
- 🔄 Real-time updates with hot reloading
- 🐳 Fully containerized with Docker
- 📱 Responsive Bootstrap UI

## 🛠️ Technology Stack

### Frontend
- **React 19.1.0** - Modern React with hooks
- **Bootstrap 5.3.6** - Responsive UI components
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### DevOps
- **Docker & Docker Compose** - Containerization
- **Hot Reloading** - Development efficiency

## 📋 Prerequisites

- Docker and Docker Compose installed
- Git (for cloning the repository)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone git@github.com:muntasir-exabyting/cursor-ide-test.git
   cd cursor-ide-test
   ```

2. **Start the application**
   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5001
   - MongoDB: localhost:27017

## 📁 Project Structure

```
├── backend/                 # Node.js/Express API
│   ├── models/             # Mongoose models
│   │   └── todo.model.js   # Todo data model
│   ├── routes/             # API routes
│   │   └── todos.js        # Todo CRUD endpoints
│   ├── index.js            # Express server setup
│   ├── package.json        # Backend dependencies
│   └── Dockerfile          # Backend container config
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── TodosList.js
│   │   │   ├── CreateTodo.js
│   │   │   ├── EditTodo.js
│   │   │   ├── EditTodoModal.js
│   │   │   └── Todo.js
│   │   ├── App.js          # Main App component
│   │   └── index.js        # React entry point
│   ├── package.json        # Frontend dependencies
│   └── Dockerfile          # Frontend container config
├── docker-compose.yml      # Multi-container setup
└── README.md              # Project documentation
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/todos` | Get all todos |
| POST | `/todos/add` | Create a new todo |
| GET | `/todos/:id` | Get a specific todo |
| POST | `/todos/update/:id` | Update a todo |
| DELETE | `/todos/:id` | Delete a todo |

## 📊 Data Model

```javascript
{
  title: String (required),
  description: String (optional),
  completed: Boolean (default: false),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## 🐳 Docker Services

- **frontend**: React development server (port 3000)
- **backend**: Express API server (port 5001)
- **mongo**: MongoDB database (port 27017)

## 🔧 Development

### Hot Reloading
Both frontend and backend support hot reloading:
- Frontend: File changes trigger automatic browser refresh
- Backend: Server restarts automatically on code changes

### Environment Variables
- `MONGODB_URI`: MongoDB connection string (defaults to `mongodb://mongo:27017/todoapp`)
- `WATCHPACK_POLLING`: Enables file watching for hot reload

### Local Development
```bash
# Start all services
docker-compose up

# Start in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild containers
docker-compose up --build
```

## 📝 Usage

1. **Create a Todo**: Click "Add Todo" and fill in the title and description
2. **View Todos**: All todos are displayed on the main page
3. **Edit Todo**: Click the edit button to modify a todo
4. **Complete Todo**: Check the checkbox to mark as completed
5. **Delete Todo**: Click the delete button to remove a todo

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Muntasir**
- GitHub: [@muntasir-exabyting](https://github.com/muntasir-exabyting)

## 🙏 Acknowledgments

- Built with Create React App
- Styled with Bootstrap
- Containerized with Docker
- Database powered by MongoDB 