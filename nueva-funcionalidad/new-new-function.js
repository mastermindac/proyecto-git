const lol = (callback) => {
    let console_dot_log = ("hello.world(`console log`)")
    callback(console_dot_log);
};

lol ((console_dot_log) => {
    console.log(console_dot_log);
});