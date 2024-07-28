

// // const express = require('express');
// // const cors = require('cors');
// // const dotenv = require('dotenv');
// // const http = require('http'); // Import HTTP module
// // const socketIo = require('socket.io'); // Import Socket.io
// // dotenv.config();


// // const server = http.createServer(app);
// // const io = socketIo(server);
// // const app = express();
// // const port = process.env.PORT || 3000;

// // // Middleware
// // app.use(express.json());
// // app.use(cors());

// // // Import routes
// // const registerRoute = require('./routes/registerRoute');
// // const loginRoute = require('./routes/login');
// // const forgotPasswordRoute = require('./routes/forgotPassword');
// // const verifyOtpRoute = require('./routes/verifyOtp');
// // const bus=require('./Route/busRoute');
// // const booking=require('./Route/bookingRoutes');
// // const driver=require('./Route/driversRoute');
// // const seat=require('./Route/selectedSeatsRoutes');
// // const emailController = require('./routes/emailController');
// // const route=require('./Route/routeSearch');
// // const card=require('./Route/paymentRoutes');

// // // Use routes
// // app.use('/register', registerRoute);
// // app.use('/login', loginRoute);
// // app.use('/forgotPassword', forgotPasswordRoute);
// // app.use('/verifyOtp',verifyOtpRoute);
// // app.use('/bus',bus);
// // app.use('/booking',booking);
// // app.use('/driver',driver);
// // app.use('/seat',seat);
// // app.use('/email', emailController); 
// // app.use('/routes',route);
// // app.use('/card',card);
// // // // Default route
// // // app.get('/', (req, res) => {
// // //   res.send('Welcome to the Bus Booking Application');
// // // });


// // // app.listen(port, () => {
// // //   console.log(`Server is running on port ${port}`);
// // // });

// // // Default route
// // app.get('/', (req, res) => {
// //   res.send('Welcome to the Bus Booking Application');
// // });

// // // Add Socket.io event listeners
// // io.on('connection', (socket) => {
// //   console.log('New client connected');
  
// //   socket.on('disconnect', () => {
// //     console.log('Client disconnected');
// //   });
// // });

// // // Start the server
// // server.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });

// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const http = require('http'); // Import HTTP module
// const socketIo = require('socket.io'); // Import Socket.io

// dotenv.config();

// const app = express(); // Initialize express app first
// const port = process.env.PORT || 3000;

// // Create an HTTP server with the express app
// const server = http.createServer(app);

// // Set up Socket.io with the HTTP server
// const io = socketIo(server);

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Import routes
// const registerRoute = require('./routes/registerRoute');
// const loginRoute = require('./routes/login');
// const forgotPasswordRoute = require('./routes/forgotPassword');
// const verifyOtpRoute = require('./routes/verifyOtp');
// const bus = require('./Route/busRoute');
// const booking = require('./Route/bookingRoutes');
// const driver = require('./Route/driversRoute');
// const seat = require('./Route/selectedSeatsRoutes');
// const emailController = require('./routes/emailController');
// const route = require('./Route/routeSearch');
// const card = require('./Route/paymentRoutes');

// // Use routes
// app.use('/register', registerRoute);
// app.use('/login', loginRoute);
// app.use('/forgotPassword', forgotPasswordRoute);
// app.use('/verifyOtp', verifyOtpRoute);
// app.use('/bus', bus);
// app.use('/booking', booking);
// app.use('/driver', driver);
// app.use('/seat', seat);
// app.use('/email', emailController);
// app.use('/routes', route);
// app.use('/card', card);

// // Default route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Bus Booking Application');
// });

// // Add Socket.io event listeners
// io.on('connection', (socket) => {
//   console.log('New client connected');
  
//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });

// // Start the server
// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const http = require('http'); // Import HTTP module
// const socketIo = require('socket.io'); // Import Socket.io

// dotenv.config();

// const app = express(); // Initialize express app first
// const port = process.env.PORT || 3000;

// // Create an HTTP server with the express app
// const server = http.createServer(app);

// // Set up Socket.io with the HTTP server
// // const io = socketIo(server);
// const io = socketIo(server, {
//   cors: {
//     origin: 'http://localhost:5173', // Replace with your frontend origin
//     methods: ['GET', 'POST'],
//   },
// });


// // Middleware
// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:5173', // Allow frontend origin
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));

// // Import routes
// const registerRoute = require('./routes/registerRoute');
// const loginRoute = require('./routes/login');
// const forgotPasswordRoute = require('./routes/forgotPassword');
// const verifyOtpRoute = require('./routes/verifyOtp');
// const bus = require('./Route/busRoute');
// const booking = require('./Route/bookingRoutes');
// const driver = require('./Route/driversRoute');
// const seat = require('./Route/selectedSeatsRoutes');
// const emailController = require('./routes/emailController');
// const route = require('./Route/routeSearch');
// const card = require('./Route/paymentRoutes');

// // Use routes
// app.use('/register', registerRoute);
// app.use('/login', loginRoute);
// app.use('/forgotPassword', forgotPasswordRoute);
// app.use('/verifyOtp', verifyOtpRoute);
// app.use('/bus', bus);
// app.use('/booking', booking);
// app.use('/driver', driver);
// app.use('/seat', seat);
// app.use('/email', emailController);
// app.use('/routes', route);
// app.use('/card', card);

// // Default route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Bus Booking Application');
// });

// // Add Socket.io event listeners
// io.on('connection', (socket) => {
//   console.log('New client connected');

//   // Example event listener
//   socket.on('exampleEvent', (data) => {
//     console.log('Received exampleEvent:', data);
//   });

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });

//   socket.on('error', (err) => {
//     console.error('Socket error:', err);
//   });
// });

// // Start the server
// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const socketIo = require('socket.io');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Create an HTTP server with the express app
const server = http.createServer(app);

// Set up Socket.io with the HTTP server
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:5173', // Replace with your frontend origin
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Allow frontend origin
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Import routes
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/login');
const forgotPasswordRoute = require('./routes/forgotPassword');
const verifyOtpRoute = require('./routes/verifyOtp');
const bus = require('./Route/busRoute');
const booking = require('./Route/bookingRoutes');
const driver = require('./Route/driversRoute');
const seat = require('./Route/selectedSeatsRoutes');
const emailController = require('./routes/emailController');
const route = require('./Route/routeSearch');
const card = require('./Route/paymentRoutes');
const board=require('./Route/boardingPointsRoute')

// Use routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/forgotPassword', forgotPasswordRoute);
app.use('/verifyOtp', verifyOtpRoute);
app.use('/bus', bus);
app.use('/booking', booking);
app.use('/driver', driver);
app.use('/seat', seat);
app.use('/email', emailController);
app.use('/routes', route);
app.use('/card', card);
app.use('/boarding-points',board);
// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Bus Booking Application');
});

// Add Socket.io event listeners
io.on('connection', (socket) => {
  console.log('New client connected');

  // Example event listener
  socket.on('exampleEvent', (data) => {
    console.log('Received exampleEvent:', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err);
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
