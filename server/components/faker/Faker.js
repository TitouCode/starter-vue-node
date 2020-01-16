const fs = require('fs');
const path = require('path');

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

class Faker {

    /**
     * Generate a number of post 
     * @param {int} value default number of row to create
     */
    generatePost (value = 50) {
        const posts = [];
        for (let v = 0; v < value; v++) {
            const title = this.getRdmText(true);
            const body = this.getRdmText();
            posts.push({
                id: v,
                title,
                body 
            });
        }
        fs.writeFile('./data/posts.json', JSON.stringify(posts), (err) => {
            if (err) throw err;
            console.log('Posts succesfully generated!');
        });
        return posts;
    }

    /**
     * Generate a number of todo
     * @param {int} value default number of row to create
     */
    generateTodos (value = 50) {
        const todos = [];
        for (let v = 0; v < value; v++) {
            const title = this.getRdmText(true);
            todos.push({
                id: v,
                title,
                completed: Math.random() >= 0.5
            });
        }
        fs.writeFile('./data/todos.json', JSON.stringify(todos), (err) => {
            if (err) throw err;
            console.log('Todos succesfully generated!');
        });
        return todos;
    }

    /**
     * Get a Random part of a text between title (shorter) or body
     * @param {boolean} isTitle Default False
     */
    getRdmText (isTitle = false) {
        const loremSize = lorem.length;
        const start = this.getRdmNumber(Math.round(loremSize/3));
        const max = isTitle ?  (start + 25): loremSize;
        const end = this.getRdmNumber(max, start);
        return lorem.substring(start, end);
    }

    /**
     * Get a Random number between an interval
     * @param {int} min Minimum of the interval
     * @param {int} max Maximum of the interval
     */
    getRdmNumber (max = 1000, min = 0) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

module.exports = Faker;