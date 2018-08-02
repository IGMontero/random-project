require('dotenv').config();

CONFIG = {}; // Global

CONFIG.app = process.env.APP || "development";
CONFIG.port = process.env.PORT || 3000;