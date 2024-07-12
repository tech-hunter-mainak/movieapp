const express = require('express')
const cors = require('cors')
const axios = require('axios')
const mysql = require('mysql')
const { json } = require('react-router-dom')
const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movieapp'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

var movie_get_responce = ['I got the movie you want. You might be asking about this movie.', 'You might be asking for this movie.', 'I got the movie you are asking for. Here are the details.']

var no_movie = ['Sorry, I don\'t know about this movie.', 'Its likely that this movie isn\'t there in my database.', 'I didn\'t find this movie. Please check if this name entered is correct or not.']

var suggest_movie = ['I may suggest you this movie', 'You can watch this movie.', 'This movie better fits you.']

var not_in_range = ['Sorry, I couldn\'t get your query. I can suggest you a movie or episode or series based on your preference, or I can give you details of the same.', 'It seems that you asked me something beyond my knowledge. Try asking me to suggest you a movie or episode or series.']

var card_type = ['VISA', 'MASTERCARD', 'RuPay']

var mv_sub_ctr_count = 0
var mv_count = 0

app.get('/data', (req, res) => {
    const query = 'SELECT * FROM movie_categories';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('An error occurred while retrieving data.');
            return;
        }
        console.log(String(results[0].mv_sub_ctr_name).split(','))
        res.json(results);
    });
});

app.post('/engmovies', (req, res) => {
    var query = "SELECT * FROM `movieapp`.`movie_suggestions` WHERE mv_lang = 'English'"
    connection.query(query, (err, results) => {
        if (err) {
            console.log("Error executing query:", err)
            res.status(500).send("Error occured while fetching user's chat.")
            return
        }
        if (results.length > 0) {
            console.log("Previous movies found")

            res.json(results)
        }
        else {
            console.log("No movies found")
            res.json({
                message: '',
                status: 404
            })
        }
    })
})

app.post('/prevchat', (req, res) => {
    const { username } = req.body
    console.log(username)
    const query = "SELECT * FROM " + username + "_chat"
    connection.query(query, (err, results) => {
        if (err) {
            console.log("Error executing query:", err)
            res.status(500).send("Error occured while fetching user's chat.")
            return
        }
        if (results.length > 0) {
            console.log("Previous chats found")

            res.json(results)
        }
        else {
            console.log("No chats found")
            res.json({
                message: '',
                status: 404
            })
        }
    })
})

app.post('/prevtransactions', (req, res) => {
    const { username } = req.body
    console.log(username)
    const query = "SELECT * FROM " + username + "_transaction_details"
    connection.query(query, (err, results) => {
        if (err) {
            console.log("Error executing query:", err)
            res.status(500).send("Error occured while fetching user's chat.")
            return
        }
        if (results.length > 0) {
            console.log("Previous transactions found")

            res.json(results)
        }
        else {
            console.log("No transactions found")
            res.json({
                message: '',
                status: 404
            })
        }
    })
})


app.post('/signup', (req, res) => {
    const { username, password, email, userfname, userlname, bankusername, bankifsc, bankaccnum, cardusername, cardnumber, cardexp, cardcvv, paytype, trpin, wallet } = req.body;

    console.log(username, password, email, userfname, userlname, bankusername, bankifsc, bankaccnum, cardusername, cardnumber, cardexp, cardcvv, paytype, trpin, wallet)

    var query = "CREATE TABLE IF NOT EXISTS `movieapp`.`userregdetails` (`uid` INT NOT NULL AUTO_INCREMENT , `u_fname` TEXT NOT NULL , `u_lname` TEXT NOT NULL , `u_mail` VARCHAR(90) NOT NULL , `u_pass` VARCHAR(16) NOT NULL , `u_regdtime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`uid`))"

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('An error occurred while retrieving user data.');
            return;
        }
        console.log("Userdetails table created successfully.")
    });

    var query = "CREATE TABLE IF NOT EXISTS `" + username + "_chat` ( `text_id` int(11) NOT NULL, `text_str` text NOT NULL, `text_root` text NOT NULL, `poster` text NOT NULL, `mv_title` text NOT NULL, `mv_release_dt` text NOT NULL, `mv_genre` text NOT NULL, `mv_actors` text NOT NULL, `text_datetime` datetime NOT NULL DEFAULT current_timestamp())"

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('An error occurred while retrieving user data.');
            return;
        }
        console.log("Chat history table created successfully.")
    });

    var query = "CREATE TABLE IF NOT EXISTS `movieapp`.`" + username + "_transaction_details` (`tr_id` INT NOT NULL AUTO_INCREMENT , `tr_hash` VARCHAR(60) NOT NULL , `payment_type` TEXT NOT NULL , `payment_desc` TEXT NOT NULL , `payment_amount` INT NOT NULL , `movie_name` TEXT NOT NULL , `wallet_amount_add` INT NOT NULL , `wallet_hash` VARCHAR(50) NOT NULL , `payment_datetime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`tr_id`), UNIQUE (`tr_hash`, `movie_name`, `wallet_hash`))"

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('An error occurred while retrieving user data.');
            return;
        }
        console.log("Transaction history table created successfully.")
    });

    var query = "CREATE TABLE IF NOT EXISTS `movieapp`.`user_payment_details` (`pid` INT NOT NULL AUTO_INCREMENT , `usrname` VARCHAR(20) NOT NULL , `usrpass` VARCHAR(20) NOT NULL , `payment_type` TEXT NOT NULL , `card_number` BIGINT NOT NULL , `card_usrname` TEXT NOT NULL , `card_cvv` INT NOT NULL , `cardexp` INT NOT NULL  , `card_pin` INT NOT NULL , `bank_acc_name` TEXT NOT NULL , `bank_name` TEXT NOT NULL , `bank_branch` TEXT NOT NULL , `bank_ifsc` VARCHAR(25) NOT NULL , `bank_acc_number` TEXT NOT NULL , PRIMARY KEY (`pid`))"

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('An error occurred while retrieving user data.');
            return;
        }
        console.log("Payment table created successfully.")
    });

    var query = "INSERT INTO `movieapp`.`user_payment_details` (`usrname`, `usrpass`, `payment_type`, `card_number`, `card_usrname`, `card_cvv`, `cardexp` , `trpin`, `bank_acc_name`, `bank_ifsc`, `bank_acc_number`, `wallet_id`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)"

    connection.query(query, [username, password, paytype, cardnumber, cardusername, cardcvv, cardexp, trpin, bankusername, bankifsc, bankaccnum, wallet], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('An error occurred while inserting payment data.');
            return;
        }
        console.log("User registered successfully.")
    });

    var query = "INSERT INTO `movieapp`.`userregdetails` (`u_fname`, `u_lname`, `u_mail`, `u_pass`, `usrname`) VALUES (?, ?, ?, ?, ?)"

    connection.query(query, [userfname, userlname, email, password, username], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('An error occurred while retrieving user data.');
            return;
        }
        console.log("User registered successfully.")
        res.json({ message: "User registered successfully." })
    });

})

app.post('/purchase', (req, res) => {
    const { username, moviename, pamount, wamount, trpin, trhash, payfor, payusing } = req.body;
    let balance = 0, spend = 0, add = 0;

    console.log(username, moviename, pamount, wamount, trpin, trhash, payfor, payusing)

    const queryUser = 'SELECT * FROM `movieapp`.`user_payment_details` WHERE `usrname` = ?';
    connection.query(queryUser, [username], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('An error occurred while retrieving user data.');
            return;
        }

        if (results.length > 0) {
            const user = results[0];
            console.log(results[0])
            console.log(user.trpin)

            if (trpin != user.trpin) {
                res.json({ message: "Transaction pin does not match." });
                return;
            }

            balance = Number(user.wallet_net);
            spend = Number(user.total_spend);
            add = Number(user.total_add);

            if (payfor === 'movie') {
                if (payusing === 'walletpay' && balance < Number(pamount)) {
                    res.json({ message: "Insufficient balance. Add amount to wallet." });
                    return;
                }

                const insertTransaction = "INSERT INTO `movieapp`.`" + username + "_transaction_details` (`tr_hash`, `payment_type`, `payment_desc`, `payment_amount`, `movie_name`, `wallet_amount_add`) VALUES (?, ?, ?, ?, ?, ?)";
                connection.query(insertTransaction, [trhash, payfor, payusing, pamount, moviename, wamount], (err) => {
                    if (err) {
                        console.error('Error executing query:', err);
                        res.status(500).send('An error occurred while retrieving user data.');
                        return;
                    }
                });

                if (payusing === 'walletpay') {
                    const updateBalance = "UPDATE `movieapp`.`user_payment_details` SET `wallet_net` = ? WHERE `usrname` = ?";
                    connection.query(updateBalance, [Number(balance - Number(pamount)), username], (err) => {
                        if (err) {
                            console.error('Error executing query:', err);
                            res.status(500).send('An error occurred while updating wallet balance.');
                            return;
                        }
                    });
                }

                const updateSpend = "UPDATE `movieapp`.`user_payment_details` SET `total_spend` = ? WHERE `usrname` = ?";
                connection.query(updateSpend, [Number(spend + Number(pamount)), username], (err) => {
                    if (err) {
                        console.error('Error executing query:', err);
                        res.status(500).send('An error occurred while updating total spend.');
                        return;
                    }

                    res.json({ message: "Movie successfully purchased." });
                });
            } else if (payfor === 'wallet') {
                const insertTransaction = "INSERT INTO `movieapp`.`" + username + "_transaction_details` (`tr_hash`, `payment_type`, `payment_desc`, `payment_amount`, `movie_name`, `wallet_amount_add`) VALUES (?, ?, ?, ?, ?, ?)";
                connection.query(insertTransaction, [trhash, payfor, payusing, pamount, moviename, wamount], (err) => {
                    if (err) {
                        console.error('Error executing query:', err);
                        res.status(500).send('An error occurred while inserting transaction.');
                        return;
                    }
                });

                const updateWalletNet = "UPDATE `movieapp`.`user_payment_details` SET `wallet_net` = ? WHERE `usrname` = ?";
                connection.query(updateWalletNet, [Number(balance + Number(wamount)), username], (err) => {
                    if (err) {
                        console.error('Error executing query:', err);
                        res.status(500).send('An error occurred while updating wallet balance.');
                        return;
                    }
                });

                const updateTotalAdd = "UPDATE `movieapp`.`user_payment_details` SET `total_add` = ? WHERE `usrname` = ?";
                connection.query(updateTotalAdd, [Number(add + Number(wamount)), username], (err) => {
                    if (err) {
                        console.error('Error executing query:', err);
                        res.status(500).send('An error occurred while updating total add.');
                        return;
                    }

                    res.json({ message: "Money added to wallet successfully." });
                });
            }
        } else {
            res.json({message: 'User not found.'});
        }
    });
});


app.post('/user', (req, res) => {
    const { lmail, lpass } = req.body;
    console.log('Received login request:', lmail, lpass)
    const query = 'SELECT * FROM `movieapp`.`userregdetails` WHERE `u_mail` = ? AND `u_pass` = ?';
    connection.query(query, [lmail, lpass], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('An error occurred while retrieving user data.');
            return;
        }
        if (results.length > 0) {
            console.log('User found:', results[0]);
            res.json(results[0]);
        } else {
            console.log('User not found');
            res.status(404).send('User not found.');
        }
    });
});

app.post('/botquery', async (req, res) => {
    var { username, chat_text } = req.body;
    console.log(username)
    console.log('Received login request:', chat_text);
    var chattext = String(chat_text)
    var userquery = chattext.toLowerCase().trim()
    var query = 'CREATE TABLE IF NOT EXISTS `movieapp`.`' + username + '_chat` (`text_id` INT NOT NULL AUTO_INCREMENT , `text_str` TEXT NOT NULL , `text_root` TEXT NOT NULL , `text_datetime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`text_id`))';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('An error occurred while retrieving user data.');
            return;
        }
        console.log(username + " Table created successfully")
    });
    var query = "INSERT INTO `" + username + "_chat` (`text_str`, `text_root`) VALUES (?, 'user')";
    connection.query(query, [chattext], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('An error occurred while inserting user query.');
            return;
        }
        console.log(username + " user query inserted successfully; query = " + chat_text)
    });
    if (userquery.includes('movie') || userquery.includes('film') || userquery.includes('series') || userquery.includes('episode')) {
        if (userquery.includes('suggest') || userquery.includes('provide') || userquery.includes('give') || userquery.includes('name')) {
            if (userquery.includes('suggest') || userquery.includes('provide') || userquery.includes('give')) {
                if (userquery.includes('detail') || userquery.includes('analysis') || userquery.includes('analyze')) {
                    // var suggest_movie_bottext_cnt = Math.floor(Math.random() * suggest_movie.length)
                }
                // var suggest_movie_cnt = Math.floor(Math.random() * suggest_movie.length)
            }
            // var suggest_movie_cnt = Math.floor(Math.random() * suggest_movie.length)
            var query = 'SELECT * FROM `movie_categories`'
            var result_data_length = 0, mv_ctr;
            connection.query(query, (err, results) => {
                if (err) {
                    console.error('Error executing query:', err);
                    res.status(500).send('An error occurred while executing user query.');
                    return;
                }
                // console.log(JSON.stringify(results))
                result_data_length = Number(results.length)
                // console.log(result_data_length)
                // console.log(String(results[0].mv_sub_ctr_name).split(','))
                console.log(result_data_length)
                var chat_reply_num = Math.floor(Math.random() * result_data_length)
                mv_ctr = results[chat_reply_num].mv_ctr_name
                console.log(mv_ctr)
            })
            chat_reply_num = Math.floor(Math.random() * suggest_movie.length)
            var botreply = suggest_movie[chat_reply_num]
        }
        var posterUrl, title, release, genre, actor
        try {
            const apiUrl = 'https://www.omdbapi.com/?t=Shawshank&page=3&apikey=452c13f3';
            const response = await axios.get(apiUrl);
            console.log(response.data.Poster)
            posterUrl = response.data.Poster
            title = response.data.Title
            release = response.data.Released
            genre = response.data.Genre
            actor = response.data.Actors

            var query = "INSERT INTO `" + username + "_chat` (`text_str`, `text_root`, `poster`, `mv_title`, `mv_release_dt`, `mv_genre`, `mv_actors`) VALUES (?, 'bot', ?, ?, ?, ?, ?)";
            connection.query(query, [botreply, posterUrl, title, release, genre, actor], async (err, results) => {
                if (err) {
                    console.error('Error executing query:', err);
                    res.status(500).send('An error occurred while inserting user query.');
                    return;
                }
                console.log(username + " user query inserted successfully")


                var generatedData = {
                    userquery: userquery,
                    message: botreply,
                    title: title,
                    release: release,
                    genre: genre,
                    actor: actor,
                    movie_ctr: mv_ctr,
                    movie_sub_ctr: "mv_sub_ctr",
                    movieName: "movie name",
                    posterUrl: posterUrl
                }
                res.json(generatedData);
            });
        } catch (error) {
            console.error('Error calling external API:', error);
            res.status(500).send('An error occurred while retrieving data.');
        }

    }
    else {
        var not_in_range_num = Math.floor(Math.random() * not_in_range.length)
        var botreply = not_in_range[not_in_range_num]
        var query = "INSERT INTO `" + username + "_chat` (`text_str`, `text_root`) VALUES (?, 'bot')";
        connection.query(query, [botreply], (err, results) => {
            if (err) {
                console.error('Error executing query:', err);
                res.status(500).send('An error occurred while inserting user query.');
                return;
            }
            console.log(username + " user query inserted successfully")
            var generatedData = {
                message: botreply
            }
            res.json(generatedData);
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});