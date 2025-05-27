import logging

YELLOW = "\033[93m"
RESET = "\033[0m"

class YellowFormatter(logging.Formatter):
    def format(self, record):
        message = super().format(record)
        return f"{YELLOW}{message}{RESET}"

def setup_logger():
    handler = logging.StreamHandler()
    handler.setFormatter(YellowFormatter("%(asctime)s [%(levelname)s] %(message)s"))

    logger = logging.getLogger()
    logger.setLevel(logging.INFO)
    logger.handlers = [handler]
