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

app.post('/prevchat', (req, res) => {
    const { username } = req.body
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

app.post('/user', (req, res) => {
    const { username, password } = req.body;
    console.log('Received login request:', username, password)
    const query = 'SELECT * FROM movie_categories';
    connection.query(query, (err, results) => {
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
    var { chat_text } = req.body;
    console.log('Received login request:', chat_text);
    var chattext = String(chat_text)
    username = password = 'user'
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