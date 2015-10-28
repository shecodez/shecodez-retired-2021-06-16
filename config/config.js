/**
 * Created by Jan on 8/16/2015.
 */
'use strict';

/**
 * Module Dependencies
 */

var pkg     = require('../package.json');

/**
 * Configuration File
 */

var config = {};

// From package.json
config.name         = pkg.name;
config.version      = pkg.version;
config.description  = pkg.description;
config.author       = pkg.author;
//config.keywords     = pkg.keywords;
//config.engine       = pkg.engines.node;

config.port         = process.env.PORT || 3000;
config.ga           = process.env.GA || 'google analytics key';

/**
 * Database Configuration
 */

config.mongodb        = {};
config.mongodb.url    = process.env.MONGODB_URL || 'localhost';

/**
 * Session Configuration
 */

var hour              = 3600000;
var day               = (hour * 24);
var week              = (day * 7);

// Session
config.session                 = {};
config.session.secret          = process.env.SESSION_SECRET || 'my big secret';
config.session.name            = 'sid';  // Generic - don't leak information
config.session.proxy           = false;  // Trust the reverse proxy for HTTPS/SSL
config.session.resave          = false;  // Forces session to be saved even when unmodified
config.session.saveUninitialized = false; // forces a session that is "uninitialized" to be saved to the store

config.session.cookie          = {};
config.session.cookie.httpOnly = true;   // Reduce XSS attack vector
config.session.cookie.secure   = false;  // Cookies via HTTPS/SSL
config.session.cookie.maxAge   = process.env.SESSION_MAX_AGE || week;

/**
 * Mailing Configuration
 */

// Who are we sending email as?
config.smtp                    = {};
config.smtp.name               = process.env.SMTP_FROM_NAME    || 'Nicole J. Nobles';
config.smtp.address            = process.env.SMTP_FROM_ADDRESS || 'me@shecodez.com';

// How are we sending it?
config.gmail                   = {};
config.gmail.user              = process.env.SMTP_USERNAME || 'shecodez@gmail.com';
config.gmail.password          = process.env.SMTP_PASSWORD || 'appspecificpassword';