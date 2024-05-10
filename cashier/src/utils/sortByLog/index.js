const sortUsersByLog = (users, loggedInUsers) => {
    return users.sort((a, b) => {
        if (loggedInUsers.some(user => user.id === a.id) && !loggedInUsers.some(user => user.id === b.id)) {
            return -1;
        } else if (!loggedInUsers.some(user => user.id === a.id) && loggedInUsers.some(user => user.id === b.id)) {
            return 1;
        } else {
            return 0;
        }
    });
};

export default sortUsersByLog;
