'use strict';

/**
 * game-result service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::game-result.game-result');
