// DEPENDENCIES
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const poolDB = require("./db");

// CONFIG
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
