const logger = require('./logger/loggers');

// logger.info("Este es un mensaje de informacion...")
// logger.debug("Este es un mensaje de debug...")
// logger.warn("Este es un mensaje de warn...")
// logger.error("Este es un mensaje de error...")

function show_error(message) {
  try {
    throw new Error(message)
  } catch (error) {
    logger.error(error.message)
  }
}
show_error('Este es un mensaje de error con try...')
