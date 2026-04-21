class Logger {
  constructor(message) {
    this.text = message;
    this.reset = "\x1b[0m";
    this.red = "\x1b[31m";
    this.green = "\x1b[32m";
    this.yellow = "\x1b[33m";
    this.blue = "\x1b[34m";
    this.magenta = "\x1b[35m";
    this.cyan = "\x1b[36m";
    this.white = "\x1b[37m";
    this.domain = `${this.cyan}[HOME ASSISTANT]${this.reset}`;
  }

  message(newMessage) {
    this.text = newMessage;
    return this;
  }

  info(newMessage) {
    if (newMessage) {
      this.text = newMessage;
    }
    const status = `${this.white}[LOG]: ${this.reset}`;
    console.log(this.domain + status + this.text);
  }
  success(newMessage) {
    if (newMessage) {
      this.text = newMessage;
    }
    const status = `${this.green}[SUCCESS]: ${this.reset}`;
    console.log(this.domain + status + this.text);
  }
  error(newMessage) {
    if (newMessage) {
      this.text = newMessage;
    }
    const status = `${this.red}[ERROR]: ${this.reset}`;
    console.log(this.domain + status + this.text);
  }
  warn(newMessage) {
    if (newMessage) {
      this.text = newMessage;
    }
    const status = `${this.yellow}[LOG]: ${this.reset}`;
    console.log(this.domain + status + this.text);
  }
}

export default Logger;
