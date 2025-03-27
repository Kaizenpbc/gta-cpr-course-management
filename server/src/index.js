"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const init_1 = require("./database/init");
const auth_1 = __importDefault(require("./routes/auth"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 9005;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Request logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    // Log response
    const originalSend = res.send;
    res.send = function (data) {
        console.log(`[${new Date().toISOString()}] Response:`, data);
        return originalSend.call(res, data);
    };
    next();
});
// Initialize database when server starts
(0, init_1.initializeDatabase)()
    .then(() => {
    console.log('Database initialized successfully');
})
    .catch((error) => {
    console.error('Failed to initialize database:', error);
    process.exit(1);
});
// Routes
app.use('/api/auth', auth_1.default);
// Basic route for testing
app.get('/', (req, res) => {
    res.json({ message: 'Educational System API is running' });
});
// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
